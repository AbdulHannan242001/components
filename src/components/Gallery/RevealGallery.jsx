import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import picture2 from "../../assets/Picture2.jpg";
import picture6 from "../../assets/Picture6.jpg";
import earphones from "../../assets/earphones.jpg";

const RevealGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const card1 = {
    x: useTransform(scrollYProgress, [0, 0.9], ["0%", "90%"]),
    rotate: useTransform(scrollYProgress, [0, 0.7], ["0deg", "8deg"]),
  };

  const card2 = {
    x: useTransform(scrollYProgress, [0, 0.9], ["0%", "0%"]),
    rotate: useTransform(scrollYProgress, [0, 0.7], ["0deg", "0deg"]),
    scale: useTransform(scrollYProgress, [0, 0.9], [1, 1.2]),
  };

  const card3 = {
    x: useTransform(scrollYProgress, [0, 0.9], ["0%", "-90%"]),
    rotate: useTransform(scrollYProgress, [0, 0.7], ["0deg", "-8deg"]),
  };

  return (
    <section
      ref={containerRef}
      className="h-[200dvh] flex items-start justify-center relative overflow-x-clip"
    >
      <main className="h-screen sticky top-0 w-full">
        <div className="flex items-center justify-center relative w-full h-full">
          <motion.div
            style={{ x: card1.x, rotate: card1.rotate }}
            className="absolute bg-zinc-800 flex items-center justify-center h-[150px] w-4/12 md:h-[450px] md:w-[300px] rounded-xl border-2 border-white/20 overflow-hidden z-10"
          >
            <img src={picture2} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ x: card2.x, rotate: card2.rotate, scale: card2.scale }}
            className="absolute bg-zinc-800 flex items-center justify-center h-[150px] w-4/12 md:h-[450px] md:w-[300px] rounded-xl border-2 border-white/20 overflow-hidden z-20"
          >
            <img
              src={earphones}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ x: card3.x, rotate: card3.rotate }}
            className="absolute bg-zinc-800 flex items-center justify-center h-[150px] w-4/12 md:h-[450px] md:w-[300px] rounded-xl border-2 border-white/20 overflow-hidden z-10"
          >
            <img src={picture6} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default RevealGallery;
