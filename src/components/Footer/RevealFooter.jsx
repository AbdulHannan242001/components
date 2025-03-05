import React from "react";
import { motion } from "framer-motion";

const RevealFooter = () => {
  return (
    <div
      className="relative h-screen md:h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+80vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-80vh)] h-[80vh]">
          <div className="bg-white h-screen md:h-[80vh] text-gray-800 flex flex-col justify-center px-[30px]">
            <div className="flex flex-col md:flex-row gap-4 justify-between py-12 border-b-2">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div>
                  <p className="text-lg font-bold font-mono uppercase">
                    Tech Stack
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="font-mono uppercase tracking-tight">
                      React
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Tailwind
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Framer Motion
                    </li>
                    <li className="font-mono uppercase tracking-tight">Vite</li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-bold font-mono uppercase">
                    Assets
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="font-mono uppercase tracking-tight">
                      UnSplash
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Pexels
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      React Icons
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Hover.Dev
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-lg font-bold font-mono uppercase">Ideas</p>
                  <ul className="list-disc ml-4">
                    <li className="font-mono uppercase tracking-tight">
                      Tom Is Loading (YouTube)
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      Olivier Larose (YouTube)
                    </li>
                    <li className="font-mono uppercase tracking-tight">
                      EndLess Scrolling through Awwwards.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pr-12">
                <p className="text-lg font-bold font-mono uppercase">Contact</p>
                <ul className="list-disc ml-4">
                  <li className="font-mono uppercase tracking-tight">
                    LinkedIn
                  </li>
                  <li className="font-mono uppercase tracking-tight">GitHub</li>
                  <li className="font-mono uppercase tracking-tight">Email</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="text-7xl font-bold"
              >
                ABDUL HANNAN SIDDIQUI
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealFooter;
