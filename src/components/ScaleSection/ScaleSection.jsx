import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import clouds from "../../assets/clouds.jpg";
import island from "../../assets/island.jpg";
import picture5 from "../../assets/Picture5.jpg";

const ScaleSection = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const { scrollYProgress: scrollY1 } = useScroll({
    target: containerRef1,
    offset: ["start end", "center center"],
  });
  const { scrollYProgress: scrollY2 } = useScroll({
    target: containerRef2,
    offset: ["start end", "center center"],
  });
  const { scrollYProgress: scrollY3 } = useScroll({
    target: containerRef3,
    offset: ["start end", "center center"],
  });

  const divVariant1 = useTransform(scrollY1, [0,1], ["70%", "100%"]);
  const bgVariant1 = useTransform(scrollY1, [0,1], [2.5, 1]);

  const divVariant2 = useTransform(scrollY2, [0,1], ["70%", "100%"]);
  const bgVariant2 = useTransform(scrollY2, [0,1], [2.5, 1]);

  const divVariant3 = useTransform(scrollY3, [0,1], ["70%", "100%"]);
  const bgVariant3 = useTransform(scrollY3, [0,1], [2.5, 1]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div
        ref={containerRef1}
        className="h-screen w-full flex items-center justify-center"
      >
        <motion.div
          className="h-screen w-full relative overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            width: divVariant1,
            height: "100dvh",
          }}
        >
          <motion.img
            src={clouds}
            className="w-full h-full object-cover absolute inset-0"
            style={{ scale: bgVariant1 }}
          />
          <h1 className="fixed top-[50%] left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white w-full text-center px-4 sm:px-6 lg:px-8">
            Hello There
          </h1>
        </motion.div>
      </div>
      <div
        ref={containerRef2}
        className="h-screen w-full flex items-center justify-center"
      >
        <motion.div
          className="h-screen w-full relative overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            width: divVariant2,
            height: "100dvh",
          }}
        >
          <motion.img
            src={island}
            className="w-full h-full object-cover absolute inset-0"
            style={{ scale: bgVariant2 }}
          />
          <h1 className="fixed top-[50%] left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white w-full text-center px-4 sm:px-6 lg:px-8">
            Still Here ?
          </h1>
        </motion.div>
      </div>
      <div
        ref={containerRef3}
        className="h-screen w-full flex items-center justify-center"
      >
        <motion.div
          className="h-screen w-full relative overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            width: divVariant3,
            height: "100dvh",
          }}
        >
          <motion.img
            src={picture5}
            className="w-full h-full object-cover absolute inset-0"
            style={{ scale: bgVariant3 }}
          />
          <h1 className="fixed top-[50%] left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white w-full text-center px-4 sm:px-6 lg:px-8">
            Beat It Dude !
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default ScaleSection;
