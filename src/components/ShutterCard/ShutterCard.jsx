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
    <main className="min-h-screen flex items-center justify-center">
      <div
        className="group relative w-80 h-96 overflow-hidden rounded-2xl shadow-md shadow-zinc-500/10 hover:shadow-zinc-500/30 transition-all duration-300"
        onMouseEnter={() => {
          controls.start({ height: 0 });
        }}
        onMouseLeave={() => {
          controls.start({ height: "50%" });
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500 to-pink-400 p-4 z-0 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-white">{heading}</h2>
          <p className="text-white text-sm">{description}</p>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full bg-white z-10 overflow-hidden"
          animate={controls}
          initial={{ height: "50%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex justify-between items-start p-4 h-full">
            <p className="text-black">{topText}</p>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Top Right"
                className="w-20 h-24 border object-cover"
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
          <div className="flex items-end p-4 h-full">
            <p className="text-black">{bottomText}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AnimatedCard;
