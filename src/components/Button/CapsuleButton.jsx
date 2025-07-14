import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CapsuleButton = () => {
  const parent = {
    initial: {
      backgroundColor: "white",
      color: "black",
    },
    hover: {
      backgroundColor: "black",
      color: "white",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const child = {
    initial: {
      marginLeft: "8px",
      rotate: "-45deg",
    },
    hover: {
      marginLeft: "12px",
      rotate: "0deg",
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.button
        variants={parent}
        initial="initial"
        whileHover="hover"
        className="px-6 py-3 flex text-nowrap justify-center items-center rounded-full font-semibold transition-colors"
      >
        Hello World
        <motion.span variants={child}>
          <FaArrowRight size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default CapsuleButton;
