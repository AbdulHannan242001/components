import React, { useRef, useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

const ArrowButton = ({ text }) => {
  const [position, setPosition] = useState({ x: "0%", y: "-40%" }); // Initial position
  const divSize = 40; // Size of the white circle
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
    setPosition({ x: "0%", y: "-40%" });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        ref={buttonRef}
        className="w-fit active:scale-95 cursor-pointer overflow-hidden bg-gradient-to-tr from-violet-500 to-indigo-500 px-3 py-2 flex flex-row gap-2 text-white text-lg font-medium items-center relative z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <p className="z-20">{text}</p>
        <span>
          <TbArrowRight size={22} />
        </span>
        <motion.div
          className="absolute size-12 bg-white rounded-full blur-xl"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ left: "0%", top: "-40%" }}
          animate={{ left: position.x, top: position.y }}
        />
      </div>
    </div>
  );
};

export default ArrowButton;
