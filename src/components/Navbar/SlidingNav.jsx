import React, { useState } from "react";
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
            className="text-white text-6xl font-bold max-w-[1600px] w-full mx-auto cursor-pointer"
          >
            <motion.button
              className="p-4"
              whileHover={{ scale: 1.1, rotateZ: -10}}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.button>
          </motion.h1>
        ))}
      </motion.div>

      {/* Navbar */}
      <div className="w-full sticky top-0 z-[100] backdrop-blur-[8px] pt-4 pb-1">
        <div className="max-w-[1600px] flex flex-row justify-between mx-auto items-center px-8">
          <div className="flex flex-row items-center gap-x-2">
            <img
              src={logo}
              alt="Logo"
              className="md:h-[60px] h-[40px] w-auto"
            />
          </div>
          {/* Hamburger Button */}
          <div onClick={handleClick} className="">
            <HamburgerButton active={active} />
          </div>
        </div>
      </div>
      <div className="h-full w-full items-center justify-center flex">
        <p className="text-7xl font-black text-gray-300">Scroll To Discover</p>
      </div>
    </div>
  );
};

export default SlidingNav;
