import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const GlitchText = ({
  text,
  trigger = "hover",
  duration = 1,
  ease = "easeOut",
  intensity = 10,
  className = "",
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*<>/█▓▒░";
  const progress = useMotionValue(0);
  const isAnimating = useRef(false);
  const requestRef = useRef(null);

  // 1. Force the *original* text when progress = 0 or >= text.length
  const scrambled = useTransform(progress, (latest) => {
    const p = Math.min(Math.max(latest, 0), text.length); // clamp
    const current = Math.floor(p);

    // At the very start (0) and at the very end (text.length) return the real text
    if (current === 0 || current === text.length) return text;

    return text
      .split("")
      .map((char, i) => {
        if (i < current) return char;
        if (Math.random() > intensity) return char;
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
  });

  const startScramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // start from the clean text
    progress.set(0);

    const animation = animate(progress, text.length, {
      type: "tween",
      duration,
      ease,
      onComplete: () => {
        // 2. Snap to the exact end → guarantees clean text
        progress.set(text.length);
        isAnimating.current = false;
      },
    });

    requestRef.current = animation;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const eventHandlers = {
    onMouseEnter: trigger === "hover" ? startScramble : undefined,
    onClick: trigger === "click" ? startScramble : undefined,
  };

  return (
    <motion.span
      className={`${className} inline-block text-4xl font-mono uppercase`}
      style={{ position: "relative" }}
      {...eventHandlers}
      {...(trigger === "view" && {
        onViewportEnter: startScramble,
        viewport: { once: false, amount: 0.8 },
      })}
      aria-label={text} // Accessibility
    >
      {/* Visible glitching text */}
      <motion.span aria-hidden="true">{scrambled}</motion.span>

      {/* Hidden original text for screen readers */}
      <span className="sr-only">{text}</span>
    </motion.span>
  );
};

export default GlitchText;
