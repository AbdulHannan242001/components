import React from "react";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import GlitchText from "../GlitchText/GlitchText";
const DotButton = () => {
  const cta = "let's get started";
  const parent = {
    initial: {},
    hover: {
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const dotParent = {
    initial: {
      scale: 1,
      x: 18,
      y: -1,
    },
    hover: {
      scale: 5.5,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const dotChild = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <motion.button
        variants={parent}
        initial="initial"
        whileHover="hover"
        className="relative rounded-full border border-gray-300 h-[46px] w-[205px] flex items-center"
      >
        <motion.div
          variants={dotParent}
          className="overflow-hidden bg-green-500 rounded-full h-[6px] w-[6px]"
        >
          <motion.span
            variants={dotChild}
            className="-rotate-45 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          >
            <MdArrowForward size={4} />
          </motion.span>
        </motion.div>
        <GlitchText
          text={cta}
          trigger="hover"
          duration={0.7}
          intensity={0.9}
          className="text-sm absolute left-[40px] font-medium w-fit h-full flex items-center px-2 "
        />
      </motion.button>
    </section>
  );
};

export default DotButton;
