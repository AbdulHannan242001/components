import React, { useRef } from "react";
import camera from "../../assets/camera.jpg";
import island from "../../assets/island.jpg";
import earphones from "../../assets/earphones.jpg";
import {motion, useScroll, useTransform } from "framer-motion";

const TextMask = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ["300%", "0%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);
  const img3 = useTransform(scrollYProgress, [0, 1], ["250%", "0%"]);

  return (
    <section ref={containerRef} className="relative flex bg-black justify-center items-start h-[200dvh] py-[60px] w-full text-black">
      <div class="sticky top-0 text-white text-[12vw] font-bold">
        <h1 class="relative z-10 font-mono leading-none tracking-tighter mix-blend-exclusion">
          Let's build a
        </h1>

        <motion.img style={{ y : img1}} src={camera} class="absolute bottom-48 left-10 w-40" />
        <motion.img style={{ y : img2}} src={island} class="absolute bottom-32 left-1/3 w-40" />
        <motion.img style={{ y : img3}} src={earphones} class="absolute bottom-20 left-2/3 w-40" />
      </div>
    </section>
  );
};

export default TextMask;
