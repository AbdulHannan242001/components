import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import pic1 from "../../assets/Picture1.jpg";
import pic2 from "../../assets/Picture2.jpg";
import pic3 from "../../assets/Picture3.jpg";
import pic4 from "../../assets/Picture4.jpg";
import pic5 from "../../assets/Picture5.jpg";
import pic6 from "../../assets/Picture6.jpg";

const ImageTrail = () => {
  const [images, setImages] = useState([]);
  const isMounted = useRef(true);
  const currentIndex = useRef(0); // Track current index (0 to 5)
  const lastPosition = useRef({ x: 0, y: 0 }); // Track last mouse position

  const urls = [
    { src: pic1, alt: "Child with ice cream" },
    { src: pic2, alt: "Child with messy ice cream" },
    { src: pic3, alt: "Woman in striped shirt" },
    { src: pic4, alt: "Woman with bun" },
    { src: pic5, alt: "Two ice cream cones" },
    { src: pic6, alt: "Family with ice cream" },
  ];

  // Animation variants for images
  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 0.5, bounce: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    isMounted.current = true;

    const handleMouseMove = (event) => {
      if (!isMounted.current) return;

      const { clientX, clientY } = event;
      const imageSize = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 120 : 160;
      const newX = Math.min(Math.max(clientX - imageSize / 2, 0), window.innerWidth - imageSize);
      const newY = Math.min(Math.max(clientY - imageSize / 2, 0), window.innerHeight - imageSize);

      const distance = Math.sqrt(
        Math.pow(newX - lastPosition.current.x, 2) + Math.pow(newY - lastPosition.current.y, 2)
      );

      if (distance > 100) {
        const id = Date.now() + Math.random();
        const index = currentIndex.current;
        currentIndex.current = (currentIndex.current + 1) % urls.length; 
        const randomRotation = Math.random() * 60 - 30; 
        
        setImages((prev) => [
          ...prev,
          {
            id,
            x: newX,
            y: newY,
            src: urls[index].src,
            alt: urls[index].alt,
            rotation: randomRotation,
          },
        ]);

        lastPosition.current = { x: newX, y: newY };

        // Remove image after 1 second
        setTimeout(() => {
          if (isMounted.current) {
            setImages((prev) => prev.filter((img) => img.id !== id));
          }
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      isMounted.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-start px-[30px] justify-center relative bg-gradient-to-b from-neutral-50 to-neutral-100 text-white overflow-hidden py-8 sm:py-12 md:py-16">
      {/* Image Trail */}
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="absolute w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px]"
          style={{
            top: `${image.y}px`,
            left: `${image.x}px`,
            rotate: image.rotation,
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-hidden="true"
        >
          <img
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 160px"
            style={{ objectFit: "cover", borderRadius: "10px", border: "2px solid white" }}
            onError={() => {
              setImages((prev) => prev.filter((img) => img.id !== image.id));
            }}
          />
        </motion.div>
      ))}

      {/* Text Content */}
      <h2 className="mix-blend-exclusion max-w-[90%] md:max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-tight sm:leading-snug pb-4 sm:pb-6 md:pb-8 z-50 pointer-events-none">
        This is an Image Trail components using React and Framer Motion
      </h2>
      <p className="mix-blend-exclusion text-base sm:text-lg md:text-xl pb-3 sm:pb-4 md:pb-5 z-50">
        Spawns images on mouse move
      </p>
    </div>
  );
};

export default ImageTrail;