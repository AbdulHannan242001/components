import React, { useState } from "react";
import { motion } from "framer-motion";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
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
        className={`h-[100vh] w-full absolute bg-neutral-950 top-0 left-0 z-[50] flex flex-col items-start justify-center  
                            ${
                              active
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                            }`}
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
