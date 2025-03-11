import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const Button = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <motion.div
       whileHover={{scale: 1.05}}
       whileTap={{scale: 1}}
       transition={{duration: 0.1}}
       className="w-fit cursor-pointer py-3 px-6 flex text-nowrap justify-center items-center rounded-lg bg-zinc-950 bg-opacity-30 backdrop-blur-sm mx-auto overflow-hidden bg-gradient-to-tr from-sky-600 to-blue-600 text-white shadow-[2px_2px_4px_rgba(0,_0,_0,_0.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_0.2)] active:shadow-[inset_2px_2px_6px_rgba(0,_0,_0,_0.6),_inset_-1px_-1px_4px_rgba(0,0,0,_0.5)]">
        Press Me{" "}
        <span className="ml-2">
          {" "}
          <TbArrowRight />{" "}
        </span>{" "}
      </motion.div>
    </section>
  );
};

export default Button;
