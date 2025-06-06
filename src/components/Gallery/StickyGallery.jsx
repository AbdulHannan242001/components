import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import picture1 from "../../assets/Picture1.jpg";
import picture4 from "../../assets/Picture4.jpg";
import picture7 from "../../assets/Picture7.jpg";

const StickyGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const card1 = {
    scale: useTransform(scrollYProgress, [0, 0.33], ["100%", "95%"]),
  };

  const card2 = {
    scale: useTransform(scrollYProgress, [0, 0.75], ["100%", "95%"]),
  };

  const card3 = {
    scale: useTransform(scrollYProgress, [0, 1], ["100%", "100%"]),
  };

  return (
    <section
      ref={containerRef}
      className="h-[300dvh] flex flex-col items-center gap-[20dvh] justify-center relative px-8"
    >
      <motion.div
        style={{ scale: card1.scale }}
        className="sticky top-10 bg-zinc-800 flex items-center justify-center h-[80dvh] max-w-[1400px] w-full rounded-xl border-2 border-white/20 overflow-hidden z-[5]"
      >
        <img src={picture1} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div
        style={{ scale: card2.scale }}
        className="sticky top-10 bg-zinc-800 flex items-center justify-center h-[80dvh] max-w-[1400px] w-full rounded-xl border-2 border-white/20 overflow-hidden z-[6]"
      >
        <img src={picture7} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div
        style={{ scale: card3.scale }}
        className="sticky top-10 bg-zinc-800 flex items-center justify-center h-[80dvh] max-w-[1400px] w-full rounded-xl border-2 border-white/20 overflow-hidden z-[7]"
      >
        <img src={picture4} alt="" className="h-full w-full object-cover" />
      </motion.div>
    </section>
  );
};

export default StickyGallery;
