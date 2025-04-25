import React, { useRef } from "react";
import { TbArrowRight } from "react-icons/tb";
import { motion, useMotionValue } from "framer-motion";

const ArrowButton = ({ text }) => {
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(-16); // Initial top: -40% of 40px = -16px
  const divSize = 34;

  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const newX = Math.max(0, Math.min(mouseX - divSize / 2, rect.width - divSize));
    const newY = Math.max(0, Math.min(mouseY - divSize / 2, rect.height - divSize));

    x.set(newX);
    y.set(newY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(-16); // Reset to -40% (40px * -0.4 = -16px)
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
          className="absolute size-[34px] bg-white rounded-full blur-xl"
          style={{ x, y }}
          initial={{ x: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ArrowButton;