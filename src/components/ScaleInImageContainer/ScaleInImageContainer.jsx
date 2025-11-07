import React, { useRef } from "react";
import camera from "../../assets/camera.jpg";
import island from "../../assets/island.jpg";
import earphones from "../../assets/earphones.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

export const ImageScale = ({ src, alt = "", className = "" }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const containerScale = useTransform(scrollYProgress, [0, 0.9], [0.3, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], ["300%", "100%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ scale: containerScale }}
        className="relative w-full h-full rounded-lg overflow-hidden"
      >
        <motion.img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: imageScale }}
        />
      </motion.div>
    </div>
  );
};
const ScaleInImageContainer = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* ----- LEFT ----- */}
        <div className="flex justify-start mb-12">
          <ImageScale
            src={camera}
            alt="Camera"
            className="w-[300px] h-[400px]" // size you like
          />
        </div>

        {/* ----- RIGHT ----- */}
        <div className="flex justify-end mb-12">
          <ImageScale
            src={island}
            alt="Island"
            className="w-[300px] h-[400px]"
          />
        </div>

        {/* ----- LEFT (again) ----- */}
        <div className="flex justify-start">
          <ImageScale
            src={earphones}
            alt="Earphones"
            className="w-[300px] h-[400px]"
          />
        </div>
      </div>
    </main>
  );
};

export default ScaleInImageContainer;
