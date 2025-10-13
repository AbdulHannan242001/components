import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import camera from "../../assets/camera.jpg";

const SeparateBanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotateImg = useTransform(scrollYProgress, [0, 1], ["0deg", "35deg"]);
  const xImg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-35deg"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-t from-neutral-800 to-neutral-900 text-white overflow-hidden">
      <div
        className="w-full px-4 h-[100dvh] md:h-[150dvh] flex flex-col md:flex-row justify-center items-center md:items-start overflow-hidden relative gap-[10px] md:gap-[30px]"
        ref={containerRef}
      >
        <div className="w-full md:w-6/12 h-full md:sticky left-4 top-0 flex flex-col justify-center items-center gap-[10px] md:gap-[30px]">
          <motion.span style={{ rotate, y, x, opacity }}>
            <h1 className="text-4xl md:text-8xl font-bold text-blue-700 font-['nerko_one'] text-center leading-[0.85]">
              HERE IS A WEIRD LOOKING BANNER
            </h1>
          </motion.span>
          <motion.span
            style={{ rotate, y: yText, x, opacity }}
            className="max-w-xl text-center"
          >
            <p className="text-base text-white">
                This is a simple example of a banner that uses the power of
                Framer Motion to create a unique scrolling effect. The text and
                image rotate and move as you scroll, creating an engaging visual
                experience. You can customize the text, images, and effects to fit
                your design needs.
            </p>
          </motion.span>
        </div>
        <div className="w-full md:w-6/12 md:h-full md:sticky right-4 top-0 flex flex-col justify-center items-center">
          <motion.span
            style={{ rotate: rotateImg, y: y, x: xImg, opacity }}
            className="w-full h-[40vh] md:h-[80dvh] relative"
          >
            <img src={camera} alt="" className="w-full h-full object-cover" />
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default SeparateBanner;
