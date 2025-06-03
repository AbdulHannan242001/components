import React, { useRef } from "react";
import bg from "../../assets/R02BG.jpg";
import ring from "../../assets/R02Ring.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(175);
  const mouseY = useMotionValue(175);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(175);
    mouseY.set(175);
  };

  // Depth: farther items move less
  const bgTranslateX = useTransform(springX, [0, 350], [8, -8]);
  const bgTranslateY = useTransform(springY, [0, 350], [8, -8]);

  const ringTranslateX = useTransform(springX, [0, 350], [-6, 6]);
  const ringTranslateY = useTransform(springY, [0, 300], [-6, 6]);

  const textTranslateX = useTransform(springX, [0, 350], [12, -12]);
  const textTranslateY = useTransform(springY, [0, 300], [12, -12]);

  return (
    <section className="min-h-screen flex items-center justify-center p-[8px]">
      <div className="min-h-[400px] w-[350px] bg-white shadow-xl rounded-lg overflow-hidden">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[350px] w-full cursor-pointer bg-black"
        >
          {/* Background Image */}
          <motion.img
            src={bg}
            alt="Background"
            style={{ x: bgTranslateX, y: bgTranslateY, scale: 1.05 }}
            transition={{ type: "spring" }}
            className="w-full h-full object-cover absolute inset-0 -z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

          {/* Ring Image */}
          <motion.div
            style={{ x: ringTranslateX, y: ringTranslateY }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <img
              src={ring}
              alt="Ring"
              className="object-cover h-[150px] w-[150px] pointer-events-none drop-shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            style={{ x: textTranslateX, y: textTranslateY }}
            className="absolute inset-0 w-full h-[120px] items-center justify-end z-10 flex flex-col"
          >
            <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-md">
              COLMI R02
            </h2>
            <p className="text-5xl font-extrabold text-white leading-8 drop-shadow-2xl ">
              SMART RING
            </p>
          </motion.div>
        </div>
        <div className="p-4 rounded-2xl ">
          <h2 className="text-gray-800 font-extrabold text-xl">
            COLMI RO2 SMART RING
          </h2>
          <div className="flex flex-row gap-2 pt-1 pb-3">
            <span className="border border-gray-500 text-gray-600 rounded-md px-2 text-sm">
              {" "}
              Fashion{" "}
            </span>
            <span className="border border-gray-500 text-gray-600 rounded-md px-2 text-sm">
              {" "}
              Health{" "}
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-4">
            The COLMI R02 Smart Ring is a sleek and stylish wearable device
            designed to monitor your health and fitness.
          </p>
          <div className="flex flex-row justify-between items-end pt-4">
            <div className="flex flex-col gap-0">
              <p className="text-gray-800 text-sm leading-5 tracking-wide">
                Price
              </p>
              <p className="text-gray-800 font-extrabold text-xl leading-3">
                $100
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-yellow-300 to-yellow-500 hover:bg-yellow-400 text-white font-bold py-1 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Add to cart
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
