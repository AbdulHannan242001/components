import React, { useRef, useState } from "react";
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
            className={`w-[calc(100%-30px)] absolute top-[10px] sm:top-[15px] lg:top-[20px] px-[15px] sm:px-[20px] lg:px-[30px] bg-white transition-all duration-100 ease-in ${
              isNavExpanded ? "rounded-t-[15px] sm:rounded-t-[20px] lg:rounded-t-[30px]" : "rounded-full"
            } `}
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
