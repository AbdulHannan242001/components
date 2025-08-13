import React, { useRef } from "react";
import camera from "../../assets/camera.jpg";
import island from "../../assets/island.jpg";
import earphones from "../../assets/earphones.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const TextMask = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1 = useTransform(scrollYProgress, [0, 0.8], ["300px", "0%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["600px", "0%"]);
  const img3 = useTransform(scrollYProgress, [0, 0.9], ["200px", "0%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex bg-black justify-center items-start h-[300dvh] py-[30px] sm:py-[45px] lg:py-[60px] w-full text-black"
    >
      <div className="sticky top-0 text-white text-[8vw] sm:text-[10vw] lg:text-[12vw] font-bold flex flex-col items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8">
        <h1 className="relative z-10 font-mono leading-none tracking-tighter mix-blend-exclusion text-center">
          Let's build a
        </h1>

        <motion.img
          style={{ y: img1 }}
          src={camera}
          className="absolute top-2 sm:top-4 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 object-cover rounded-lg"
        />
        <motion.img
          style={{ y: img2 }}
          src={island}
          className="absolute top-16 sm:top-24 left-1/4 sm:left-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 object-cover rounded-lg"
        />
        <motion.img
          style={{ y: img3 }}
          src={earphones}
          className="absolute top-8 sm:top-12 left-2/3 sm:left-2/3 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default TextMask;
