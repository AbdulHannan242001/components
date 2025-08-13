export const componentCodes = {
  "Basic Button": {
    react: `import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const Button = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <motion.button
       whileHover={{scale: 1.05}}
       whileTap={{scale: 1}}
       transition={{duration: 0.1}}
       className="w-fit cursor-pointer py-2 sm:py-3 px-4 sm:px-6 flex text-nowrap justify-center items-center rounded-lg bg-zinc-950 bg-opacity-30 backdrop-blur-sm mx-auto overflow-hidden bg-gradient-to-tr from-sky-600 to-blue-600 text-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_0.2)] active:shadow-[inset_2px_2px_6px_rgba(0,_0,_0,_0.6),_inset_-1px_-1px_4px_rgba(0,0,0,_0.5)] text-sm sm:text-base">
        Press Me{" "}
        <span className="ml-1 sm:ml-2">
          {" "}
          <TbArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
        </span>{" "}
      </motion.button>
    </section>
  );
};

export default Button;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Arrow Button": {
    react: `import React, { useRef } from "react";
import { TbArrowRight } from "react-icons/tb";
import { motion, useMotionValue } from "framer-motion";

const ArrowButton = ({ text }) => {
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(-16); // Initial top: -40% of 40px = -16px
  const divSize = 34;

  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const newX = Math.max(
      0,
      Math.min(mouseX - divSize / 2, rect.width - divSize)
    );
    const newY = Math.max(
      0,
      Math.min(mouseY - divSize / 2, rect.height - divSize)
    );

    x.set(newX);
    y.set(newY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(-16); // Reset to -40% (40px * -0.4 = -16px)
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <button
        ref={buttonRef}
        className="w-fit active:scale-95 cursor-pointer overflow-hidden bg-gradient-to-tr from-violet-500 to-indigo-500 px-2 sm:px-3 py-1.5 sm:py-2 flex flex-row gap-1 sm:gap-2 text-white text-sm sm:text-base lg:text-lg font-medium items-center relative z-10 rounded"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <p className="z-20">{text}</p>
        <span>
          <TbArrowRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </span>
        <motion.div
          className="absolute size-[34px] bg-white rounded-full blur-lg"
          style={{ x, y }}
          initial={{ x: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </button>
    </div>
  );
};

export default ArrowButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Squishy Card": {
    react: `import React from 'react'
import { motion } from 'framer-motion'

const Background = () => {
    return (
        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='absolute inset-0 z-00'
            variants={{
                hover: { scale: 1.5 },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.path
                d="M81.0148 133.304C77.1406 129.368 77.1908 123.037 81.1269 119.162L155.96 45.5074C157.928 43.5703 161.093 43.5954 163.03 45.5635L236.686 120.396C240.56 124.332 240.509 130.664 236.573 134.538L179.558 190.656C167.75 202.278 148.755 202.128 137.133 190.32L81.0148 133.304Z"
                fill="#333333"
                variants={{
                    hover: { scale: 0.9, y: -15 },
                }}
                transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
            />

            <motion.path
                d="M81.8649 212.154C77.9908 208.218 78.041 201.887 81.9771 198.013L156.81 124.358C158.778 122.42 161.944 122.446 163.881 124.414L237.536 199.246C241.41 203.182 241.36 209.514 237.424 213.388L180.408 269.506C168.6 281.129 149.605 280.978 137.983 269.17L81.8649 212.154Z"
                fill="#333333"
                variants={{
                    hover: { scale: 0.9, y: -40 },
                }}
                transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
            />

            <motion.path d="M82.8649 263.154C78.9908 259.218 79.041 252.887 82.9771 249.013L157.81 175.358C159.778 173.42 162.944 173.446 164.881 175.414L238.536 250.246C242.41 254.182 242.36 260.514 238.424 264.388L181.408 320.506C169.6 332.129 150.605 331.978 138.983 320.17L82.8649 263.154Z"
                fill="#333333"
                variants={{
                    hover: { scale: 0.9, y: -35 },
                }}
                transition={{ delay: 0.25, duration: 1, ease: "backInOut" }}
            />

        </motion.svg>
    )
}

const SquishyCard = () => {
    return (
        <section className='min-h-[100vh] py-[30px] sm:py-[45px] lg:py-[60px] flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            <motion.div
                whileHover="hover"
                variants={{
                    hover: { scale: 1.1 },
                }}
                transition={{ duration: 1, ease: "backInOut" }}
                className='relative h-64 sm:h-80 lg:h-96 w-full max-w-xs sm:max-w-sm lg:max-w-80 shrink-0 overflow-hidden rounded-lg bg-indigo-600 p-4 sm:p-6 lg:p-8'>
                <div className='relative z-10 text-white '>
                    <span className='mb-2 sm:mb-3 block w-fit rounded-full bg-white/30 px-2 sm:px-3 py-0.5 text-xs sm:text-sm text-white font-light'>Pro</span>
                    <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                            hover: {
                                scale: 1
                            },
                        }}
                        transition={{ duration: 1, ease: "backInOut" }}
                        className='my-1 sm:my-2 block origin-top-left py-0.5 font-semibold text-3xl sm:text-4xl lg:text-6xl text-white'
                    >
                        $99 / Month
                    </motion.span>
                    <p className='my-1 sm:my-2 block py-0.5 text-xs sm:text-sm lg:text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil</p>
                </div>
                <button className='text-sm sm:text-base lg:text-xl absolute bottom-3 sm:bottom-4 right-3 sm:right-4 left-3 sm:left-4 z-20 rounded border-2 border-white bg-white py-1.5 sm:py-2 text-center text-black uppercase backdrop-blur transition-colors hover:bg-white/30 hover:text-white font-bold font-mono' >GET IT NOW</button>
                <Background />
            </motion.div>
        </section>
    );
}

export default SquishyCard;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "3D Carousel": {
    react: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel3d = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 150 : 200);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="px-4 py-16 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">3D Carousel</h2>
        
        <div className="relative h-96 flex items-center justify-center">
          {images.map((image, index) => {
            const angle = ((index - currentIndex) * 360) / images.length;
            const z = radius * Math.cos((angle * Math.PI) / 180);
            const x = radius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  transform: \`translateX(\${x}px) translateZ(\${z}px)\`,
                }}
                animate={{
                  rotateY: angle,
                }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={\`Slide \${index + 1}\`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel3d;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Contact Form": {
    react: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-4 py-16 bg-neutral-900">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-800 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-neutral-400 mb-8">We'd love to hear from you. Send us a message!</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Border Button": {
    react: `import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BorderButton = ({ text }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <DrawOutlineButton>{text}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={\`text-base group relative px-4 py-2 font-medium text-white transition-colors duration-[400ms] hover:text-orange-100 hover:scale-105 active:shadow-md active:shadow-orange-700 w-fit\`}
    >
      <span className="flex items-center">
        {children}{" "}
        <FaArrowRight
          className={\`text-sm ml-2 transition-all duration-100 group-hover:ml-4\`}
        />
      </span>

      <span
        className={\`absolute left-0 top-0 h-[2px] w-0 bg-orange-500 transition-all duration-100 group-hover:w-full\`}
      />

      <span
        className={\`absolute right-0 top-0 h-0 w-[2px] bg-orange-500 transition-all delay-100 duration-100 group-hover:h-full\`}
      />

      <span
        className={\`absolute bottom-0 right-0 h-[2px] w-0 bg-orange-500 transition-all delay-200 duration-100 group-hover:w-full\`}
      />

      <span
        className={\`absolute bottom-0 left-0 h-0 w-[2px] bg-orange-500 transition-all delay-300 duration-100 group-hover:h-full\`}
      />
    </button>
  );
};

export default BorderButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Circular Button": {
    react: `import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const CircularButton = ({ text }) => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.button
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={{
          initial: { borderWidth: "0px" },
          hover: { borderWidth: "4px" },
          tap: { scale: 0.98 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="z-10 bg-white rounded-full border-gray-300 relative"
      >
        <motion.p
          variants={{
            initial: { color: "black" },
            hover: { color: "white" },
          }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="w-full h-16 flex items-center pl-6 pr-20 z-50 relative"
        >
          {text}
        </motion.p>

        <motion.div
          variants={{
            initial: { width: "64px", height: "98.5%" },
            hover: { width: "99%", height: "98.5%" },
          }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
          className="absolute right-[1px] top-1/2 -translate-y-1/2 bg-black text-white rounded-full flex items-center z-20"
        >
          <FaArrowRight
            size={12}
            className="absolute top-1/2 right-[24px] -translate-y-1/2"
          />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default CircularButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Overlap Button": {
    react: `import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const OverlapButton = () => {
  const divVariants = {
    initial: {
      scale: 0,
      y: "100%",
      originY: 1,
    },
    hover: {
      scale: 2.5,
      y: 0,
      originY: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <motion.button
        className="hover:text-zinc-800 relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-5 py-3 text-zinc-50"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{scale: 1}}
      >
        <motion.div
          className="absolute inset-0 z-10 rounded-[100%] bg-zinc-100"
          variants={divVariants}
        />
        <p className="relative z-20">Hello World</p>
        <span className="relative z-20">
          <TbArrowRight />
        </span>
      </motion.button>
    </main>
  );
};

export default OverlapButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Text Button": {
    react: `import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const TextButton = () => {
  const text = "Hello World !";
  const controls = useAnimation();

  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.button
        className="flex flex-col gap-0 px-4 py-3 rounded bg-white text-black font-medium cursor-pointer"
        initial={{
          paddingLeft: "1.2rem",
          paddingRight: "1.2rem",
          paddingTop: "0.600rem",
          paddingBottom: "0.600rem",
        }}
        whileHover={{
          paddingLeft: "0.850rem",
          paddingRight: "0.850rem",
          paddingTop: "0.425rem",
          paddingBottom: "0.425rem",
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => controls.start("hover")}
        onMouseLeave={() => controls.start("initial")}
      >
        <div className="h-[22px] flex flex-col overflow-hidden">
          {/* Top row */}
          <motion.div className="flex">
            {Array.from(text).map((letter, index) => (
              <Alphabet
                key={\`top-\${index}\`}
                letter={letter}
                delay={index * 0.01 + 0.15}
                controls={controls}
                isSpace={letter === " "}
              />
            ))}
          </motion.div>
          {/* Bottom row */}
          <motion.div className="flex">
            {Array.from(text).map((letter, index) => (
              <Alphabet
                key={\`bottom-\${index}\`}
                letter={letter}
                delay={index * 0.01 + 0.15}
                controls={controls}
                isSpace={letter === " "}
              />
            ))}
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

const Alphabet = ({ letter, delay, controls, isSpace }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  const variants = {
    initial: { y: 0 },
    hover: { y: -height },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      animate={controls}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className={\`inline-block \${isSpace ? "mr-1" : "mr-[0px]"}\`}
    >
      {letter}
    </motion.span>
  );
};

export default TextButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Capsule Button": {
    react: `import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const CapsuleButton = () => {
  const parent = {
    initial: {
      backgroundColor: "white",
      gap: "0px",
      color: "black",
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    },
    hover: {
      gap: "4px",
      backgroundColor: "black",
      color: "white",
      boxShadow: "0px 4px 8px 0px rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const child = {
    initial: {
      rotate: "-45deg",
    },
    hover: {
      rotate: "0deg",
      transition: {
        delay: 0.15,
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.button
        variants={parent}
        initial="initial"
        whileHover="hover"
        className="px-6 py-3 flex text-nowrap justify-center items-center rounded-full transition-colors"
      >
        Hello World
        <motion.span variants={child}>
          <TbArrowRight size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default CapsuleButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Shiny Button": {
    react: `import React from 'react';
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
                        backgroundImage: \`linear-gradient(-75deg, rgba(255, 255, 255, 0.1) calc(var(--x) + 20%), rgba(255, 255, 255, 0.5) calc(var(--x) + 25%), rgba(255, 255, 255, 0.1) calc(var(--x) + 100%))\`,
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

export default ShinyButton;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Tilt Card": {
    react: `import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

import batman from '../../assets/image.png'

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate\`rotateX(\${xSpring}deg) rotateY(\${ySpring}deg)\`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                    backgroundImage: \`url(\${batman})\`,
                    backgroundColor: '#fff808',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="relative h-64 w-48 sm:h-80 sm:w-64 lg:h-96 lg:w-72 rounded-xl"
            >
                <div
                    style={{
                        transform: "translateZ(200px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-3 sm:inset-4 lg:inset-5 grid place-content-center backdrop-blur-sm bg-opacity-30 rounded-xl bg-white shadow-2xl"
                >
                    <p
                        style={{
                            transform: "translateZ(100px)",
                        }}
                        className="text-center text-lg sm:text-xl lg:text-2xl font-bold px-2"
                    >
                        I AM BATMAN
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default TiltCard;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Inverted Card": {
    react: `import React from "react";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import image from "../../assets/camera.jpg";

const InvertedCard = () => {
  return (
    <section className="min-h-[100vh] py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8">
      <motion.div className="h-full w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] bg-gray-800 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-3 sm:p-4 md:p-6 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="rounded-xl sm:rounded-2xl overflow-hidden h-full relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[650px]">
          <div className="absolute left-1 top-[4%] rounded-full bg-gray-800 z-50">
            <p className="bg-lime-500 text-gray-800 text-xs sm:text-sm md:text-base lg:text-xl font-semibold px-2 sm:px-3 md:px-4 lg:px-6 py-1 rounded-full">
              2023
            </p>
          </div>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 602 802"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            <defs>
              <clipPath id="customClip">
                <path d="M548.864 1H178.556C162.506 1 149.495 14.0112 149.495 30.0612C149.495 42.5665 141.495 53.6696 129.633 57.6281L123.295 59.743C119.383 61.0486 115.285 61.7143 111.161 61.7143H50.2956C40.4036 61.7143 30.7404 64.6903 22.5623 70.2555C9.07325 79.4347 1 94.6938 1 111.01V745.932C1 761.651 7.71737 776.62 19.46 787.07C29.5431 796.043 42.5705 801 56.068 801H554.407C568.629 801 582.072 794.505 590.91 783.363C597.444 775.126 601 764.987 601 754.473V402.786V53.0167C601 37.0122 593.649 22.0139 581.061 12.1301C571.878 4.91936 560.54 1 548.864 1Z" />
              </clipPath>
            </defs>
            <motion.image
              href={image}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#customClip)"
            />
          </svg>
          <div className="flex flex-row justify-between items-center w-full absolute bottom-[5%] px-3 sm:px-4 md:px-6">
            <div className="flex flex-row gap-1 sm:gap-2 md:gap-3">
              <p className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white h-fit bg-neutral-500/20 backdrop-blur-sm rounded-full">
                Technology
              </p>
              <p className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white h-fit bg-neutral-500/20 backdrop-blur-sm rounded-full">
                Electronics
              </p>
            </div>
            <button className="duration-300 ease-in-out rounded-full p-1 sm:p-2 text-white bg-gray-800 hover:bg-lime-500">
              <TbArrowUpRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
        <div className="max-w-full mt-3 sm:mt-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight">
            The Camera That Captures Your Moments
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default InvertedCard;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Shutter Card": {
    react: `import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedCard = ({
  heading,
  description,
  topText,
  bottomText,
  imageSrc,
}) => {
  const controls = useAnimation();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="group relative w-64 h-80 sm:w-72 sm:h-88 lg:w-80 lg:h-96 overflow-hidden rounded-xl sm:rounded-2xl shadow-md shadow-zinc-500/10 hover:shadow-zinc-500/30 transition-all duration-300"
        onMouseEnter={() => {
          controls.start({ height: 0 });
        }}
        onMouseLeave={() => {
          controls.start({ height: "50%" });
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500 to-blue-400 p-3 sm:p-4 z-0 flex flex-col justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">{heading}</h2>
          <p className="text-white text-xs sm:text-sm leading-relaxed">{description}</p>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full bg-white z-10 overflow-hidden"
          animate={controls}
          initial={{ height: "50%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-start p-3 sm:p-4 h-full">
            <p className="text-black text-xs sm:text-sm">{topText}</p>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Top Right"
                className="w-16 h-20 sm:w-20 sm:h-24 border object-cover rounded"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-full bg-white z-10 overflow-hidden"
          animate={controls}
          initial={{ height: "50%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-end p-3 sm:p-4 h-full">
            <p className="text-black text-xs sm:text-sm">{bottomText}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AnimatedCard;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Parallax Card": {
    react: `import React, { useRef } from "react";
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
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] w-[280px] sm:w-[320px] lg:w-[350px] bg-white shadow-xl rounded-lg overflow-hidden">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[250px] sm:h-[300px] lg:h-[350px] w-full cursor-pointer bg-black"
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
              className="object-cover h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] pointer-events-none drop-shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            style={{ x: textTranslateX, y: textTranslateY }}
            className="absolute inset-0 w-full h-[80px] sm:h-[100px] lg:h-[120px] items-center justify-end z-10 flex flex-col"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 drop-shadow-md">
              COLMI R02
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl">
              SMART RING
            </p>
          </motion.div>
        </div>
        <div className="p-3 sm:p-4 rounded-2xl">
          <h2 className="text-gray-800 font-extrabold text-lg sm:text-xl leading-tight">
            COLMI RO2 SMART RING
          </h2>
          <div className="flex flex-row gap-1 sm:gap-2 pt-1 pb-2 sm:pb-3">
            <span className="border border-gray-500 text-gray-600 rounded-md px-1.5 sm:px-2 text-xs sm:text-sm">
              {" "}
              Fashion{" "}
            </span>
            <span className="border border-gray-500 text-gray-600 rounded-md px-1.5 sm:px-2 text-xs sm:text-sm">
              {" "}
              Health{" "}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The COLMI R02 Smart Ring is a sleek and stylish wearable device
            designed to monitor your health and fitness.
          </p>
          <div className="flex flex-row justify-between items-end pt-3 sm:pt-4">
            <div className="flex flex-col gap-0">
              <p className="text-gray-800 text-xs sm:text-sm leading-5 tracking-wide">
                Price
              </p>
              <p className="text-gray-800 font-extrabold text-lg sm:text-xl leading-3">
                $100
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-yellow-300 to-yellow-500 hover:bg-yellow-400 text-white font-bold py-1 px-4 sm:px-6 lg:px-8 rounded focus:outline-none focus:shadow-outline text-xs sm:text-sm"
            >
              Add to cart
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Color Cards": {
    react: `import React, { useState } from 'react'
import watch from '../../assets/watch.jpg'
import earphones from '../../assets/earphones.jpg'
import mouse from '../../assets/mouse.jpg'

const ColorCards = () => {
    const [isActive, setIsActive] = useState(0)

    return (
        <section className='min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6'>
            <div className='w-full bg-neutral-100 rounded p-2 sm:p-4 flex flex-col lg:flex-row overflow-hidden'>
                <div
                    onClick={() => setIsActive(0)}
                    className={\`\${isActive == 0 ? 'lg:w-4/6 w-full lg:h-auto min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'lg:w-3/6 w-full lg:h-auto h-[35vh] sm:h-[40vh] bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer flex flex-col\`}
                >
                    <div className='lg:h-3/5 h-auto p-3 sm:p-4'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl px-2 py-2 sm:py-3 lg:py-6 font-serif w-full lg:w-8/12 leading-tight'>This Is Some Heading</h1>
                        <p className='text-sm sm:text-base lg:text-lg px-2 py-0 font-serif w-full lg:w-11/12 text-pretty leading-relaxed'>This is some text or maybe some description. Gotta keep writing; in real world cases, descriptions are pretty long</p>
                        <button className='mx-2 my-2 sm:my-3 border-2 text-xs sm:text-sm lg:text-base font-thin font-mono py-1.5 sm:py-2 w-[120px] sm:w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                    <div className='flex flex-col h-auto lg:h-1/2 justify-end items-center lg:items-end'>
                        <img src={watch} alt="" className='h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[200px] mt-2 sm:mt-4 lg:mt-0' />
                    </div>
                </div>
                <div
                    onClick={() => setIsActive(1)}
                    className={\`\${isActive == 1 ? 'lg:w-4/6 w-full lg:h-auto min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'lg:w-3/6 w-full lg:h-auto h-[35vh] sm:h-[40vh] bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer flex flex-col\`}
                >
                    <div className='flex flex-col h-auto lg:h-1/2 justify-start items-center lg:items-end p-3 sm:p-4'>
                        <img src={earphones} alt="" className='h-[80px] sm:h-[100px] lg:h-[120px] xl:h-[200px] mt-0 lg:mt-0' />
                    </div>
                    <div className='lg:h-3/5 h-auto p-3 sm:p-4'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl px-2 py-2 sm:py-3 lg:py-6 font-serif w-full leading-tight'>This Is Another Heading</h1>
                        <button className='mx-2 my-2 sm:my-3 border-2 text-xs sm:text-sm lg:text-base font-thin font-mono py-1.5 sm:py-2 w-[120px] sm:w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                </div>
                <div
                    onClick={() => setIsActive(2)}
                    className={\`\${isActive == 2 ? 'lg:w-4/6 w-full lg:h-auto min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'lg:w-3/6 w-full lg:h-auto h-[35vh] sm:h-[40vh] bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer flex flex-col\`}
                >
                    <div className='lg:h-3/5 h-auto p-3 sm:p-4'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl px-2 py-2 sm:py-3 lg:py-6 font-serif w-full leading-tight'>This Is Some Heading</h1>
                        <p className='text-sm sm:text-base lg:text-lg px-2 py-0 font-serif w-full lg:w-11/12 text-pretty leading-relaxed'>This is some text or maybe some description. Gotta keep writing; in real world cases, descriptions are pretty long</p>
                        <button className='mx-2 my-2 sm:my-3 border-2 text-xs sm:text-sm lg:text-base font-thin font-mono py-1.5 sm:py-2 w-[120px] sm:w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                    <div className='flex flex-col h-auto lg:h-1/2 justify-end items-center p-3 sm:p-4'>
                        <img src={mouse} alt="" className='h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[200px] mt-2 sm:mt-4 lg:mt-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ColorCards`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Inverted Text": {
    react: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InvertedText = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divSize = 208;  // Size of the motion.div (52px * 4 = 208px)

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const newX = Math.min(Math.max(clientX - divSize / 2, 0), window.innerWidth - divSize);
            const newY = Math.min(Math.max(clientY - divSize / 2, 0), window.innerHeight - divSize);

            setPosition({ x: newX, y: newY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const divStyle = {
        borderRadius: '9999px',
        top: \`\${position.y}px\`,
        left: \`\${position.x}px\`,
        position: 'absolute'
    };

    return (
        <section className='min-h-[100vh] py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8 cursor-none min-w-full flex items-center justify-center relative overflow-hidden'>
            <motion.div
                style={divStyle}
                className='h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52 bg-white absolute'
            />
            <div className='relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-white max-h-[100vh] max-w-[100vw] px-4'>
                <p className='relative z-10 mix-blend-exclusion font-mono font-thin leading-tight text-center'>
                    Some Text Goes Here
                </p>
            </div>
        </section>
    );
}

export default InvertedText;`,
    nextjs: `// Next.js code will be available soon`
  },

  "Word Animation": {
    react: `import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Word = () => {
    const paragraph = 'Alot of the male problems can be solved by getting in shape and making alot of money. You still have problems. They are just smaller & you have more resources to handle them. The world is there for the taking for anyone who learns from their mistakes, Do what they say they were going to do & stick with it. What used to make a man acceptable is now considered extraordinary. The bar for winning has never been so low';
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end center"]
    });

    const words = paragraph.split(' ');

    return (
        <section ref={ref} className='relative min-h-[200vh] py-[30px] sm:py-[45px] lg:py-[60px]'>
            <motion.div className='sticky top-4 sm:top-6 lg:top-10 flex justify-center'>
                <p className='text-white flex flex-wrap mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase leading-relaxed'>
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + (1 / words.length);
                        return <Wo key={index} range={[start, end]} progress={scrollYProgress}>{word}</Wo>;
                    })}
                </p>
            </motion.div>
        </section >
    );
};

export default Word;

const Wo = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <motion.span style={{ opacity }} className='mr-2 sm:mr-3 lg:mr-4 leading-tight'>
            {children}
        </motion.span>
    );
};`,
    nextjs: `// Next.js code will be available soon`
  },

  "Skew Text": {
    react: `import React, { useRef } from 'react'
import { motion, useSpring, useScroll, useTransform, useVelocity } from 'framer-motion'

const SkewText = () => {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const scrollVelocity = useVelocity(scrollYProgress)

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.9, 0.9],
        ['30deg', '-30deg']
    )
    const skewX = useSpring(skewXRaw, { stiffness: 200, mass: 2, damping: 15 })

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2400]);
    const x = useSpring(xRaw,)

    return (
        <section ref={targetRef} className='w-full min-h-[400vh] py-[30px] sm:py-[45px] lg:py-[60px] relative bg-neutral-50'>
            <div className='sticky top-0 flex h-[100vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8'>
                <motion.p
                    style={{
                        skewX,
                        x,
                    }}
                    className="origin-bottom-left whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 uppercase leading-[0.85] md:leading-[0.85]">
                    This text leans left when going up, and leans right when going down. How cool is that :D
                </motion.p>
            </div >
        </section >
    )
}

export default SkewText`,
    nextjs: `// Next.js code will be available soon`
  },

  "Text Animation": {
    react: `import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const TextAnimation = ({ text }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  return (
    <section
      ref={containerRef}
      className="flex justify-center items-center min-h-screen text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold uppercase px-4 sm:px-6 lg:px-8"
    >
      {Array.from(text).map((letter, index) => (
        <span key={index} className="overflow-hidden px-0.5 sm:px-1 md:px-0.5">
          <Alphabet
            key={\`top-\${index}\`}
            letter={letter}
            delay={index * 0.03 + 0.15}
            isInView={isInView}
            isSpace={letter === " "}
          />
        </span>
      ))}
    </section>
  );
};

const Alphabet = ({ letter, delay, isSpace, isInView }) => {
  const ref = useRef(null);

  const variants = {
    animate: { x: 0 },
    hidden: { x: 60 },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      animate={isInView ? "animate" : "hidden"}
      transition={{ duration: 0.5, delay, ease: [0.4, 0.5, 0, 1.5] }}
      className={\`inline-block \${isSpace ? "mr-1 sm:mr-2" : "mr-[0px]"}\`}
    >
      {letter}
    </motion.span>
  );
};

export default TextAnimation;`,
    nextjs: `// Next.js code will be available soon`
  },

  "Text Mask": {
    react: `import React, { useRef } from "react";
import camera from "../../assets/camera.jpg";
import island from "../../assets/island.jpg";
import earphones from "../../assets/earphones.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const TextMask = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1 = useTransform(scrollYProgress, [0, 0.8], ["300px", "0%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["600px", "0%"]);
  const img3 = useTransform(scrollYProgress, [0, 0.9], ["200px", "0%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex bg-black justify-center items-start h-[300dvh] py-[30px] sm:py-[45px] lg:py-[60px] w-full text-black"
    >
      <div className="sticky top-0 text-white text-[8vw] sm:text-[10vw] lg:text-[12vw] font-bold flex flex-col items-center justify-center h-screen w-full px-4 sm:px-6 lg:px-8">
        <h1 className="relative z-10 font-mono leading-none tracking-tighter mix-blend-exclusion text-center">
          Let's build a
        </h1>

        <motion.img
          style={{ y: img1 }}
          src={camera}
          className="absolute top-2 sm:top-4 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 object-cover rounded-lg"
        />
        <motion.img
          style={{ y: img2 }}
          src={island}
          className="absolute top-16 sm:top-24 left-1/4 sm:left-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 object-cover rounded-lg"
        />
        <motion.img
          style={{ y: img3 }}
          src={earphones}
          className="absolute top-8 sm:top-12 left-2/3 sm:left-2/3 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default TextMask;`,
    nextjs: `// Next.js code will be available soon`
  },
};

// Default code for components not in the database
export const getDefaultCode = (componentName) => ({
  react: `// React component code for ${componentName}
// This is a fallback placeholder. I probably forgot to add the code for this component.

import React from 'react';

const ${componentName.replace(/\s+/g, "")} = () => {
  return (
    <div className="p-8 bg-neutral-800 rounded-lg">
      <h3 className="text-white text-xl mb-4">${componentName}</h3>
      <p className="text-neutral-300">
        Component implementation goes here...
      </p>
    </div>
  );
};

export default ${componentName.replace(/\s+/g, "")};`,
  nextjs: `// Next.js code will be available soon`,
});
