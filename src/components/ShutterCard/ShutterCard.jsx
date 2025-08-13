import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedCard = ({
  heading,
  description,
  topText,
  bottomText,
  imageSrc,
}) => {
  const controls = useAnimation();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="group relative w-64 h-80 sm:w-72 sm:h-88 lg:w-80 lg:h-96 overflow-hidden rounded-xl sm:rounded-2xl shadow-md shadow-zinc-500/10 hover:shadow-zinc-500/30 transition-all duration-300"
        onMouseEnter={() => {
          controls.start({ height: 0 });
        }}
        onMouseLeave={() => {
          controls.start({ height: "50%" });
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500 to-blue-400 p-3 sm:p-4 z-0 flex flex-col justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">{heading}</h2>
          <p className="text-white text-xs sm:text-sm leading-relaxed">{description}</p>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full bg-white z-10 overflow-hidden"
          animate={controls}
          initial={{ height: "50%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-start p-3 sm:p-4 h-full">
            <p className="text-black text-xs sm:text-sm">{topText}</p>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Top Right"
                className="w-16 h-20 sm:w-20 sm:h-24 border object-cover rounded"
              />
            )}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-full bg-white z-10 overflow-hidden"
          animate={controls}
          initial={{ height: "50%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-end p-3 sm:p-4 h-full">
            <p className="text-black text-xs sm:text-sm">{bottomText}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AnimatedCard;
