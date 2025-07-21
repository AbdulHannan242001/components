import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const CapsuleButton = () => {
  const parent = {
    initial: {
      backgroundColor: "white",
      gap: "0px",
      color: "black",
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    },
    hover: {
      gap: "4px",
      backgroundColor: "black",
      color: "white",
      boxShadow: "0px 4px 8px 0px rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const child = {
    initial: {
      rotate: "-45deg",
    },
    hover: {
      rotate: "0deg",
      transition: {
        delay: 0.15,
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.button
        variants={parent}
        initial="initial"
        whileHover="hover"
        className="px-6 py-3 flex text-nowrap justify-center items-center rounded-full transition-colors"
      >
        Hello World
        <motion.span variants={child}>
          <TbArrowRight size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default CapsuleButton;
