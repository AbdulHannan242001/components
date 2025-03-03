import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const InfiniteMarquee = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 40%"],
  });

  const width1 = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);
  const width2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <main
      ref={container}
      className="h-[50vh] flex flex-col justify-start items-start space-y-2"
    >
      <motion.section
        className="flex overflow-hidden"
        style={{ width: width1 }}
      >
        <motion.div
          className="text-8xl font-black tracking-wider flex flex-shrink-0 py-6 bg-white text-black"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          Hello There This Is A Marquee. A Simple Component to make but it
          works.
        </motion.div>
        <motion.div
          className="text-8xl font-black tracking-wider flex flex-shrink-0 py-6 bg-white text-black"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          Hello There This Is A Marquee. A Simple Component to make but it
          works.
        </motion.div>
      </motion.section>

      <motion.section
        className="flex overflow-hidden"
        style={{ width: width2 }}
      >
        <motion.div
          className="text-6xl text-white font-bold tracking-wider flex flex-shrink-0 py-6 bg-gradient-to-b from-sky-500 to-blue-500"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          I Reckon another smaller one with the big one would look good.
        </motion.div>
        <motion.div
          className="text-6xl text-white font-bold tracking-wider flex flex-shrink-0 py-6 pl-1 bg-gradient-to-b from-sky-500 to-blue-500"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          I Reckon another smaller one with the big one would look good.
        </motion.div>
      </motion.section>
    </main>
  );
};

export default InfiniteMarquee;
