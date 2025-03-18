import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import star from "../../assets/Star.png";
import dbz from "../../assets/DBZ.png";

const BentoGrid = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: "0%", y: "-5%" }); // Initial position
  const divSize = 60; // Size of the white circle
  const buttonRef = useRef(null);

  // Handle mouse movement within the button
  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // X relative to button
    const y = event.clientY - rect.top; // Y relative to button

    // Center the circle on the cursor (adjust for circle size)
    const newX = Math.max(0, Math.min(x - divSize / 2, rect.width - divSize));
    const newY = Math.max(0, Math.min(y - divSize / 2, rect.height - divSize));

    setPosition({ x: newX, y: newY });
  };

  // Reset to original position when mouse leaves
  const handleMouseLeave = () => {
    setPosition({ x: "0%", y: "-5%" });
  };

  return (
    <section className="flex justify-center items-center min-h-screen w-full text-black">
      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col p-2 gap-2 bg-black rounded-2xl w-full md:w-8/12 relative overflow-hidden z-10"
      >
        <motion.div
          className="absolute size-32 bg-gradient-to-tr from-yellow-200 to-amber-400 rounded-full blur-2xl z-10"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ left: "0%", top: "-5%" }}
          animate={{ left: position.x, top: position.y }}
        />
        <div className="flex flex-col md:flex-row gap-2 min-h-[300px] relative z-50">
          <div className="w-full md:w-3/12 bg-neutral-100 p-[20px] hover:bg-gradient-to-b from-orange-500 to-amber-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300">
            <div className="h-full w-full flex flex-col justify-between">
              <p className="font-semibold text-2xl md:text-4xl tracking-tighter uppercase">
                DRAGON BALL Z
              </p>
              <p className="text-base md:text-xl leading-none">Created by Akira Toriyama.</p>
            </div>
          </div>
          <div className="w-full md:w-9/12 bg-neutral-100 p-[20px] hover:rounded-xl rounded-3xl transition-all duration-200">
            <div className="h-full w-full flex flex-col justify-between">
              <p className="font-semibold text-2xl md:text-4xl tracking-tighter uppercase">
                Aired On April 26, 1989
              </p>
              <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <p className="font-semibold text-4xl md:text-7xl tracking-tighter leading-none">
                  TOEI ANIMATION
                </p>
                <div className="flex flex-wrap flex-row gap-2">
                  <div className="h-[150px] md:w-fit w-full max-w-full md:max-w-[130px] bg-neutral-200 rounded-lg p-2 flex flex-col justify-between">
                    <p className="text-xl font-semibold">Protagonist</p>
                    <p>Son Goku</p>
                  </div>
                  <div className="h-[150px] md:w-fit w-full max-w-full md:max-w-[130px] bg-neutral-200 rounded-lg p-2 flex flex-col justify-between">
                    <p className="text-xl font-semibold">Episodes</p>
                    <p>291</p>
                  </div>
                  <div className="h-[150px] md:w-fit w-full max-w-full md:max-w-[130px] bg-neutral-200 rounded-lg p-2 flex flex-col justify-between">
                    <p className="text-xl font-semibold">Seasons</p>
                    <p>9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 min-h-[300px] relative z-50">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full md:w-9/12 bg-neutral-100 p-[20px] hover:rounded-xl rounded-3xl transition-all duration-200 flex flex-row gap-[30px]"
          >
            <div className="h-full flex flex-col justify-between w-8/12">
              <p className="font-semibold text-2xl md:text-4xl tracking-tighter uppercase">
                HISTORY
              </p>
              <p className="text-base md:text-xl leading-none">
                <p className="font-semibold text-4xl md:text-7xl tracking-tighter leading-none">
                  SEQUEAL TO THE DRAGON BALL
                </p>
              </p>
            </div>
            <div className="h-full w-4/12 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 30 : 0,
                  x: isHovered ? -20 : 0,
                  y: isHovered ? -20 : 0,
                  boxShadow: isHovered
                    ? "0px 10px 30px rgba(0, 0, 0, 0.5)"
                    : "0px 0px 0px rgba(0, 120, 255, 0)",
                }}
                className="size-[75px] md:size-[150px] bg-gradient-to-tr from-yellow-600 to-orange-500 rounded-full relative"
              >
                <img
                  src={star}
                  alt=""
                  className="absolute size-[28px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full md:w-3/12 bg-neutral-100 overflow-hidden hover:rounded-xl rounded-3xl transition-all duration-200">
            <motion.img whileHover={{ scale: 1.1 }} src={dbz} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
