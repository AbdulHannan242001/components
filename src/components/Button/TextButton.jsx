import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const TextButton = () => {
  const text = "Hello World !";
  const controls = useAnimation();

  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.div
        className="flex flex-col gap-0 px-4 py-3 rounded bg-white text-black font-medium cursor-pointer
        "
        initial={{ paddingLeft: "1.2rem", paddingRight: "1.2rem", paddingTop: "0.600rem", paddingBottom: "0.600rem" }}
        whileHover={{ paddingLeft: "0.850rem", paddingRight: "0.850rem", paddingTop: "0.425rem", paddingBottom: "0.425rem" }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => controls.start("hover")}
        onMouseLeave={() => controls.start("initial")}
      >
        <div className="h-[22px] flex flex-col overflow-hidden">
          {/* Top row */}
          <motion.div className="flex">
            {Array.from(text).map((letter, index) => (
              <Alphabet
                key={`top-${index}`}
                letter={letter}
                delay={(index * 0.01) + 0.15}
                controls={controls}
                isSpace={letter === " "}
              />
            ))}
          </motion.div>
          {/* Bottom row */}
          <motion.div className="flex">
            {Array.from(text).map((letter, index) => (
              <Alphabet
                key={`bottom-${index}`}
                letter={letter}
                delay={(index * 0.01) + 0.15}
                controls={controls}
                isSpace={letter === " "}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Alphabet = ({ letter, delay, controls, isSpace }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  const variants = {
    initial: { y: 0 },
    hover: { y: -height },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      animate={controls}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`inline-block ${isSpace ? "mr-1" : "mr-[0px]"}`}
    >
      {letter}
    </motion.span>
  );
};

export default TextButton;