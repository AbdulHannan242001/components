import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const TextAnimation = ({ text }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  return (
    <section
      ref={containerRef}
      className="flex justify-center items-center min-h-screen text-xl md:text-5xl font-serif font-bold uppercase"
    >
      {Array.from(text).map((letter, index) => (
        <span key={index} className="overflow-hidden md:px-0.5">
          <Alphabet
            key={`top-${index}`}
            letter={letter}
            delay={index * 0.03 + 0.15}
            isInView={isInView}
            isSpace={letter === " "}
          />
        </span>
      ))}
    </section>
  );
};

const Alphabet = ({ letter, delay, isSpace, isInView }) => {
  const ref = useRef(null);

  const variants = {
    animate: { x: 0 },
    hidden: { x: 60 },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      animate={isInView ? "animate" : "hidden"}
      transition={{ duration: 0.5, delay, ease: [0.4, 0.5, 0, 1.5] }}
      className={`inline-block ${isSpace ? "mr-2" : "mr-[0px]"}`}
    >
      {letter}
    </motion.span>
  );
};

export default TextAnimation;
