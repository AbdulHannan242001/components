import React from "react";
import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import image from "../../assets/camera.jpg";

const InvertedCard = () => {
  return (
    <motion.div className="h-full w-full max-w-[500px] bg-gray-900 rounded-[24px] p-3 sm:p-4 md:p-6 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="rounded-2xl overflow-hidden h-full mb-4 relative w-full min-h-[410px] sm:min-h-[550px] md:min-h-[650px]">
        <div className="absolute left-1 top-1 rounded-full bg-gray-900 z-50">
          <p className="bg-lime-500 text-gray-900 text-sm sm:text-base md:text-xl font-semibold px-3 md:px-6 py-1 rounded-full">
            2023
          </p>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 602 802"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <clipPath id="customClip">
              <path d="M548.864 1H178.556C162.506 1 149.495 14.0112 149.495 30.0612C149.495 42.5665 141.495 53.6696 129.633 57.6281L123.295 59.743C119.383 61.0486 115.285 61.7143 111.161 61.7143H50.2956C40.4036 61.7143 30.7404 64.6903 22.5623 70.2555C9.07325 79.4347 1 94.6938 1 111.01V745.932C1 761.651 7.71737 776.62 19.46 787.07C29.5431 796.043 42.5705 801 56.068 801H554.407C568.629 801 582.072 794.505 590.91 783.363C597.444 775.126 601 764.987 601 754.473V402.786V53.0167C601 37.0122 593.649 22.0139 581.061 12.1301C571.878 4.91936 560.54 1 548.864 1Z" />
            </clipPath>
          </defs>
          <motion.image
            href={image}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#customClip)"
          />
        </svg>
        <div className="flex flex-row justify-between items-center w-full absolute bottom-4 px-4 sm:px-6">
          <div className="flex flex-row gap-2 sm:gap-3">
            <p className="px-3 py-1 text-xs sm:text-sm text-white h-fit bg-neutral-500/20 backdrop-blur-sm rounded-full">
              Technology
            </p>
            <p className="px-3 py-1 text-xs sm:text-sm text-white h-fit bg-neutral-500/20 backdrop-blur-sm rounded-full">
              Electronics
            </p>
          </div>
          <button className="duration-300 ease-in-out rounded-full p-1 sm:p-2 text-white bg-gray-900 hover:bg-lime-500">
            <TbArrowUpRight size={20} className="sm:size-26" />
          </button>
        </div>
      </div>
      <div className="max-w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
          The Camera That Captures Your Moments
        </h1>
      </div>
    </motion.div>
  );
};

export default InvertedCard;
