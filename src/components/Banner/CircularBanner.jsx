import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/Logo.svg";

const CircularBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const parent = {
    initial: {
      backgroundColor: "white",
      color: "black",
    },
    hover: {
      backgroundColor: "black",
      color: "white",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const child = {
    initial: {
      marginLeft: "8px",
      rotate: "-45deg",
    },
    hover: {
      marginLeft: "12px",
      rotate: "0deg",
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <section className="pt-[40dvh]">
      <main
        ref={ref}
        className="bg-white h-[100dvh] px-2.5 py-4 overflow-hidden"
      >
        <div className="rounded-[40px] w-full h-full overflow-hidden bg-gradient-to-t from-[#ff630b] to-[#f54701] relative">
          {/* navbar */}
          <motion.nav
            initial={{ y: "-200px", x: 15 }}
            animate={{
              y: isInView ? 0 : "-200px",
              transition: {
                duration: 0.5,
                ease: [0.4, 0.5, 0, 1.5],
                delay: 0.5,
              },
            }}
            onMouseLeave={() => setIsNavExpanded(false)}
            className={`w-[calc(100%-30px)] absolute top-[20px] px-[30px] bg-white transition-all duration-100 ease-in ${
              isNavExpanded ? "rounded-t-[30px]" : "rounded-full"
            } `}
          >
            <div className="flex items-center justify-between relative h-16 ">
              <div className="flex items-start justify-center text-black gap-1">
                <button
                  onMouseEnter={() => setIsNavExpanded("product")}
                  className="uppercase tracking-wide px-4 py-1 rounded-full hover:bg-gray-100"
                >
                  Products
                </button>
                <button
                  onMouseEnter={() => setIsNavExpanded("solutions")}
                  className="uppercase tracking-wide px-4 py-1 rounded-full hover:bg-gray-100"
                >
                  Solutions
                </button>
                <button
                  onMouseEnter={() => setIsNavExpanded("resources")}
                  className="uppercase tracking-wide px-4 py-1 rounded-full hover:bg-gray-100"
                >
                  Resources
                </button>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2">
                <img src={logo} alt="" className="h-[45px] w-[45px]" />
              </div>
              <div className="flex items-start justify-center text-black gap-1">
                <p className="uppercase tracking-wide px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer">
                  Home
                </p>
                <p className="uppercase tracking-wide px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer">
                  About
                </p>
                <p className="uppercase tracking-wide px-4 py-1 rounded-full hover:bg-gray-100 cursor-pointer">
                  Contact
                </p>
              </div>
            </div>
            {isNavExpanded === "product" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-black px-[45px] py-[10px] rounded-b-[30px] absolute top-[55px] left-0 w-full h-[200px] bg-white"
                onMouseLeave={() => setIsNavExpanded(false)}
              >
                <h3 className="uppercase font-bold italic underline-offset-2 underline mb-[20px]">
                  For Developers
                </h3>
                <div className="flex flex-row gap-[20%]">
                  <ul>
                    <li>Hover Buttons</li>
                    <li>Exclusive Cards</li>
                    <li>Interactive Components</li>
                  </ul>
                  <ul>
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
                className="text-black px-[45px] py-[10px] rounded-b-[30px] absolute top-[55px] left-0 w-full h-[200px] bg-white"
                onMouseLeave={() => setIsNavExpanded(false)}
              >
                <h3 className="uppercase font-bold italic underline-offset-2 underline mb-[20px]">
                  Fast and Easy
                </h3>
                <div className="flex flex-row gap-[20%]">
                  <ul>
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
                className="text-black px-[45px] py-[10px] rounded-b-[30px] absolute top-[55px] left-0 w-full h-[200px] bg-white"
                onMouseLeave={() => setIsNavExpanded(false)}
              >
                <h3 className="uppercase font-bold italic underline-offset-2 underline mb-[20px]">
                  Inspiration & Ideas
                </h3>
                <div className="flex flex-row gap-[20%]">
                  <ul>
                    <li>Tom is loading</li>
                    <li>Awwwards Winner</li>
                  </ul>
                  <ul>
                    <li>Hover Interactions</li>
                    <li>Scroll Animations</li>
                    <li>3D Elements</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.nav>

          <div className="h-full w-6/12 text-white py-[40px] px-[30px] flex flex-col justify-end">
            <AppearAnimate inView={isInView} delay={0.6}>
              <p className="uppercase font-medium">Your Mission</p>
            </AppearAnimate>

            <AppearAnimate inView={isInView} delay={0.7}>
              <h1 className="font-bold text-7xl leading-tight">
                A Catchy Tagline*
              </h1>
            </AppearAnimate>
            <AppearAnimate inView={isInView} delay={0.8}>
              <h1 className="font-medium text-6xl leading-tight">
                A supporting line of text
              </h1>
            </AppearAnimate>
            <AppearAnimate inView={isInView} delay={0.9}>
              <p className="py-[20px] max-w-lg">
                And then here goes your description about what you do something
                that your audience might relate to
              </p>
            </AppearAnimate>
            <AppearAnimate inView={isInView} delay={1}>
              <div>
                <motion.button
                  variants={parent}
                  initial="initial"
                  whileHover="hover"
                  className="px-6 py-2 flex text-nowrap justify-center items-center rounded-full transition-colors w-fit"
                >
                  CTA HERE
                  <motion.span variants={child}>
                    <FaArrowRight size={14} />
                  </motion.span>
                </motion.button>
              </div>
            </AppearAnimate>
          </div>
        </div>
      </main>
    </section>
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
