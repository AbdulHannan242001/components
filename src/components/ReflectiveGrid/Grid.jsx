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
    <main className="w-full bg-gradient-to-b from-zinc-800 to-zinc-900 min-h-screen py-[60px]">
      <h2 className="text-6xl font-bold font-mono text-center uppercase text-white pb-[100px]">
        Tech Stack
      </h2>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className=" relative z-10 h-fit border-2 border-white/20 w-fit mx-auto rounded"
      >
        <div className="max-w-[1180px] p-[10px] mx-auto flex flex-1 flex-wrap gap-[4px] relative h-full w-full min-h-[50dvh] overflow-hidden rounded-md shadow-2xl shadow-white/10 bg-neutral-900">
          <motion.div
            className="absolute size-[60px] md:size-[120px] bg-gradient-to-tr from-neutral-50 to-neutral-100 rounded-full blur-3xl z-10 pointer-events-none"
            style={{ x, y }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {stackData.map((item, index) => (
            <div
              className="relative w-[144px] h-[144px] md:w-[228px] md:h-[228px] z-20 bg-white/10 rounded-lg flex items-center justify-center"
              key={index}
            >
              <div className="w-[140px] h-[140px] md:w-[221.5px] md:h-[221.5px] flex flex-col justify-center items-center gap-[10px] rounded-lg p-[10px] z-30 text-white bg-zinc-800 hover:bg-neutral-700 transition-all duration-300 ease-in-out">
                <div className="text-6xl md:text-9xl">{item.icon}</div>
                <h2 className="text-sm md:text-lg">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Grid;
