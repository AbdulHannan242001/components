import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = () => {
  const smoothReveal = [0.4, 0, 0.2, 1]; // cinematic
  const softTextReveal = [0.25, 0.8, 0.25, 1]; // elegant

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: smoothReveal,
      },
    },
  };

  const bgVariants = {
    hidden: { height: "0%" },
    visible: {
      height: "100%",
      transition: {
        duration: 0.6,
        ease: smoothReveal,
        delay: 0.2,
      },
    },
  };

  const imageWrapperVariants = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 1.1,
        ease: smoothReveal,
        delay: 0.65,
      },
    },
  };

  const imageScaleVariants = {
    hidden: { scale: 1.15 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.2,
        ease: smoothReveal,
        delay: 0.9,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: softTextReveal,
        delay: 1.2,
      },
    },
  };

  return (
    <div className="min-h-[200vh] bg-gray-100 flex flex-col items-center py-20 font-sans">
      {/* Intro Spacer */}
      <div className="h-screen flex flex-col items-center justify-center text-gray-500">
        <h1 className="text-4xl font-bold mb-4">Scroll Down</h1>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-2xl"
        >
          ↓
        </motion.div>
      </div>

      {/* Main Interaction Component */}
      <motion.div
        className="relative w-[80%] max-w-[800px] h-[500px] overflow-hidden rounded-xl bg-gray-300 shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-black z-10"
          variants={bgVariants}
        />

        <motion.div
          className="absolute inset-0 z-20"
          variants={imageWrapperVariants}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000"
            alt="Reveal"
            className="w-full h-full object-cover"
            variants={imageScaleVariants}
          />
        </motion.div>

        {/* Content Overlay */}
        <motion.div
          className="absolute bottom-8 left-8 z-30 text-white"
          variants={contentVariants}
        >
          <h2 className="text-3xl font-bold">Atmospheric Reveal</h2>
          <p className="text-gray-300">A stage-based scroll-reveal animation</p>
        </motion.div>
      </motion.div>

      {/* Footer Spacer */}
      <div className="h-screen" />
    </div>
  );
};

export default function App() {
  return <ScrollReveal />;
}
