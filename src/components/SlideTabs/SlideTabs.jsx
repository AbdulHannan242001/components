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
        <div className="mt-8 text-white flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-6/12 flex flex-col gap-4 px-[20px]">
            <h1 className="text-3xl font-sans font-bold">Roof Installation</h1>
            <p className="font-sans text-lg">
              Our roof installation Pictures deliver unmatched durability and
              style. Using premium materials like asphalt, metal, or tile, we
              build roofs that protect your home for decades.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-xl text-secondary">Includes:</p>
              <ul className="space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Asphalt Shingle Roofing</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Metal Roof Installation</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Tile and Slate Options</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Weatherproof Underlayment</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-h-[300px] overflow-hidden w-fit px-[20px]">
            <img
              src={Picture2}
              alt="Roof Installation"
              width={600}
              height={400}
              className="object-cover items-center"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Roof Cornering",
      content: (
        <div className="mt-8 text-white flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-6/12 flex flex-col gap-4 px-[20px]">
            <h1 className="text-3xl font-sans font-bold">Roof Cornering</h1>
            <p className="font-sans text-lg">
              Precision roof cornering enhances your home’s aesthetic and
              structural integrity. We specialize in seamless corner designs
              that prevent leaks and boost curb appeal.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-xl text-secondary">Includes:</p>
              <ul className="space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Residential Roofing</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Damage Repair</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Commercial Roofing</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Window Installation</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-h-[300px] overflow-hidden w-fit px-[20px]">
            <img
              src={Picture5}
              alt="Roof Cornering"
              width={600}
              height={400}
              className="object-cover items-center"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Roof Frame Design",
      content: (
        <div className="mt-8 text-white flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-6/12 flex flex-col gap-4 px-[20px]">
            <h1 className="text-3xl font-sans font-bold">Roof Frame Design</h1>
            <p className="font-sans text-lg">
              Our custom roof frame designs blend strength with architectural
              vision. We engineer frameworks that ensure stability and elevate
              your home’s unique style.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-xl text-secondary">Includes:</p>
              <ul className="space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Truss Design</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Rafter Systems</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Load-Bearing Analysis</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Aesthetic Customization</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-h-[300px] overflow-hidden w-fit px-[20px]">
            <img
              src={Picture1}
              alt="Roof Frame Design"
              width={600}
              height={400}
              className="object-cover items-center"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Roof Layer Fixing",
      content: (
        <div className="mt-8 text-white flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-6/12 flex flex-col gap-4 px-[20px]">
            <h1 className="text-3xl font-sans font-bold">Roof Layer Fixing</h1>
            <p className="font-sans text-lg">
              We restore your roof’s integrity with expert layer fixing. Our
              team repairs and reinforces layers to ensure weather resistance
              and extended lifespan.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-xl text-secondary">Includes:</p>
              <ul className="space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Underlayment Repair</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Flashing Replacement</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Shingle Realignment</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Leak Sealing</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-h-[300px] overflow-hidden w-fit px-[20px]">
            <img
              src={Picture3}
              alt="Roof Layer Fixing"
              width={600}
              height={400}
              className="object-cover items-center"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Roof Sliding Corner",
      content: (
        <div className="mt-8 text-white flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-6/12 flex flex-col gap-4 px-[20px]">
            <h1 className="text-3xl font-sans font-bold">
              Roof Sliding Corner
            </h1>
            <p className="font-sans text-lg">
              Innovative sliding corner solutions adapt to your roof’s needs. We
              install adjustable systems that maintain durability through
              seasonal shifts and extreme weather.
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-xl text-secondary">Includes:</p>
              <ul className="space-y-2">
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Adjustable Corner Tracks</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Thermal Expansion Support</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Weatherproof Seals</h2>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <FaCheckCircle className="text-secondary" />
                  <h2 className="text-sm">Custom Corner Designs</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-h-[300px] overflow-hidden w-fit px-[20px]">
            <img
              src={Picture4}
              alt="Roof Sliding Corner"
              width={600}
              height={400}
              className="object-cover items-center"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-8 px-2 ">
      <div className="bg-white rounded md:rounded-full w-fit mx-auto px-2 py-1 ">
        <ul className="relative flex flex-col md:flex-row">
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
        "relative z-10 block cursor-pointer uppercase md:px-5 py-1.5 text-base font-light rounded-full mix-blend-exclusion"
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
      className="absolute z-0 bg-gradient-to-bl from-neutral-800 to-neutral-950 md:h-full rounded-full"
    />
  );
};

export default SlideTabsExample;
