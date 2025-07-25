import React, { useEffect, useState, useRef } from "react";

const INITIAL_VELOCITY_SCALE = 0.2; // Scale factor for initial random velocity (percentage per frame)
const MAX_VELOCITY = 0.4; // Maximum velocity (percentage per frame) to prevent extreme speeds
const CONNECTION_RADIUS = 200; // Max distance in pixels for lines to be drawn
const LINE_COLOR = "100,100,100";
const DENSITY_FACTOR = 25000; // Pixels per particle (tuned for ~50 particles on 1440x900)
const MIN_PARTICLES = 20; // Minimum number of particles
const MAX_PARTICLES = 100; // Maximum number of particles

const ParticleSection = () => {
  const [numOfParticles, setNumOfParticles] = useState(0);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(null);

  const canvasRef = useRef(null);

  // Calculate number of particles based on container size
  const calculateNumOfParticles = () => {
    const container = containerRef.current;
    if (!container) return MIN_PARTICLES;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const area = containerWidth * containerHeight;
    const calculatedParticles = Math.floor(area / DENSITY_FACTOR);
    return Math.max(
      MIN_PARTICLES,
      Math.min(MAX_PARTICLES, calculatedParticles)
    );
  };

  useEffect(() => {
    const updateParticlesCount = () => {
      const newNum = calculateNumOfParticles();
      setNumOfParticles(newNum);
    };

    updateParticlesCount();
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateParticlesCount, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      // Create an array of numOfParticles particles
      const newParticles = Array.from({ length: numOfParticles }).map(
        (_, i) => ({
          id: i, // Unique ID for React's key prop
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          vx: (Math.random() - 0.5) * INITIAL_VELOCITY_SCALE, // Random value between -0.1 and 0.1
          vy: (Math.random() - 0.5) * INITIAL_VELOCITY_SCALE, // Random value between -0.1 and 0.1
          radius: 5,
          color: "rgba(70,70,70)",
        })
      );
      setParticles(newParticles);
    };
    generateParticles();
  }, [numOfParticles]);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  /**
   * useEffect hook for the animation loop and collision detection.
   * This also handles drawing the connecting lines on the canvas.
   * Runs only once when the component mounts.
   * Basically, this is the main game loop. Something pygame would bring in.
   */
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    // If container or canvas are not ready, request another frame and return
    if (!container || !canvas) {
      animationFrameId.current = requestAnimationFrame(() => {
        // Retry after a short delay if elements aren't ready
        if (!containerRef.current || !canvasRef.current) {
          // If still not ready, schedule again. Otherwise, start animate.
          animationFrameId.current = requestAnimationFrame(animate);
        } else {
          animate();
        }
      });
      return;
    }

    const ctx = canvas.getContext("2d");

    // Define the animation function
    const animate = () => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Set canvas dimensions to match container's current dimensions
      canvas.width = containerWidth;
      canvas.height = containerHeight;

      // Clear the canvas before drawing new lines
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      // Set line style for connections
      ctx.lineWidth = 1;

      // --- Drawing lines between particles and to the cursor ---
      // We need pixel coordinates for drawing and distance calculations.
      // Convert all particle positions to pixel coordinates for this frame.
      const particlesPx = particles.map((p) => ({
        ...p,
        pxX: (p.x / 100) * containerWidth,
        pxY: (p.y / 100) * containerHeight,
      }));

      // 1. Draw lines between particles
      for (let i = 0; i < particlesPx.length; i++) {
        for (let j = i + 1; j < particlesPx.length; j++) {
          // Avoid duplicate lines and self-connection
          const p1 = particlesPx[i];
          const p2 = particlesPx[j];

          const dx = p1.pxX - p2.pxX;
          const dy = p1.pxY - p2.pxY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            let opacity = 1;
            // Calculate opacity: full from 0-100px, fades from 100-200px
            if (distance > 100) {
              opacity = 1 - (distance - 100) / (CONNECTION_RADIUS - 100);
            }
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.pxX, p1.pxY);
            ctx.lineTo(p2.pxX, p2.pxY);
            ctx.stroke();
          }
        }
      }

      // 2. Draw lines between particles and the cursor
      if (cursorPosition) {
        // Only draw if cursor position has been set
        const cursorPxX = cursorPosition.x;
        const cursorPxY = cursorPosition.y;

        for (const p of particlesPx) {
          const dx = p.pxX - cursorPxX;
          const dy = p.pxY - cursorPxY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            let opacity = 1;
            // Calculate opacity: full from 0-100px, fades from 100-200px
            if (distance > 100) {
              opacity = 1 - (distance - 100) / (CONNECTION_RADIUS - 100);
            }
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p.pxX, p.pxY);
            ctx.lineTo(cursorPxX, cursorPxY);
            ctx.stroke();
          }
        }
      }

      // --- Update the particles' positions and velocities ---
      setParticles((prevParticles) => {
        return prevParticles.map((p, index) => {
          let { x, y, vx, vy, radius } = p;

          // 1. Update particle position (still in percentage)
          x += vx;
          y += vy;

          // 2. Convert current percentage position to pixel coordinates for accurate collision detection
          let currentPxX = (x / 100) * containerWidth;
          let currentPxY = (y / 100) * containerHeight;

          // 3. Check for collisions with horizontal walls (left and right)
          if (currentPxX - radius < 0) {
            currentPxX = radius; // Adjust position to be exactly at the boundary
            vx *= -1; // Reverse horizontal velocity to simulate a bounce
          } else if (currentPxX + radius > containerWidth) {
            currentPxX = containerWidth - radius; // Adjust position
            vx *= -1; // Reverse horizontal velocity
          }

          // 4. Check for collisions with vertical walls (top and bottom)
          if (currentPxY - radius < 0) {
            currentPxY = radius; // Adjust position
            vy *= -1; // Reverse vertical velocity
          } else if (currentPxY + radius > containerHeight) {
            currentPxY = containerHeight - radius; // Adjust position
            vy *= -1; // Reverse vertical velocity
          }

          // 5. Particle-particle collision (simplified repulsion, as per original user code structure)
          // Note: This approach has limitations as it modifies velocities for 'p' based on 'otherP'
          // from the *previous* state, and does not correctly update 'otherP' in the same frame.
          // For more accurate physics, a different collision resolution approach would be needed.
          for (const otherP of prevParticles) {
            // Iterate over previous state for other particles
            if (otherP.id !== p.id) {
              // Convert other particle's percentage position to pixel
              const otherPxX = (otherP.x / 100) * containerWidth;
              const otherPxY = (otherP.y / 100) * containerHeight;

              const dx = currentPxX - otherPxX;
              const dy = currentPxY - otherPxY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < radius + otherP.radius) {
                // Simple repulsion: apply a small push away from the colliding particle
                const angle = Math.atan2(dy, dx);
                vx += Math.cos(angle) * 0.01; // Small push in percentage terms
                vy += Math.sin(angle) * 0.01; // Small push in percentage terms
              }
            }
          }

          // 6. Apply Max Velocity Constraint to prevent particles from moving too fast
          vx = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vx));
          vy = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vy));

          // 7. Convert updated pixel position back to percentage for state storage
          // This ensures particles are rendered correctly relative to the container's size.
          x = (currentPxX / containerWidth) * 100;
          y = (currentPxY / containerHeight) * 100;

          // Return the updated particle object
          return { ...p, x, y, vx, vy };
        });
      });

      // Request the next animation frame, creating a continuous loop
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start the animation loop when the component mounts
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particles, cursorPosition]);

  return (
    <main className="min-h-screen flex items-center justify-center p-2 md:p-4 font-inter bg-neutral-900">
      <div
        ref={containerRef}
        className="relative w-full h-[calc(100dvh-60px)] bg-neutral-200 rounded-lg shadow-lg overflow-hidden border border-neutral-700"
        onMouseMove={handleMouseMove}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        ></canvas>

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.radius * 2}px`,
              height: `${particle.radius * 2}px`,
              backgroundColor: particle.color,
              transform: `translate(-50%, -50%)`,
            }}
          ></div>
        ))}

        <div className="p-[10px] md:p-[30px] absolute z-50 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] max-w-xl h-auto rounded-xl bg-black/50 backdrop-blur-sm text-white">
          <h2 className="text-5xl font-bold uppercase tracking-wide pb-[15px] md:pb-[30px] ">
            Particle Section
          </h2>
          <p className="tracking-wide pb-[10px]">
            Despite the fact that this is an amazing section. It does not
            provide any real value. The fact i created this with javascript is
            absurd as there is a whole library for this exact purpose.
          </p>
          <p className="tracking-wide ">
            I just wanted to recreate the PYGAME collision system in React as i
            have also started to work on games. Guess what? It works!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ParticleSection;
