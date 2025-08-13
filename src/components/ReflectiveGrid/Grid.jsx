import React, { useRef } from "react";
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
