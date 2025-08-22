import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Logo.svg";

const IntroAnimation = ({ onAnimationComplete, children, loadingComplete, loadingProgress }) => {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("introAnimationSeen");
    }
    return true;
  });
  const [showMotto, setShowMotto] = useState(false);

  useEffect(() => {
    // Show motto after logo appears
    const mottoTimer = setTimeout(() => {
      setShowMotto(true);
    }, 800);

    // Complete animation only when both timer expires and loading is complete
    const animationTimer = setTimeout(() => {
      if (loadingComplete) {
        setShowIntro(false);
        if (typeof window !== "undefined") {
          localStorage.setItem("introAnimationSeen", "true");
        }
        onAnimationComplete?.();
      }
    }, 5000); // Minimum 5 seconds to ensure users see the animation

    return () => {
      clearTimeout(mottoTimer);
      clearTimeout(animationTimer);
    };
  }, [onAnimationComplete, loadingComplete]); // Removed showIntro from dependencies

  // Handle case when loading completes after timer
  useEffect(() => {
    if (loadingComplete && showIntro) {
      // If loading is complete and intro is still showing, complete after a short delay
      // But ensure minimum 5 seconds total animation time
      const completeTimer = setTimeout(() => {
        setShowIntro(false);
        if (typeof window !== "undefined") {
          localStorage.setItem("introAnimationSeen", "true");
        }
        onAnimationComplete?.();
      }, 4000); // Increased delay to ensure minimum 5s total

      return () => clearTimeout(completeTimer);
    }
  }, [loadingComplete, showIntro, onAnimationComplete]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
          >
            {/* Blurred background overlay */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(20px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-neutral-900/30"
            />

            {/* Main content container */}
            <div className="relative h-full flex flex-col items-center justify-center">
              {/* Skip button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                onClick={() => {
                  setShowIntro(false);
                  if (typeof window !== "undefined") {
                    localStorage.setItem("introAnimationSeen", "true");
                  }
                  onAnimationComplete?.();
                }}
                className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors text-sm font-medium z-20"
              >
                Skip
              </motion.button>
              
              {/* Large Logo */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  scale: 0.3,
                  opacity: 0,
                  x: typeof window !== "undefined" ? -window.innerWidth * 0.4 : -400,
                  y: typeof window !== "undefined" ? -window.innerHeight * 0.4 : -300,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  exit: { duration: 1.2, ease: "easeInOut" },
                }}
                className="relative z-10"
              >
                <motion.img
                  src={logo}
                  alt="Logo"
                  className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
                  style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))" }}
                />
              </motion.div>

              {/* Motto */}
              <AnimatePresence>
                {showMotto && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-8 text-center"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-xl md:text-2xl lg:text-3xl font-light max-w-2xl text-white/90 italic"
                    >
                      A collection of beautifully crafted, responsive components with smooth animations and interactive effects
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Bar - Only show if loading is not complete */}
              {!loadingComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 w-64"
                >
                  <div className="relative h-2 bg-neutral-700/50 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-white/70 text-center">
                    Loading: {Math.round(loadingProgress)}%
                  </p>
                </motion.div>
              )}

              {/* Subtle background particles - Reduced count for performance */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
                      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
                    }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
                      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                    className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={showIntro ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </>
  );
};

export default IntroAnimation;