import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const OverlapButton = () => {
  const divVariants = {
    initial: {
      scale: 0,
      y: "100%",
      originY: 1,
    },
    hover: {
      scale: 2.5,
      y: 0,
      originY: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <motion.button
        className="hover:text-zinc-800 relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-5 py-3 text-zinc-50"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{scale: 1}}
      >
        <motion.div
          className="absolute inset-0 z-10 rounded-[100%] bg-zinc-100"
          variants={divVariants}
        />
        <p className="relative z-20">Hello World</p>
        <span className="relative z-20">
          <TbArrowRight />
        </span>
      </motion.button>
    </main>
  );
};

export default OverlapButton;
