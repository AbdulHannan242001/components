import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
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
  const target = useRef();

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end center"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, windowHeight * 0.2]);

  return (
    <section>
      <div className="h-[100vh]" />
      <main
        ref={target}
        className="h-[100vh] mx-auto max-w-[1200px] flex flex-row gap-2 bg-neutral-500 rounded-2xl m-[30px] items-center justify-center overflow-hidden p-[10px]"
      >
        <div style={{ y: y1 }} className="flex flex-col w-4/12 gap-2">
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img1} className="object-cover items-center" alt="" />
          </div>
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img2} className="object-cover items-center" alt="" />
          </div>
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img3} className="object-cover items-center" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-4/12 gap-2">
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img4} className="object-cover items-center" alt="" />
          </div>
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img5} className="object-cover items-center" alt="" />
          </div>
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img6} className="object-cover items-center" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-4/12 gap-2">
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img7} className="object-cover items-center" alt="" />
          </div>
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img8} className="object-cover items-center" alt="" />
          </div>
          <div className="relative w-[400px] h-[600px]  rounded-lg overflow-hidden">
            <img src={img9} className="object-cover items-center" alt="" />
          </div>
        </div>
      </main>
      <div className="h-[100vh]" />
    </section>
  );
};

export default ColumnParallax;
