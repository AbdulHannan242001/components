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
                        \$99 / Month
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
                \$100
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
    nextjs: `// Next.js code will be available soon`,
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
    nextjs: `// Next.js code will be available soon`,
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
    nextjs: `// Next.js code will be available soon`,
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
    nextjs: `// Next.js code will be available soon`,
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
    nextjs: `// Next.js code will be available soon`,
  },

  "Sliding Nav": {
    react: `import React, { useState } from "react";
import { motion } from "framer-motion";
import HamburgerButton from "../Button/HamburgerButton";
import logo from "../../assets/Logo.svg";

const SlidingNav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const navVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    hide: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  const linkVariants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hide: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden h-[100vh]">
      <motion.div
        variants={navVariants}
        initial="hide"
        animate={active ? "show" : "hide"}
        className={\`h-[100vh] w-full absolute bg-neutral-950 top-0 left-0 z-[50] flex flex-col items-start justify-center  
                            \${
                              active
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                            }\`}
      >
        {["Home", "Services", "Portfolio", "FAQs", "Contact"].map((item) => (
          <motion.h1
            key={item}
            variants={linkVariants}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[1600px] w-full mx-auto cursor-pointer"
          >
            <motion.button
              className="px-3 sm:px-4 py-2 md:p-4"
              whileHover={{ scale: 1.1, rotateZ: -10}}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.button>
          </motion.h1>
        ))}
      </motion.div>

      {/* Navbar */}
      <div className="w-full sticky top-0 z-[100] backdrop-blur-[8px] pt-2 sm:pt-3 lg:pt-4 pb-1">
        <div className="max-w-[1600px] flex flex-row justify-between mx-auto items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center gap-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]"
            />
          </div>
          {/* Hamburger Button */}
          <div onClick={handleClick} className="">
            <HamburgerButton active={active} />
          </div>
        </div>
      </div>
      <div className="h-full w-full items-center justify-center flex">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-300 px-4 text-center">Scroll To Discover</p>
      </div>
    </div>
  );
};

export default SlidingNav;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Slide Tabs": {
    react: `import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Picture1 from "../../assets/Picture1.jpg";
import Picture2 from "../../assets/Picture2.jpg";
import Picture3 from "../../assets/Picture3.jpg";
import Picture4 from "../../assets/Picture4.jpg";
import Picture5 from "../../assets/Picture5.jpg";

export const SlideTabsExample = () => {
  return <SlideTabs />;
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0, // Start hidden for initial animation
  });
  const [activeTab, setActiveTab] = useState(0);

  const tabContents = [
    {
      title: "Roof Installation",
      content: (
        <div className="mt-4 sm:mt-8 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="w-full lg:w-6/12 flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-[20px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold leading-tight">Roof Installation</h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed">
              Our roof installation Pictures deliver unmatched durability and
              style. Using premium materials like asphalt, metal, or tile, we
              build roofs that protect your home for decades.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-xl text-secondary font-medium">Includes:</p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Asphalt Shingle Roofing</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Metal Roof Installation</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Tile and Slate Options</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Weatherproof Underlayment</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 sm:px-6 lg:px-[20px]">
            <div className="max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] overflow-hidden rounded-lg">
              <img
                src={Picture2}
                alt="Roof Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Roof Cornering",
      content: (
        <div className="mt-4 sm:mt-8 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="w-full lg:w-6/12 flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-[20px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold leading-tight">Roof Cornering</h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed">
              Precision roof cornering enhances your home's aesthetic and
              structural integrity. We specialize in seamless corner designs
              that prevent leaks and boost curb appeal.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-xl text-secondary font-medium">Includes:</p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Residential Roofing</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Damage Repair</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Commercial Roofing</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Window Installation</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 sm:px-6 lg:px-[20px]">
            <div className="max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] overflow-hidden rounded-lg">
              <img
                src={Picture5}
                alt="Roof Cornering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Roof Frame Design",
      content: (
        <div className="mt-4 sm:mt-8 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="w-full lg:w-6/12 flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-[20px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold leading-tight">Roof Frame Design</h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed">
              Our custom roof frame designs blend strength with architectural
              vision. We engineer frameworks that ensure stability and elevate
              your home's unique style.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-xl text-secondary font-medium">Includes:</p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Truss Design</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Rafter Systems</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Load-Bearing Analysis</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Aesthetic Customization</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 sm:px-6 lg:px-[20px]">
            <div className="max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] overflow-hidden rounded-lg">
              <img
                src={Picture1}
                alt="Roof Frame Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Roof Layer Fixing",
      content: (
        <div className="mt-4 sm:mt-8 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="w-full lg:w-6/12 flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-[20px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold leading-tight">Roof Layer Fixing</h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed">
              We restore your roof's integrity with expert layer fixing. Our
              team repairs and reinforces layers to ensure weather resistance
              and extended lifespan.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-xl text-secondary font-medium">Includes:</p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Underlayment Repair</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Flashing Replacement</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Shingle Realignment</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Leak Sealing</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 sm:px-6 lg:px-[20px]">
            <div className="max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] overflow-hidden rounded-lg">
              <img
                src={Picture3}
                alt="Roof Layer Fixing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Roof Sliding Corner",
      content: (
        <div className="mt-4 sm:mt-8 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="w-full lg:w-6/12 flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-[20px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold leading-tight">
              Roof Sliding Corner
            </h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed">
              Innovative sliding corner solutions adapt to your roof's needs. We
              install adjustable systems that maintain durability through
              seasonal shifts and extreme weather.
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-xl text-secondary font-medium">Includes:</p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Adjustable Corner Tracks</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Thermal Expansion Support</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Weatherproof Seals</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary text-sm sm:text-base flex-shrink-0" />
                  <h2 className="text-xs sm:text-sm lg:text-base">Custom Corner Designs</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 sm:px-6 lg:px-[20px]">
            <div className="max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] overflow-hidden rounded-lg">
              <img
                src={Picture4}
                alt="Roof Sliding Corner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-4 sm:py-6 lg:py-8 px-2 sm:px-4">
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-full w-full sm:w-fit mx-auto px-2 sm:px-4 py-1 sm:py-2">
        <ul className="relative flex flex-col sm:flex-row">
          {tabContents.map((tab, index) => (
            <Tab
              key={tab.title}
              setPosition={setPosition}
              setActiveTab={setActiveTab}
              index={index}
            >
              {tab.title}
            </Tab>
          ))}
          <Cursor position={position} />
        </ul>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="w-full"
        >
          {tabContents[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, setPosition, setActiveTab, index }) => {
  const ref = useRef(null);

  const handleClick = () => {
    if (!ref?.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
    setActiveTab(index);
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={handleClick}
      className={
        "relative z-10 block cursor-pointer uppercase px-3 sm:px-4 lg:px-5 py-2 sm:py-1.5 text-xs sm:text-sm lg:text-base font-light rounded-full mix-blend-exclusion text-center sm:text-left"
      }
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ ...position, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute z-0 bg-gradient-to-bl from-neutral-800 to-neutral-950 h-full rounded-full hidden sm:block"
    />
  );
};

export default SlideTabsExample;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "3D Carousel": {
    react: `
    import React from 'react';
import { motion } from 'framer-motion';
import { Blurhash } from 'react-blurhash';

const Carousel3d = ({ images = [], radius = 500, duration = 20, width = 200, height = 250 }) => {
    const totalCards = images.length;

    // Responsive sizing based on screen size
    const responsiveRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? radius * 0.6 : radius;
    const responsiveWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? width * 0.8 : width;
    const responsiveHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? height * 0.8 : height;

    // Placeholder function to generate a Blurhash. 
    // Ideally, you'd have a precomputed Blurhash string for each image.
    const generateBlurHash = (imageSrc) => {
        // You would typically compute this on the server-side or use a tool to generate blurhashes for each image.
        return "LEHV6nWB2yk8pyo0adR*.7kCMdnj"; // Sample Blurhash; replace with actual hashes.
    };

    return (
        <section className='w-[100%] py-[30px] sm:py-[45px] lg:py-[60px] min-h-screen text-center overflow-hidden relative flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            <motion.div
                className="relative"
                style={{
                    width: \`\${responsiveWidth}px\`,
                    height: \`\${responsiveHeight}px\`,
                    transformStyle: 'preserve-3d',
                    transform: \`perspective(1000px) rotateX(-15deg)\`,
                }}
                initial={{ rotateY: 0, rotateX: -5 }}
                animate={{ rotateY: 360, rotateX: -5 }}
                transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
            >
                {images.map((img, index) => {
                    const angle = (360 / totalCards) * index;
                    const blurHash = generateBlurHash(img); // Using precomputed Blurhashes here.

                    return (
                        <motion.div
                            key={index}
                            className='absolute'
                            style={{
                                width: \`\${responsiveWidth}px\`,
                                height: \`\${responsiveHeight}px\`,
                                transform: \`rotateY(\${angle}deg) translateZ(\${responsiveRadius}px)\`,
                            }}
                        >
                            {/* Blurhash placeholder */}
                            <Blurhash
                                hash={blurHash}
                                width={responsiveWidth}
                                height={responsiveHeight}
                                resolutionX={32}
                                resolutionY={32}
                                punch={1}
                                className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg overflow-hidden'
                            />
                            {/* Actual image */}
                            <img
                                src={img}
                                alt={\`Slide \${index + 1}\`}
                                className='w-full h-full object-cover object-center rounded-lg shadow-lg absolute top-0 left-0'
                                style={{ display: 'none' }} // Hide image initially
                                onLoad={(e) => e.target.style.display = 'block'} // Show image after it loads
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Carousel3d;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Swiper Slider": {
    react: `import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import picture2 from '../../assets/Picture2.jpg'
import picture6 from '../../assets/Picture6.jpg'
import mountain from '../../assets/mountain.jpg'
import camera from '../../assets/camera.jpg'
import earphones from '../../assets/earphones.jpg'


const SwiperSlider = () => {
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const imageArray = [
        {
            img: picture2,
        },
        {
            img: picture6,
        },
        {
            img: mountain,
        },
        {
            img: camera,
        },
        {
            img: earphones,
        },
    ]

    return (
        <main className='min-h-[100vh] py-[60px] flex flex-col justify-center'>
            <section className='px-8'>
                <div className='flex flex-row items-center justify-between mb-6'>
                    <h2 className='text-5xl font-semibold font-mono'>Title Goes Here</h2>
                    <div className='flex flex-row gap-x-6'>
                        <span onClick={handlePrev} className='font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer'>
                            <MdArrowBack />
                        </span>
                        <span onClick={handleNext} className='font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer'>
                            <MdArrowForward />
                        </span>
                    </div>
                </div>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        ref={swiperRef}
                    >
                        {(imageArray.length > 0) && imageArray.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full h-full relative cursor-grab'>
                                    <img src={data.img} alt={index} className='w-[350px] h-[450px] object-cover' />
                                    <div className='flex flex-col justify-end  absolute top-0 left-0 w-[350px] h-[450px] bg-gradient-to-t from-black/70 from-[20%] to-[60%] to-transparent'>
                                        <div className='px-2 py-4 space-y-2'>
                                            <h2 className='text-3xl font-semibold max-w-[260px]'>Some Heading Goes Here</h2>
                                            <p className='pr-10'>A not so very long description goes here. It can be a bit long but not too long</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}

export default SwiperSlider;

`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Two Axis Slider": {
    react: `import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion, AnimatePresence } from 'framer-motion';

import picture2 from '../../assets/Picture2.jpg';
import picture6 from '../../assets/Picture6.jpg';
import mountain from '../../assets/mountain.jpg';
import camera from '../../assets/camera.jpg';
import earphones from '../../assets/earphones.jpg';

const TwoAxisSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const handleMouseEnter = () => swiperRef.current?.swiper?.autoplay.stop();
    const handleMouseLeave = () => swiperRef.current?.swiper?.autoplay.start();

    // Text animation variants
    const parentVariants = {
        hidden: { opacity: 0, y: 40 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3, // Delay for child animations
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: {
                staggerChildren: 0.3,
                duration: 0.3,
                ease: 'easeIn',
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
    };

    const imageArray = [
        {
            shortTitle: 'Short Title 1',
            img: picture2,
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: picture6,
            shortTitle: 'Short Title 2',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: mountain,
            shortTitle: 'Short Title 3',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: camera,
            shortTitle: 'Short Title 4',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: earphones,
            shortTitle: 'Short Title 5',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
    ];

    return (
        <section className='min-h-[100vh] py-[60px] flex flex-col md:flex-row items-center justify-center bg-neutral-900 gap-4'>
            {/* Text Section */}
            <main className='md:w-4/12 flex flex-col justify-center h-full px-8'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide} // Key ensures component re-renders on slide change
                        variants={parentVariants}
                        initial='hidden'
                        animate='animate'
                        exit='exit'
                    >
                        <motion.h3
                            variants={childVariants}
                            className='text-2xl font-black text-sky-600 leading-none pb-1'
                        >
                            {imageArray[currentSlide].shortTitle}
                        </motion.h3>
                        <motion.h1
                            variants={childVariants}
                            className='text-4xl font-semibold text-neutral-50 pb-3'
                        >
                            {imageArray[currentSlide].heading}
                        </motion.h1>
                        <motion.p
                            variants={childVariants}
                            className='text-lg text-gray-300'
                        >
                            {imageArray[currentSlide].description}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Swiper Section */}
            <main className='w-full md:w-8/12 h-full flex flex-col justify-center'>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            1200: { slidesPerView: 2 },
                            1300: { slidesPerView: 2 },
                        }}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                        ref={swiperRef}
                    >
                        {imageArray.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={\`\${
                                      index === currentSlide
                                        ? "w-full md:w-[400px] h-auto md:h-[530px]"
                                        : "mt-[25px]"
                                    } w-full h-auto md:w-[380px] md:h-[480px] object-cover rounded-md\`}
                                >
                                    <img
                                        src={data.img}
                                        alt={data.shortTitle}
                                        className='w-full h-full cursor-grab hover:scale-105 transition-all ease-in rounded-md'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </section>
    );
};

export default TwoAxisSlider;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Reveal Gallery": {
    react: `import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import picture2 from "../../assets/Picture2.jpg";
import picture6 from "../../assets/Picture6.jpg";
import earphones from "../../assets/earphones.jpg";

const RevealGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const card1 = {
    x: useTransform(scrollYProgress, [0, 0.9], ["0%", "90%"]),
    rotate: useTransform(scrollYProgress, [0, 0.7], ["0deg", "8deg"]),
  };

  const card2 = {
    x: useTransform(scrollYProgress, [0, 0.9], ["0%", "0%"]),
    rotate: useTransform(scrollYProgress, [0, 0.7], ["0deg", "0deg"]),
    scale: useTransform(scrollYProgress, [0, 0.9], [1, 1.2]),
  };

  const card3 = {
    x: useTransform(scrollYProgress, [0, 0.9], ["0%", "-90%"]),
    rotate: useTransform(scrollYProgress, [0, 0.7], ["0deg", "-8deg"]),
  };

  return (
    <section
      ref={containerRef}
      className="h-[200dvh] flex items-start justify-center relative overflow-x-clip"
    >
      <main className="h-screen sticky top-0 w-full">
        <div className="flex items-center justify-center relative w-full h-full">
          <motion.div
            style={{ x: card1.x, rotate: card1.rotate }}
            className="absolute bg-zinc-800 flex items-center justify-center h-[150px] w-4/12 md:h-[450px] md:w-[300px] rounded-xl border-2 border-white/20 overflow-hidden z-10"
          >
            <img src={picture2} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ x: card2.x, rotate: card2.rotate, scale: card2.scale }}
            className="absolute bg-zinc-800 flex items-center justify-center h-[150px] w-4/12 md:h-[450px] md:w-[300px] rounded-xl border-2 border-white/20 overflow-hidden z-20"
          >
            <img
              src={earphones}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ x: card3.x, rotate: card3.rotate }}
            className="absolute bg-zinc-800 flex items-center justify-center h-[150px] w-4/12 md:h-[450px] md:w-[300px] rounded-xl border-2 border-white/20 overflow-hidden z-10"
          >
            <img src={picture6} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default RevealGallery;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Sticky Gallery": {
    react: `import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import picture1 from "../../assets/Picture1.jpg";
import picture4 from "../../assets/Picture4.jpg";
import picture7 from "../../assets/Picture7.jpg";

const StickyGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const card1 = {
    scale: useTransform(scrollYProgress, [0, 0.33], ["100%", "95%"]),
  };

  const card2 = {
    scale: useTransform(scrollYProgress, [0, 0.75], ["100%", "95%"]),
  };

  const card3 = {
    scale: useTransform(scrollYProgress, [0, 1], ["100%", "100%"]),
  };

  return (
    <section
      ref={containerRef}
      className="h-[150dvh] md:h-[300dvh] flex flex-col items-center gap-[20dvh] justify-center relative p-2 md:px-8"
    >
      <motion.div
        style={{ scale: card1.scale }}
        className="sticky top-10 bg-zinc-800 flex items-center justify-center h-[80dvh] max-w-[1400px] w-full rounded-xl border-2 border-white/20 overflow-hidden z-[5]"
      >
        <img src={picture1} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div
        style={{ scale: card2.scale }}
        className="sticky top-10 bg-zinc-800 flex items-center justify-center h-[80dvh] max-w-[1400px] w-full rounded-xl border-2 border-white/20 overflow-hidden z-[6]"
      >
        <img src={picture7} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div
        style={{ scale: card3.scale }}
        className="sticky top-10 bg-zinc-800 flex items-center justify-center h-[80dvh] max-w-[1400px] w-full rounded-xl border-2 border-white/20 overflow-hidden z-[7]"
      >
        <img src={picture4} alt="" className="h-full w-full object-cover" />
      </motion.div>
    </section>
  );
};

export default StickyGallery;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Ball Switch Slider": {
    react: `import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BallSwitchSlider = () => {
    const [showHeaders, setShowHeaders] = useState(false);
    return (
        <section className='flex justify-center items-center min-h-screen'>
            <div
                onClick={() => setShowHeaders(!showHeaders)}
                className=" h-[65px] px-1 w-[140px] rounded-full bg-neutral-100 flex items-center shadow-[inset_1.5px_1.5px_5px_rgba(64,64,64,0.9)] cursor-pointer overflow-hidden"
            >
                <motion.div
                    className={\`h-[55px] w-[55px] flex items-center justify-center rounded-full transition-colors duration-300 shadow-xl shadow-[#000000]\`}
                    animate={{
                        x: showHeaders ? '140%' : 0,
                        backgroundImage: 'linear-gradient(to right, rgb(40, 103, 236), rgb(65, 155, 240), rgb(40, 103, 236))',
                        backgroundPosition: showHeaders ? '0% 50%' : '100% 50%',
                        backgroundSize: '300% 300%',
                        transition: {
                            type: 'spring',
                            stiffness: 40,
                            damping: 20,
                            duration: 0.5,
                        },
                    }}
                    style={{
                        backgroundSize: '0% 0%',
                    }}
                />
            </div>
        </section>
    )
}

export default BallSwitchSlider`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Bento Grid": {
    react: `import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import star from "../../assets/Star.png";
import dbz from "../../assets/DBZ.png";

const BentoGrid = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(-15); // Initial top: -5% of 300px (min-h-[300px]) ≈ -15px
  const divSize = 180;

  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const newX = Math.max(0, Math.min(mouseX - divSize / 2, rect.width - divSize));
    const newY = Math.max(0, Math.min(mouseY - divSize / 2, rect.height - divSize));

    x.set(newX);
    y.set(newY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(-15); // Reset to -5% ≈ -15px
  };

  return (
    <section className="flex justify-center items-center min-h-screen py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8 w-full text-black">
      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col p-2 gap-2 bg-black rounded-xl sm:rounded-2xl w-full lg:w-8/12 relative overflow-hidden z-10"
      >
        <motion.div
          className="absolute size-[120px] sm:size-[150px] lg:size-[180px] bg-gradient-to-tr from-yellow-200 to-amber-400 rounded-full blur-2xl z-10"
          style={{ x, y }}
          initial={{ x: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div className="flex flex-col lg:flex-row gap-2 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] relative z-50">
          <div className="w-full lg:w-3/12 bg-neutral-100 p-[15px] sm:p-[20px] hover:bg-gradient-to-b from-orange-500 to-amber-500 hover:text-white hover:rounded-xl rounded-2xl sm:rounded-3xl transition-all duration-300">
            <div className="h-full w-full flex flex-col justify-between">
              <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter uppercase leading-tight">
                DRAGON BALL Z
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-none">Created by Akira Toriyama.</p>
            </div>
          </div>
          <div className="w-full lg:w-9/12 bg-neutral-100 p-[15px] sm:p-[20px] hover:rounded-xl rounded-2xl sm:rounded-3xl transition-all duration-200">
            <div className="h-full w-full flex flex-col justify-between">
              <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter uppercase leading-tight">
                Aired On April 26, 1989
              </p>
              <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none">
                  TOEI ANIMATION
                </p>
                <div className="flex flex-col sm:flex-row gap-2 w-full ml-auto justify-end">
                  <div className="h-[100px] sm:h-[120px] lg:h-[150px] w-full sm:max-w-[100px] lg:max-w-[130px] bg-neutral-200 rounded-lg p-2 flex flex-col justify-between">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold">Protagonist</p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-base">Son Goku</p>
                  </div>
                  <div className="h-[100px] sm:h-[120px] lg:h-[150px] w-full sm:max-w-[100px] lg:max-w-[130px] bg-neutral-200 rounded-lg p-2 flex flex-col justify-between">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold">Episodes</p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-base">291</p>
                  </div>
                  <div className="h-[100px] sm:h-[120px] lg:h-[150px] w-full sm:max-w-[100px] lg:max-w-[130px] bg-neutral-200 rounded-lg p-2 flex flex-col justify-between">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold">Seasons</p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-base">9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] relative z-50">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full lg:w-9/12 bg-neutral-100 p-[15px] sm:p-[20px] hover:rounded-xl rounded-2xl sm:rounded-3xl transition-all duration-200 flex flex-col sm:flex-row gap-[15px] sm:gap-[20px] lg:gap-[30px]"
          >
            <div className="h-full flex flex-col justify-between w-full sm:w-8/12">
              <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter uppercase leading-tight">
                HISTORY
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-none">
                <span className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter leading-none">
                  SEQUEL TO THE DRAGON BALL
                </span>
              </p>
            </div>
            <div className="h-full w-full sm:w-4/12 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 30 : 0,
                  x: isHovered ? -20 : 0,
                  y: isHovered ? -20 : 0,
                  boxShadow: isHovered
                    ? "0px 10px 30px rgba(0, 0, 0, 0.5)"
                    : "0px 0px 0px rgba(0, 120, 255, 0)",
                }}
                className="size-[50px] sm:size-[75px] md:size-[100px] lg:size-[150px] bg-gradient-to-tr from-yellow-600 to-orange-500 rounded-full relative"
              >
                <img
                  src={star}
                  alt="Star"
                  className="absolute size-[18px] sm:size-[22px] md:size-[25px] lg:size-[28px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 bg-neutral-100 overflow-hidden hover:rounded-xl rounded-2xl sm:rounded-3xl transition-all duration-200">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={dbz}
              alt="Dragon Ball Z"
              className="h-full w-auto object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Reflective Grid": {
    react: `import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  TbBrandCss3,
  TbBrandFigma,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandThreejs,
} from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const Grid = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const divSize = 120;

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const mouseY = Math.max(0, Math.min(event.clientY - rect.top, rect.height));

    x.set(mouseX - divSize / 2);
    y.set(mouseY - divSize / 2);
  };

  const stackData = [
    {
      title: "React",
      icon: <TbBrandReact />,
    },
    {
      title: "Next",
      icon: <TbBrandNextjs />,
    },
    {
      title: "Tailwind",
      icon: <TbBrandTailwind />,
    },
    {
      title: "Three Js",
      icon: <TbBrandThreejs />,
    },
    {
      title: "Vercel",
      icon: <TbBrandFigma />,
    },
    {
      title: "Python",
      icon: <TbBrandPython />,
    },
    {
      title: "Godot Engine",
      icon: <SiGodotengine />,
    },
    {
      title: "Figma",
      icon: <TbBrandFigma />,
    },
    {
      title: "HTML",
      icon: <TbBrandHtml5 />,
    },
    {
      title: "CSS",
      icon: <TbBrandCss3 />,
    },
    {
      title: "Javascript",
      icon: <TbBrandJavascript />,
    },
    {
      title: "Excel",
      icon: <PiMicrosoftExcelLogo />,
    },
  ];

  return (
    <main className="w-full bg-gradient-to-b from-zinc-800 to-zinc-900 min-h-screen py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-center uppercase text-white pb-[50px] sm:pb-[75px] lg:pb-[100px]">
        Tech Stack
      </h2>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 h-fit border-2 border-white/20 w-full max-w-[1180px] mx-auto rounded"
      >
        <div className="p-[5px] sm:p-[8px] lg:p-[10px] mx-auto flex flex-1 flex-wrap gap-[2px] sm:gap-[3px] lg:gap-[4px] relative h-full w-full min-h-[40dvh] sm:min-h-[45dvh] lg:min-h-[50dvh] overflow-hidden rounded-md shadow-2xl shadow-white/10 bg-neutral-900">
          <motion.div
            className="absolute size-[40px] sm:size-[50px] md:size-[80px] lg:size-[120px] bg-gradient-to-tr from-neutral-50 to-neutral-100 rounded-full blur-3xl z-10 pointer-events-none"
            style={{ x, y }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {stackData.map((item, index) => (
            <div
              className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] lg:w-[228px] lg:h-[228px] z-20 bg-white/10 rounded-lg flex items-center justify-center"
              key={index}
            >
              <div className="w-[96px] h-[96px] sm:w-[116px] sm:h-[116px] md:w-[176px] md:h-[176px] lg:w-[221.5px] lg:h-[221.5px] flex flex-col justify-center items-center gap-[5px] sm:gap-[8px] lg:gap-[10px] rounded-lg p-[5px] sm:p-[8px] lg:p-[10px] z-30 text-white bg-zinc-800 hover:bg-neutral-700 transition-all duration-300 ease-in-out">
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">{item.icon}</div>
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-center">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Grid;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Scale Section": {
    react: `import React, { useRef } from "react";
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
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Parallax Section": {
    react: `import React, { useRef } from 'react'
import clouds from '../../assets/clouds.jpg'
import island from '../../assets/island.jpg'
import mountain from '../../assets/mountain.jpg'
import { useScroll, motion, useTransform } from 'framer-motion';

const ParallaxSection = () => {
    const word = 'Parallax Section'
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const sm = useTransform(scrollYProgress, [0, 0.8], [0, -50])
    const md = useTransform(scrollYProgress, [0, 1], [0, -100])
    const lg = useTransform(scrollYProgress, [0, 1], [0, -300])
    return (
        <main className='min-h-[100vh] py-[60px]'>
            <section ref={ref} className="min-h-screen flex items-center">
                <div className='p-2 md:p-8 w-full'>
                    <motion.h1 style={{ y: sm }} className='text-neutral-200 text-4xl md:text-7xl font-serif font-semibold'>Some Heading Goes Here</motion.h1>
                    <p className='text-2xl md:text-5xl relative'>
                        {
                            word.split("").map((letter, index) => {
                                const rd = Math.floor(Math.random() * -25) - 25;
                                const yValue = useTransform(scrollYProgress, [0, 1], [0, rd])
                                return <motion.span className='text-neutral-100 relative uppercase font-semibold' key={index} style={{ top: yValue }}>{letter}</motion.span>
                            })
                        }
                    </p>
                    <div className='relative h-[400px] md:w-6/12 ml-6'>
                        <img className='absolute inset-0 h-full object-cover object-center' src={island} alt="" />
                        <motion.img style={{ y: md }} className='absolute left-[-20px] bottom-[-20px] md:w-[150px] w-auto h-[150px] md:h-[200px] object-cover object-center' src={mountain} alt="" />
                        <motion.img style={{ y: lg }} className='absolute right-[0px] md:right-[-20px] bottom-[-200px] md:bottom-[-100px] md:w-[300px] w-auto h-[150px] md:h-[250px] object-cover object-center' src={clouds} alt="" />
                    </div>
                </div>
            </section >
        </main>
    )
}

export default ParallaxSection`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Column Parallax": {
    react: `import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import img1 from "../../assets/Picture1.jpg";
import img2 from "../../assets/Picture2.jpg";
import img3 from "../../assets/Picture3.jpg";
import img4 from "../../assets/Picture4.jpg";
import img5 from "../../assets/Picture5.jpg";
import img6 from "../../assets/Picture6.jpg";
import img7 from "../../assets/Picture7.jpg";
import img8 from "../../assets/island.jpg";
import img9 from "../../assets/mountain.jpg";

const ColumnParallax = () => {
  const windowHeight = window.innerHeight;
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.9], [0, windowHeight * 1.9]);
  const y2 = useTransform(scrollYProgress, [0, 0.9], [0, windowHeight * 2.3]);
  const y3 = useTransform(scrollYProgress, [0, 0.9], [0, windowHeight * 1.25]);

  return (
    <section>
      <div className="h-[100vh]" />
      <main
        ref={target}
        className="h-[100vh] mx-auto w-fit flex flex-col md:flex-row gap-[1vw] bg-white rounded-2xl m-[30px] items-center justify-center overflow-hidden "
      >
        <motion.div
          style={{ y: y1 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[100%]"
        >
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[120%]"
        >
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img6} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        {/* test */}
        <motion.div
          style={{ y: y3 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[65%]"
        >
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img7} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img8} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[32vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img9} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </main>
      <div className="h-[100vh]" />
    </section>
  );
};

export default ColumnParallax;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Image Parallax": {
    react: `import React, { useRef } from 'react'
import Picture1 from '../../assets/Picture1.jpg'
import Picture2 from '../../assets/Picture2.jpg'
import Picture3 from '../../assets/Picture3.jpg'
import Picture4 from '../../assets/Picture4.jpg'
import Picture5 from '../../assets/Picture5.jpg'
import Picture6 from '../../assets/Picture6.jpg'
import Picture7 from '../../assets/Picture7.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'

const ImageParallax = () => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    const scale4times = useTransform(scrollYProgress, [0, 0.8], [1, 4])
    const scale6times = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8times = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale7times = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale9times = useTransform(scrollYProgress, [0, 1], [1, 9])
    const scale10times = useTransform(scrollYProgress, [0, 1], [1, 5])

    const pictureArray = [
        {
            src: Picture1,
            credits: 'Photo by Pixabay',
            topValue: '0%',
            leftValue: '0%',
            scaleValue: scale4times,
            widthPercentage: '25vw',
            heightPercentage: '25vh'
        },
        {
            src: Picture2,
            credits: 'Photo by Sebastian Palomino',
            topValue: '30%',
            leftValue: '-25%',
            scaleValue: scale9times,
            widthPercentage: '30vw',
            heightPercentage: '30vh'
        },
        {
            src: Picture3,
            credits: 'Photo by Pedro Figueras',
            topValue: '29%',
            leftValue: '4%',
            scaleValue: scale6times,
            widthPercentage: '25vw',
            heightPercentage: '28vh'
        },
        {
            src: Picture4,
            credits: 'Photo by Jaime Reimer',
            topValue: '-32%',
            leftValue: '30%',
            scaleValue: scale8times,
            widthPercentage: '25vw',
            heightPercentage: '35vh'
        },
        {
            src: Picture5,
            credits: 'Photo by Irina Iriser',
            topValue: '-30%',
            leftValue: '1.5%',
            scaleValue: scale6times,
            widthPercentage: '28.5vw',
            heightPercentage: '30vh'
        },
        {
            src: Picture6,
            credits: 'Photo by Ricky Esquivel',
            topValue: '13%',
            leftValue: '28%',
            scaleValue: scale10times,
            widthPercentage: '20vw',
            heightPercentage: '50vh'
        },
        {
            src: Picture7,
            credits: 'Photo by Pixabay',
            topValue: '-12%',
            leftValue: '-27%',
            scaleValue: scale7times,
            widthPercentage: '25vw',
            heightPercentage: '50vh'
        },
    ];
    return (
        <section className='flex flex-col justify-center items-center min-h-screen py-[10vh] space-y-[10vh] overflow-clip'>
            <h1 className='text-neutral-300 text-4xl md:text-9xl max-w-5xl md:mr-auto md:mx-24 font-mono md:leading-[6.8rem] tracking-[0.02rem]'>HELLO <br /> SOME SHIT <br /> IS  ABOUT TO <br /> HAPPEN BELOW</h1>
            <div ref={containerRef} className='h-[300vh] relative w-full'>
                <div className='w-full h-[100vh] sticky top-0 overflow-clip'>
                    {
                        pictureArray.map(({ src, credits, topValue, leftValue, scaleValue, heightPercentage, widthPercentage }, index) => {
                            return (
                                <motion.div key={index}
                                    style={{
                                        scale: scaleValue,
                                    }}
                                    className={\`w-[100%] h-[100%] absolute flex items-center justify-center\`}>
                                    <div
                                        className={\`relative\`}
                                        style={{
                                            width: widthPercentage,
                                            height: heightPercentage,
                                            top: topValue,
                                            left: leftValue,
                                        }}
                                    >
                                        <img src={src} alt="" className='w-full h-full object-cover' />
                                        <p className='absolute bottom-0 left-0 size-auto text-xs text-neutral-100/50'>{credits}</p>
                                    </div>
                                </motion.div>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <h1 className='text-neutral-300 text-4xl md:text-9xl max-w-5xl md:mr-auto md:mx-24 font-mono md:leading-[6.8rem] tracking-[0.02rem]'>REST <br /> OF THE <br /> SITE GOES <br /> THERE ? MAYBE!</h1>
        </section>
    )
}

export default ImageParallax`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Particle Section": {
    react: `import React, { useEffect, useState, useRef } from "react";

const INITIAL_VELOCITY_SCALE = 0.2; // Scale factor for initial random velocity (percentage per frame)
const MAX_VELOCITY = 0.4; // Maximum velocity (percentage per frame) to prevent extreme speeds
const CONNECTION_RADIUS = 200; // Max distance in pixels for lines to be drawn
const LINE_COLOR = "100,100,100";
const DENSITY_FACTOR = 25000; // Pixels per particle (tuned for ~50 particles on 1440x900)
const MIN_PARTICLES = 20; // Minimum number of particles
const MAX_PARTICLES = 100; // Maximum number of particles

const ParticleSection = () => {
  const [numOfParticles, setNumOfParticles] = useState(0);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(null);

  const canvasRef = useRef(null);

  // Calculate number of particles based on container size
  const calculateNumOfParticles = () => {
    const container = containerRef.current;
    if (!container) return MIN_PARTICLES;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const area = containerWidth * containerHeight;
    const calculatedParticles = Math.floor(area / DENSITY_FACTOR);
    return Math.max(
      MIN_PARTICLES,
      Math.min(MAX_PARTICLES, calculatedParticles)
    );
  };

  useEffect(() => {
    const updateParticlesCount = () => {
      const newNum = calculateNumOfParticles();
      setNumOfParticles(newNum);
    };

    updateParticlesCount();
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateParticlesCount, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      // Create an array of numOfParticles particles
      const newParticles = Array.from({ length: numOfParticles }).map(
        (_, i) => ({
          id: i, // Unique ID for React's key prop
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          vx: (Math.random() - 0.5) * INITIAL_VELOCITY_SCALE, // Random value between -0.1 and 0.1
          vy: (Math.random() - 0.5) * INITIAL_VELOCITY_SCALE, // Random value between -0.1 and 0.1
          radius: 5,
          color: "rgba(70,70,70)",
        })
      );
      setParticles(newParticles);
    };
    generateParticles();
  }, [numOfParticles]);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  /**
   * useEffect hook for the animation loop and collision detection.
   * This also handles drawing the connecting lines on the canvas.
   * Runs only once when the component mounts.
   * Basically, this is the main game loop. Something pygame would bring in.
   */
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    // If container or canvas are not ready, request another frame and return
    if (!container || !canvas) {
      animationFrameId.current = requestAnimationFrame(() => {
        // Retry after a short delay if elements aren't ready
        if (!containerRef.current || !canvasRef.current) {
          // If still not ready, schedule again. Otherwise, start animate.
          animationFrameId.current = requestAnimationFrame(animate);
        } else {
          animate();
        }
      });
      return;
    }

    const ctx = canvas.getContext("2d");

    // Define the animation function
    const animate = () => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Set canvas dimensions to match container's current dimensions
      canvas.width = containerWidth;
      canvas.height = containerHeight;

      // Clear the canvas before drawing new lines
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      // Set line style for connections
      ctx.lineWidth = 1;

      // --- Drawing lines between particles and to the cursor ---
      // We need pixel coordinates for drawing and distance calculations.
      // Convert all particle positions to pixel coordinates for this frame.
      const particlesPx = particles.map((p) => ({
        ...p,
        pxX: (p.x / 100) * containerWidth,
        pxY: (p.y / 100) * containerHeight,
      }));

      // 1. Draw lines between particles
      for (let i = 0; i < particlesPx.length; i++) {
        for (let j = i + 1; j < particlesPx.length; j++) {
          // Avoid duplicate lines and self-connection
          const p1 = particlesPx[i];
          const p2 = particlesPx[j];

          const dx = p1.pxX - p2.pxX;
          const dy = p1.pxY - p2.pxY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            let opacity = 1;
            // Calculate opacity: full from 0-100px, fades from 100-200px
            if (distance > 100) {
              opacity = 1 - (distance - 100) / (CONNECTION_RADIUS - 100);
            }
            ctx.strokeStyle = \`rgba(\${LINE_COLOR}, \${opacity})\`;
            ctx.beginPath();
            ctx.moveTo(p1.pxX, p1.pxY);
            ctx.lineTo(p2.pxX, p2.pxY);
            ctx.stroke();
          }
        }
      }

      // 2. Draw lines between particles and the cursor
      if (cursorPosition) {
        // Only draw if cursor position has been set
        const cursorPxX = cursorPosition.x;
        const cursorPxY = cursorPosition.y;

        for (const p of particlesPx) {
          const dx = p.pxX - cursorPxX;
          const dy = p.pxY - cursorPxY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            let opacity = 1;
            // Calculate opacity: full from 0-100px, fades from 100-200px
            if (distance > 100) {
              opacity = 1 - (distance - 100) / (CONNECTION_RADIUS - 100);
            }
            ctx.strokeStyle = \`rgba(\${LINE_COLOR}, \${opacity})\`;
            ctx.beginPath();
            ctx.moveTo(p.pxX, p.pxY);
            ctx.lineTo(cursorPxX, cursorPxY);
            ctx.stroke();
          }
        }
      }

      // --- Update the particles' positions and velocities ---
      setParticles((prevParticles) => {
        return prevParticles.map((p, index) => {
          let { x, y, vx, vy, radius } = p;

          // 1. Update particle position (still in percentage)
          x += vx;
          y += vy;

          // 2. Convert current percentage position to pixel coordinates for accurate collision detection
          let currentPxX = (x / 100) * containerWidth;
          let currentPxY = (y / 100) * containerHeight;

          // 3. Check for collisions with horizontal walls (left and right)
          if (currentPxX - radius < 0) {
            currentPxX = radius; // Adjust position to be exactly at the boundary
            vx *= -1; // Reverse horizontal velocity to simulate a bounce
          } else if (currentPxX + radius > containerWidth) {
            currentPxX = containerWidth - radius; // Adjust position
            vx *= -1; // Reverse horizontal velocity
          }

          // 4. Check for collisions with vertical walls (top and bottom)
          if (currentPxY - radius < 0) {
            currentPxY = radius; // Adjust position
            vy *= -1; // Reverse vertical velocity
          } else if (currentPxY + radius > containerHeight) {
            currentPxY = containerHeight - radius; // Adjust position
            vy *= -1; // Reverse vertical velocity
          }

          // 5. Particle-particle collision (simplified repulsion, as per original user code structure)
          // Note: This approach has limitations as it modifies velocities for 'p' based on 'otherP'
          // from the *previous* state, and does not correctly update 'otherP' in the same frame.
          // For more accurate physics, a different collision resolution approach would be needed.
          for (const otherP of prevParticles) {
            // Iterate over previous state for other particles
            if (otherP.id !== p.id) {
              // Convert other particle's percentage position to pixel
              const otherPxX = (otherP.x / 100) * containerWidth;
              const otherPxY = (otherP.y / 100) * containerHeight;

              const dx = currentPxX - otherPxX;
              const dy = currentPxY - otherPxY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < radius + otherP.radius) {
                // Simple repulsion: apply a small push away from the colliding particle
                const angle = Math.atan2(dy, dx);
                vx += Math.cos(angle) * 0.01; // Small push in percentage terms
                vy += Math.sin(angle) * 0.01; // Small push in percentage terms
              }
            }
          }

          // 6. Apply Max Velocity Constraint to prevent particles from moving too fast
          vx = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vx));
          vy = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, vy));

          // 7. Convert updated pixel position back to percentage for state storage
          // This ensures particles are rendered correctly relative to the container's size.
          x = (currentPxX / containerWidth) * 100;
          y = (currentPxY / containerHeight) * 100;

          // Return the updated particle object
          return { ...p, x, y, vx, vy };
        });
      });

      // Request the next animation frame, creating a continuous loop
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start the animation loop when the component mounts
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particles, cursorPosition]);

  return (
    <main className="min-h-screen flex items-center justify-center p-2 md:p-4 font-inter bg-neutral-900">
      <div
        ref={containerRef}
        className="relative w-full h-[calc(100dvh-60px)] bg-neutral-200 rounded-lg shadow-lg overflow-hidden border border-neutral-700"
        onMouseMove={handleMouseMove}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        ></canvas>

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: \`\${particle.x}%\`,
              top: \`\${particle.y}%\`,
              width: \`\${particle.radius * 2}px\`,
              height: \`\${particle.radius * 2}px\`,
              backgroundColor: particle.color,
              transform: \`translate(-50%, -50%)\`,
            }}
          ></div>
        ))}

        <div className="p-[10px] md:p-[30px] absolute z-50 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] max-w-xl h-auto rounded-xl bg-black/50 backdrop-blur-sm text-white">
          <h2 className="text-5xl font-bold uppercase tracking-wide pb-[15px] md:pb-[30px] ">
            Particle Section
          </h2>
          <p className="tracking-wide pb-[10px]">
            Despite the fact that this is an amazing section. It does not
            provide any real value. The fact i created this with javascript is
            absurd as there is a whole library for this exact purpose.
          </p>
          <p className="tracking-wide ">
            I just wanted to recreate the PYGAME collision system in React as i
            have also started to work on games. Guess what? It works!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ParticleSection;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Contact Form": {
    react: `import React, { useState } from 'react';
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
        <section className="flex items-center justify-center py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8 min-h-screen w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 bg-neutral-950 z-[50] rounded-xl shadow-2xl overflow-clip bg-blend-saturation">
                <div className='absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 size-24 sm:size-28 lg:size-32 z-[-1] rounded-full bg-gray-500/60 blur-3xl'></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white tracking-wide">Get in Touch</h2>
                <p className="text-center text-white text-xs sm:text-sm lg:text-base">We'd love to hear from you! Fill out the form below to reach us.</p>
                <form className="space-y-4 sm:space-y-6 text-white">
                    <div className='flex flex-col sm:flex-row justify-between gap-y-4 sm:gap-x-4'>
                        <div className="relative flex flex-col group w-full sm:w-6/12">
                            <motion.label
                                initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                animate={labelAnimate("fullname")}
                                className="absolute left-2 top-3 text-white text-xs sm:text-sm pointer-events-none bg-neutral-950 px-2"
                                htmlFor="fullname"
                            >
                                Full Name *
                            </motion.label>
                            <input
                                type="text"
                                id="fullname"
                                onFocus={() => handleFocus("fullname")}
                                onBlur={() => handleBlur("fullname")}
                                className="bg-transparent text-white text-xs sm:text-sm rounded-lg border border-gray-300 w-full p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                        <div className="relative flex flex-col group w-full sm:w-6/12">
                            <motion.label
                                initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                                animate={labelAnimate("email")}
                                className="absolute left-2 top-3 text-white text-xs sm:text-sm pointer-events-none bg-neutral-950 px-2"
                                htmlFor="email"
                            >
                                Email *
                            </motion.label>
                            <input
                                type="email"
                                id="email"
                                onFocus={() => handleFocus("email")}
                                onBlur={() => handleBlur("email")}
                                className="bg-transparent text-white text-xs sm:text-sm rounded-lg border border-gray-300 w-full p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                    </div>
                    <div className="relative flex flex-col group w-full">
                        <motion.label
                            initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                            animate={labelAnimate("Number")}
                            className="absolute left-2 top-3 text-white text-xs sm:text-sm pointer-events-none bg-neutral-950 px-2"
                            htmlFor="Number"
                        >
                            Number
                        </motion.label>
                        <input
                            id="Number"
                            type="tel"
                            onFocus={() => handleFocus("Number")}
                            onBlur={() => handleBlur("Number")}
                            className="bg-transparent text-white text-xs sm:text-sm rounded-lg border border-gray-300 w-full p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                        />
                    </div>
                    <div className="relative flex flex-col group w-full">
                        <motion.label
                            initial={{ y: 0, opacity: 1, scale: 1, width: "95%" }}
                            animate={labelAnimate("Description")}
                            className="absolute left-2 top-3 text-white text-xs sm:text-sm pointer-events-none bg-neutral-950 px-2"
                            htmlFor="Description"
                        >
                            Description *
                        </motion.label>
                        <textarea
                            id="Description"
                            onFocus={() => handleFocus("Description")}
                            onBlur={() => handleBlur("Description")}
                            rows="3"
                            className="bg-transparent text-white text-xs sm:text-sm rounded-lg border border-gray-300 w-full p-2 sm:p-2.5 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                        />
                    </div>
                    <motion.button
                        className='px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-md relative radial-gradient text-xs sm:text-sm lg:text-base'
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
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Custom Border": {
    react: `import React from 'react'

const CustomBorder = () => {
    return (
        <section className='flex items-center justify-center min-h-[100vh] py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto p-1'>
                {/* Background div with gradient and shadow */}
                <div className='absolute inset-0 z-0 p-2 sm:p-3 lg:p-4 rounded'>
                    <div className='absolute inset-0 rounded bg-gradient-to-br from-violet-500 to-pink-500 opacity-50 shadow-[-10px_-10px_60px_10px_rgba(140,60,100,0.5),10px_10px_60px_10px_rgba(139,92,246,0.5)]'></div>
                </div>

                {/* Foreground content */}
                <div className='relative z-10 px-4 sm:px-6 py-6 sm:py-8 lg:py-10 rounded bg-gradient-to-b from-slate-900 to-slate-950 shadow-lg w-full'>
                    <h2 className='text-xl sm:text-2xl font-semibold mb-1 text-white font-oswald leading-tight'>List Of Stuff</h2>
                    <p className='text-slate-100 text-sm sm:text-base lg:text-lg mb-2 leading-relaxed'>Some description thats not too long</p>
                    <ol className='text-sm sm:text-base list-disc mx-4 space-y-1'>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default CustomBorder`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Image Trail": {
    react: `import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import pic1 from "../../assets/Picture1.jpg";
import pic2 from "../../assets/Picture2.jpg";
import pic3 from "../../assets/Picture3.jpg";
import pic4 from "../../assets/Picture4.jpg";
import pic5 from "../../assets/Picture5.jpg";
import pic6 from "../../assets/Picture6.jpg";

const ImageTrail = () => {
  const [images, setImages] = useState([]);
  const isMounted = useRef(true);
  const currentIndex = useRef(0); // Track current index (0 to 5)
  const lastPosition = useRef({ x: 0, y: 0 }); // Track last mouse position

  const urls = [
    { src: pic1, alt: "Child with ice cream" },
    { src: pic2, alt: "Child with messy ice cream" },
    { src: pic3, alt: "Woman in striped shirt" },
    { src: pic4, alt: "Woman with bun" },
    { src: pic5, alt: "Two ice cream cones" },
    { src: pic6, alt: "Family with ice cream" },
  ];

  // Animation variants for images
  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 0.5, bounce: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    isMounted.current = true;

    const handleMouseMove = (event) => {
      if (!isMounted.current) return;

      const { clientX, clientY } = event;
      const imageSize = window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 120 : 160;
      const newX = Math.min(Math.max(clientX - imageSize / 2, 0), window.innerWidth - imageSize);
      const newY = Math.min(Math.max(clientY - imageSize / 2, 0), window.innerHeight - imageSize);

      const distance = Math.sqrt(
        Math.pow(newX - lastPosition.current.x, 2) + Math.pow(newY - lastPosition.current.y, 2)
      );

      if (distance > 100) {
        const id = Date.now() + Math.random();
        const index = currentIndex.current;
        currentIndex.current = (currentIndex.current + 1) % urls.length; 
        const randomRotation = Math.random() * 60 - 30; 
        
        setImages((prev) => [
          ...prev,
          {
            id,
            x: newX,
            y: newY,
            src: urls[index].src,
            alt: urls[index].alt,
            rotation: randomRotation,
          },
        ]);

        lastPosition.current = { x: newX, y: newY };

        // Remove image after 1 second
        setTimeout(() => {
          if (isMounted.current) {
            setImages((prev) => prev.filter((img) => img.id !== id));
          }
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      isMounted.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-start px-[30px] justify-center relative bg-gradient-to-b from-neutral-50 to-neutral-100 text-white overflow-hidden py-8 sm:py-12 md:py-16">
      {/* Image Trail */}
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="absolute w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px]"
          style={{
            top: \`\${image.y}px\`,
            left: \`\${image.x}px\`,
            rotate: image.rotation,
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-hidden="true"
        >
          <img
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 160px"
            style={{ objectFit: "cover", borderRadius: "10px", border: "2px solid white" }}
            onError={() => {
              setImages((prev) => prev.filter((img) => img.id !== image.id));
            }}
          />
        </motion.div>
      ))}

      {/* Text Content */}
      <h2 className="mix-blend-exclusion max-w-[90%] md:max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-tight sm:leading-snug pb-4 sm:pb-6 md:pb-8 z-50 pointer-events-none">
        This is an Image Trail components using React and Framer Motion
      </h2>
      <p className="mix-blend-exclusion text-base sm:text-lg md:text-xl pb-3 sm:pb-4 md:pb-5 z-50">
        Spawns images on mouse move
      </p>
    </div>
  );
};

export default ImageTrail;`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Infinite Marquee": {
    react: `import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const InfiniteMarquee = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start 40%"],
  });

  const width1 = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);
  const width2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <main
      ref={container}
      className="h-[50vh] flex flex-col justify-start items-start space-y-2"
    >
      <motion.section
        className="flex overflow-hidden"
        style={{ width: width1 }}
      >
        <motion.div
          className="text-xl md:text-8xl font-black tracking-wider flex flex-shrink-0 py-2 md:py-6 bg-white text-black"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          Hello There This Is A Marquee. A Simple Component to make but it
          works.
        </motion.div>
        <motion.div
          className="text-xl md:text-8xl font-black tracking-wider flex flex-shrink-0 py-2 md:py-6 bg-white text-black"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          Hello There This Is A Marquee. A Simple Component to make but it
          works.
        </motion.div>
      </motion.section>

      <motion.section
        className="flex overflow-hidden"
        style={{ width: width2 }}
      >
        <motion.div
          className="text-lg md:text-6xl text-white font-bold tracking-wider flex flex-shrink-0 py-1 md:py-6 bg-gradient-to-b from-sky-500 to-blue-500"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          I Reckon another smaller one with the big one would look good.
        </motion.div>
        <motion.div
          className="text-lg md:text-6xl text-white font-bold tracking-wider flex flex-shrink-0 py-1 md:py-6 bg-gradient-to-b from-sky-500 to-blue-500"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          I Reckon another smaller one with the big one would look good.
        </motion.div>
      </motion.section>
    </main>
  );
};

export default InfiniteMarquee;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "In View Animation": {
    react: `import React, { useRef } from 'react';
import clouds from '../../assets/clouds.jpg';
import { motion, useInView } from 'framer-motion';

const InViewAnimation = () => {
    // Ref for the animation container
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });

    // Text animation variants
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: custom * 0.5 },
        }),
    };

    return (
        <main className="h-fit md:h-[100dvh] bg-slate-50 flex items-center">
            <div ref={containerRef} className="flex flex-col md:flex-row w-full md:min-h-screen">
                <div className="p-[10px] md:p-[30px] h-fit md:h-screen w-full md:w-6/12 flex items-center justify-center">
                    <div className='w-full md:w-10/12 h-auto relative'>
                        <motion.img
                            src={clouds}
                            alt="clouds"
                            className='w-full h-full object-cover'
                            initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
                            animate={{ boxShadow: isInView ? '0px 10px 20px rgba(0, 0, 0, 0.4)' : '0px 0px 0px rgba(0, 0, 0, 0)' }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        />
                        <motion.div
                            className='w-full h-full bg-neutral-50 absolute top-0 z-50'
                            initial={{ height: 'full' }}
                            animate={{ height: isInView ? '0px' : '400px' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        />
                    </div>
                </div>
                <div className="w-full md:w-6/12 h-full mt-auto min-h-[350px] md:min-h-screen flex flex-col justify-center items-start p-[10px] md:p-[30px] ">
                    <motion.span
                        className="text-red-500 text-sm md:text-lg font-semibold font-mono"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2}
                    >
                        In-View Animation
                    </motion.span>
                    <motion.p
                        className=" text-4xl md:text-7xl text-zinc-800 font-bold md:leading-[70px] tracking-tighter pb-[20px]"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2.5}
                    >
                        LOOK AT THIS IMAGE IT LOOKS GREAT !!! <br /> DOESN'T IT ?
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-5xl text-zinc-600 font-semibold max-w-lg tracking-tight"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={3}
                    >
                        Well, that's why I chose it in the first place.
                    </motion.p>
                </div>
            </div>
        </main>
    );
};

export default InViewAnimation;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Circular Banner": {
    react: `import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../../assets/Logo.svg";
import { TbArrowRight } from "react-icons/tb";

const CircularBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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
      boxShadow: "0px 4px 8px 0px rgba(255, 255, 255, 0.4)",
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
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
      <main
        ref={ref}
        className="bg-white h-[80dvh] px-2 sm:px-2.5 py-2 sm:py-4 overflow-hidden"
      >
        <div className="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full h-full overflow-hidden bg-gradient-to-t from-[#ff630b] to-[#f54701] relative">
          {/* navbar */}
          <motion.nav
            initial={{ y: "-200px", x: 15 }}
            animate={{
              y: isInView ? 0 : "-200px",
              transition: {
                ease: [0.4, 0, -0.5, 1],
                duration: 1,
              },
            }}
            onMouseLeave={() => setIsNavExpanded(false)}
            className={\`w-[calc(100%-30px)] absolute top-[10px] sm:top-[15px] lg:top-[20px] px-[15px] sm:px-[20px] lg:px-[30px] bg-white transition-all duration-100 ease-in \${
              isNavExpanded
                ? "rounded-t-[15px] sm:rounded-t-[20px] lg:rounded-t-[30px]"
                : "rounded-full"
            } \`}
          >
            <div className="flex items-center justify-between relative h-12 sm:h-14 lg:h-16">
              <div className="hidden sm:flex items-start justify-center text-black gap-1">
                <button
                  onMouseEnter={() => setIsNavExpanded("product")}
                  className="uppercase tracking-wide px-2 sm:px-3 lg:px-4 py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm lg:text-base"
                >
                  Products
                </button>
                <button
                  onMouseEnter={() => setIsNavExpanded("solutions")}
                  className="uppercase tracking-wide px-2 sm:px-3 lg:px-4 py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm lg:text-base"
                >
                  Solutions
                </button>
                <button
                  onMouseEnter={() => setIsNavExpanded("resources")}
                  className="uppercase tracking-wide px-2 sm:px-3 lg:px-4 py-1 rounded-full hover:bg-gray-100 text-xs sm:text-sm lg:text-base"
                >
                  Resources
                </button>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2">
                <img src={logo} alt="" className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] lg:h-[45px] lg:w-[45px]" />
              </div>
              <div className="hidden sm:flex items-start justify-center text-black gap-1">
                <p className="uppercase tracking-wide px-2 sm:px-3 lg:px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer text-xs sm:text-sm lg:text-base">
                  Home
                </p>
                <p className="uppercase tracking-wide px-2 sm:px-3 lg:px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer text-xs sm:text-sm lg:text-base">
                  About
                </p>
                <p className="uppercase tracking-wide px-2 sm:px-3 lg:px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer text-xs sm:text-sm lg:text-base">
                  Contact
                </p>
              </div>
            </div>
            {isNavExpanded === "product" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-black px-[20px] sm:px-[30px] lg:px-[45px] py-[10px] rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[30px] absolute top-[45px] sm:top-[50px] lg:top-[55px] left-0 w-full h-[150px] sm:h-[180px] lg:h-[200px] bg-white"
                onMouseLeave={() => setIsNavExpanded(false)}
              >
                <h3 className="uppercase font-bold italic underline-offset-2 underline mb-[15px] sm:mb-[20px] text-sm sm:text-base lg:text-lg">
                  For Developers
                </h3>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20%]">
                  <ul className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                    <li>Hover Buttons</li>
                    <li>Exclusive Cards</li>
                    <li>Interactive Components</li>
                  </ul>
                  <ul className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                    <li>Framer Motion</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </motion.div>
            )}
            {isNavExpanded === "solutions" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-black px-[20px] sm:px-[30px] lg:px-[45px] py-[10px] rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[30px] absolute top-[45px] sm:top-[50px] lg:top-[55px] left-0 w-full h-[150px] sm:h-[180px] lg:h-[200px] bg-white"
                onMouseLeave={() => setIsNavExpanded(false)}
              >
                <h3 className="uppercase font-bold italic underline-offset-2 underline mb-[15px] sm:mb-[20px] text-sm sm:text-base lg:text-lg">
                  Fast and Easy
                </h3>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20%]">
                  <ul className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                    <li>Sleek Designs</li>
                    <li>Faster Development</li>
                    <li>Easy Integration</li>
                  </ul>
                </div>
              </motion.div>
            )}
            {isNavExpanded === "resources" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-black px-[20px] sm:px-[30px] lg:px-[45px] py-[10px] rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[30px] absolute top-[45px] sm:top-[50px] lg:top-[55px] left-0 w-full h-[150px] sm:h-[180px] lg:h-[200px] bg-white"
                onMouseLeave={() => setIsNavExpanded(false)}
              >
                <h3 className="uppercase font-bold italic underline-offset-2 underline mb-[15px] sm:mb-[20px] text-sm sm:text-base lg:text-lg">
                  Inspiration & Ideas
                </h3>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20%]">
                  <ul className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                    <li>Tom is loading</li>
                    <li>Awwwards Winner</li>
                  </ul>
                  <ul className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                    <li>Hover Interactions</li>
                    <li>Scroll Animations</li>
                    <li>3D Elements</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.nav>

          <div className="h-full w-full lg:w-6/12 text-white py-[20px] sm:py-[30px] lg:py-[40px] px-[15px] sm:px-[20px] lg:px-[30px] flex flex-col justify-end">
            <AppearAnimate inView={isInView} delay={0.6}>
              <p className="uppercase font-medium text-xs sm:text-sm lg:text-base">Your Mission</p>
            </AppearAnimate>

            <AppearAnimate inView={isInView} delay={0.7}>
              <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl leading-tight">
                A Catchy Tagline*
              </h1>
            </AppearAnimate>
            <AppearAnimate inView={isInView} delay={0.8}>
              <h1 className="font-medium text-2xl sm:text-4xl lg:text-6xl leading-tight">
                A supporting line of text
              </h1>
            </AppearAnimate>
            <AppearAnimate inView={isInView} delay={0.9}>
              <p className="pt-[15px] sm:pt-[20px] max-w-lg text-xs sm:text-sm lg:text-base leading-relaxed">
                And then here goes your description about what you do something
                that your audience might relate to
              </p>
            </AppearAnimate>
            <AppearAnimate inView={isInView} delay={1}>
              <div className="px-1 py-[15px] sm:py-[20px]">
                <motion.button
                  variants={parent}
                  initial="initial"
                  whileHover="hover"
                  className="px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 flex text-nowrap justify-center items-center rounded-full transition-colors w-fit text-xs sm:text-sm lg:text-base"
                >
                  CTA HERE
                  <motion.span variants={child}>
                    <TbArrowRight size={12} className="sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                  </motion.span>
                </motion.button>
              </div>
            </AppearAnimate>
          </div>
        </div>
      </main>
  );
};

export default CircularBanner;

const AppearAnimate = ({ children, inView, delay }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: inView ? 0 : 100 }}
        transition={{ duration: 0.4, ease: "backOut", delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Separate Banner": {
    react: `import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import camera from "../../assets/camera.jpg";

const SeperateBanner = () => {
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

export default SeperateBanner;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Call To Action": {
    react: `import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
import { motion, useMotionTemplate, animate, useMotionValue } from 'framer-motion';

const COLORS = ["#E61919", "#0066FF", "#7F055F", "#F75590", "#E61919"];

const CallToAction = () => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate\`radial-gradient(120% 150% at 50% 0%, #0b0b0b 50%, \${color})\`
    const border = useMotionTemplate\`2px solid \${color}\`
    const boxShadow = useMotionTemplate\`0 4px 24px \${color}\`

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            repeat: Infinity,
            duration: 10,
            repeatType: "mirror",
        }

        )
    })
    return (
        <motion.section
            className="h-screen w-full overflow-hidden text-white relative"
            style={{
                backgroundImage,
            }}
        >
            <div className="relative h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    Innovation Meets Excellence
                </h2>
                <p className="text-lg font-light lg:text-xl mb-4">
                    Pioneering web solutions that turn your vision into reality.
                </p>
                {/* <Link to="contact" spy={true} smooth={true} duration={500}> */}
                <motion.button
                    style={{ boxShadow, border }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className='px-6 py-3 rounded-full text-lg font-DM font-semibold'
                >
                    Discover the future with us
                </motion.button>
                {/* </Link> */}
            </div>
        </motion.section>
    );
};

export default CallToAction;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Reveal Footer": {
    react: `import React from "react";
import { motion } from "framer-motion";

const RevealFooter = () => {
  return (
    <div
      className="relative h-screen md:h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+80vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-80vh)] h-[80vh]">
          <div className="bg-white h-screen md:h-[80vh] text-gray-800 flex flex-col justify-center px-[10px] md:px-[30px]">
            <div className="flex flex-col md:flex-row gap-4 justify-between py-4 md:py-12 border-b-2">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div>
                  <p className="text-lg font-bold font-mono uppercase">
                    Tech Stack
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="font-mono uppercase tracking-tight">
                      React
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Tailwind
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Framer Motion
                    </li>
                    <li className="font-mono uppercase tracking-tight">Vite</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-bold font-mono uppercase">
                    Assets
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="font-mono uppercase tracking-tight">
                      UnSplash
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Pexels
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      React Icons
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Hover.Dev
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-bold font-mono uppercase">Ideas</p>
                  <ul className="list-disc ml-4">
                    <li className="font-mono uppercase tracking-tight">
                      Tom Is Loading (YouTube)
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Olivier Larose (YouTube)
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      EndLess Scrolling through Awwwards.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pr-12">
                <p className="text-lg font-bold font-mono uppercase">Contact</p>
                <ul className="list-disc ml-4">
                  <li className="font-mono uppercase tracking-tight">
                    LinkedIn
                  </li>
                  <li className="font-mono uppercase tracking-tight">GitHub</li>
                  <li className="font-mono uppercase tracking-tight">Email</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="text-5xl md:text-7xl font-bold"
              >
                ABDUL HANNAN SIDDIQUI
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealFooter;
`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Split Vignette Effect": {
    react: `import { useMotionValue, motion } from 'framer-motion'
import React, { useState } from 'react'

const SplitVignetteEffect = () => {
  const div = [
    {
      id: 1,
      background: '#264653',
      img: 'https://images.unsplash.com/photo-1725489890986-330621425633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 2,
      background: '#e76f51',
      img: 'https://images.unsplash.com/photo-1725958171072-808f8b8bd313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 3,
      background: '#a8dadc',
      img: 'https://images.unsplash.com/photo-1726007403882-e8f76fe5dc07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 4,
      background: '#bc6c25',
      img: 'https://images.unsplash.com/photo-1726134212431-c794fd3d0c34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const mouseMove = (e) => {
    const { clientX, clientY } = e
    const targetX = clientX - (window.innerHeight * 0.125)
    const targetY = clientY - (window.innerWidth * 0.070)
    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)

  }
  return (

    <section className='h-auto w-full flex flex-col items-center justify-center overflow-hidden cursor-none'>
      <main onMouseMove={mouseMove}>
        {
          div.map((item, i) => {
            return <Gallery key={i} mousePosition={mousePosition} item={item} i={i} />
          })
        }
      </main>
    </section>
  )
}


const Gallery = ({ mousePosition, item, i }) => {

  const { background, img } = item

  const { x, y } = mousePosition

  return (
    <div className='h-[120vh]' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} >
      <div style={{ background }} className='h-full w-screen relative overflow-hidden'>
      </div>
      <motion.div
        className='h-[30vh] w-[25vh] fixed top-0 left-0 rounded-xl overflow-hidden pointer-events-none'
        style={{ x, y }}
      >
        <img src={img} alt={i} className='w-full h-full object-cover' />
      </motion.div>
    </div>
  )
}

export default SplitVignetteEffect`,
    nextjs: `// Next.js code will be available soon`,
  },

  "Floating Phone": {
    react: `import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import saska from "../../assets/Saska.png";
const FloatingPhone = () => {
    return (
        <section className="min-h-[100vh] py-[60px] flex justify-center items-center">
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(-30deg) rotateX(15deg)",
                }}
                className="rounded-[24px] bg-gradient-to-tr from-sky-600 to-pink-600 p-1"
            >
                <motion.div
                    initial={{
                        transform: "translateZ(8px) translateY(-2px)",
                    }}
                    animate={{
                        transform: "translateZ(32px) translateY(-8px)",
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
                >
                    <HeaderBar />
                    <Screen />
                </motion.div>
            </div>
        </section>
    );
};

const HeaderBar = () => {
    return (
        <>
            <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-800"></div>
            <div className="absolute right-3 top-2 z-10 flex gap-2">
                <FiWifi className="text-neutral-300" />
                <FiBatteryCharging className="text-neutral-300" />
            </div>
        </>
    );
};

const Screen = () => {
    return (
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-slate-950">
            {/* Example logo from logoispum */}
            <img src={saska} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44" alt="" />

            <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-black backdrop-blur-[1px]">
                Discover The Future
            </button>

            {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
            {/* <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-violet-500" /> */}
        </div>
    );
};

export default FloatingPhone;`,
    nextjs: `// Next.js code will be available soon`,
  },

  // "": {
  //   react: ``,
  //   nextjs: `// Next.js code will be available soon`,
  // },

  // "": {
  //   react: ``,
  //   nextjs: `// Next.js code will be available soon`,
  // },

  // "": {
  //   react: ``,
  //   nextjs: `// Next.js code will be available soon`,
  // },
};

// Default code for components not in the database
export const getDefaultCode = (componentName) => ({
  react: `// React component code for \${componentName}
// This is a fallback placeholder. I probably forgot to add the code for this component.

import React from 'react';

const \${componentName.replace(/\s+/g, "")} = () => {
  return (
    <div className="p-8 bg-neutral-800 rounded-lg">
      <h3 className="text-white text-xl mb-4">\${componentName}</h3>
      <p className="text-neutral-300">
        Component implementation goes here...
      </p>
    </div>
  );
};

export default \${componentName.replace(/\s+/g, "")};`,
  nextjs: `// Next.js code will be available soon`,
});
