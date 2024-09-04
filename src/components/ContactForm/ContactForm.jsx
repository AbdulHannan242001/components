import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [focusedField, setFocusedField] = useState("");

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = (field) => {
        if (focusedField === field) {
            setFocusedField("");
        }
    };

    const labelAnimate = (field) => {
        return focusedField === field
            ? { y: -28, scale: 0.85 }
            : { y: 0, scale: 1, width: "95%" };
    };

    return (
        <section className="flex items-center justify-center min-h-screen w-full">
            <div className="relative w-full max-w-lg p-8 space-y-8 bg-neutral-950 z-[50] rounded-xl shadow-2xl overflow-clip bg-blend-saturation">
                <div className='absolute -top-16 left-1/2 -translate-x-1/2 size-32 z-[-1] rounded-full bg-gray-500/60 blur-3xl'></div>
                <h2 className="text-4xl font-bold text-center text-white tracking-wide">Get in Touch</h2>
                <p className="text-center text-white">We'd love to hear from you! Fill out the form below to reach us.</p>
                <form className="space-y-6 text-white">
                    <div className='flex flex-row justify-between gap-x-4'>
                        <div className="relative flex flex-col group w-6/12">
                            <motion.label
                                initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                animate={labelAnimate("fullname")}
                                className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                                htmlFor="fullname"
                            >
                                Full Name *
                            </motion.label>
                            <input
                                type="text"
                                id="fullname"
                                onFocus={() => handleFocus("fullname")}
                                onBlur={() => handleBlur("fullname")}
                                className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                        <div className="relative flex flex-col group w-6/12">
                            <motion.label
                                initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                animate={labelAnimate("email")}
                                className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                                htmlFor="email"
                            >
                                Email *
                            </motion.label>
                            <input
                                type="email"
                                id="email"
                                onFocus={() => handleFocus("email")}
                                onBlur={() => handleBlur("email")}
                                className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col group w-full">
                        <motion.label
                            initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                            animate={labelAnimate("Number")}
                            className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                            htmlFor="Number"
                        >
                            Number
                        </motion.label>
                        <input
                            id="Number"
                            type="tel"
                            onFocus={() => handleFocus("Number")}
                            onBlur={() => handleBlur("Number")}
                            className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                        />
                    </div>
                    <div className="relative flex flex-col group w-full">
                        <motion.label
                            initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                            animate={labelAnimate("Description")}
                            className="absolute left-2 top-3 text-white text-sm pointer-events-none bg-neutral-950 px-2"
                            htmlFor="Description"
                        >
                            Description *
                        </motion.label>
                        <textarea
                            id="Description"
                            onFocus={() => handleFocus("Description")}
                            onBlur={() => handleBlur("Description")}
                            rows="4"  // Setting the number of visible lines
                            className="bg-transparent text-white text-sm rounded-lg border border-gray-300 w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                        />
                    </div>
                    <motion.button
                        className='px-6 py-2 rounded-md relative radial-gradient'
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
                                mass: 0.1
                            }
                        }}
                    >
                        <span className='text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask'>
                            To The Moon
                        </span>
                        <span className='block absolute inset-0 rounded-md p-[1px] linear-overlay' />
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
