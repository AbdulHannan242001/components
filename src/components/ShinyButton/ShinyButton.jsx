import React from 'react';
import { motion } from 'framer-motion';
import "./index.css"

const ShinyButton = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <motion.button
                className="px-6 py-2 rounded-md relative overflow-hidden bg-gradient-to-r from-neutral-800 via-transparent to-neutral-800 text-neutral-100 tracking-wide font-light shadow-lg hover:shadow-xl focus:shadow-xl"
                initial={{ "--x": "100%", scale: 1 }}
                animate={{ "--x": "-100%" }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                        type: "spring",
                        stiffness: 10,
                        damping: 5,
                        mass: 0.1,
                    },
                }}
                style={{
                    '--tw-bg-opacity': 1,
                    '--x': '100%'
                }}
            >
                <span className="relative">
                    Start Now
                </span>
                <span
                    className="block absolute inset-0 rounded-md p-[1.2px] pointer-events-none bg-gradient-to-r from-white/10 via-white/50 to-white/10"
                    style={{
                        backgroundImage: `linear-gradient(-75deg, rgba(255, 255, 255, 0.1) calc(var(--x) + 20%), rgba(255, 255, 255, 0.5) calc(var(--x) + 25%), rgba(255, 255, 255, 0.1) calc(var(--x) + 100%))`,
                        mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                        WebkitMask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                    }}
                />
            </motion.button>
        </section>
    );
};

export default ShinyButton;
