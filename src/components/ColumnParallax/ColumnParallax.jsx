import React, { useRef } from "react";
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
        className="h-[100vh] mx-auto w-fit flex flex-col md:flex-row gap-[1vw] bg-white rounded-2xl m-[30px] items-center justify-center overflow-hidden p-[1vw]"
      >
        <motion.div
          style={{ y: y1 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[100%]"
        >
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[120%]"
        >
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img6} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        {/* test */}
        <motion.div
          style={{ y: y3 }}
          className="w-full md:w-4/12 h-full relative flex flex-col gap-[1vw] md:min-w-[250px] -top-[65%]"
        >
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img7} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img8} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-[33.33vh] relative rounded-[0.5vw] overflow-hidden">
            <img src={img9} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </main>
      <div className="h-[100vh]" />
    </section>
  );
};

export default ColumnParallax;
