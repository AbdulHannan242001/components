import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const CircularButton = ({ text }) => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.button
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={{
          initial: { borderWidth: "0px" },
          hover: { borderWidth: "4px" },
          tap: { scale: 0.98 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="z-10 bg-white rounded-full border-gray-300 relative"
      >
        <motion.p
          variants={{
            initial: { color: "black" },
            hover: { color: "white" },
          }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="w-full h-16 flex items-center pl-6 pr-20 z-50 relative"
        >
          {text}
        </motion.p>

        <motion.div
          variants={{
            initial: { width: "64px", height: "98.5%" },
            hover: { width: "99%", height: "98.5%" },
          }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
          className="absolute right-[1px] top-1/2 -translate-y-1/2 bg-black text-white rounded-full flex items-center z-20"
        >
          <FaArrowRight
            size={12}
            className="absolute top-1/2 right-[24px] -translate-y-1/2"
          />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default CircularButton;
