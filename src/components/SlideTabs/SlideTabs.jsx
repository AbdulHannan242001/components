"use client";

import React, { useRef, useState } from "react";
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
