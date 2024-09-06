import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <section className='flex justify-center items-center min-h-screen'>
            <motion.div
                className='w-full cursor-pointer py-3 px-6 flex text-nowrap justify-center items-center rounded-lg bg-zinc-950 bg-opacity-30 backdrop-blur-sm mx-auto overflow-hidden bg-gradient-to-tr from-sky-600 to-blue-600 text-white transition-all duration-300 ease-in shadow-[2px_2px_4px_rgba(0,_0,_0,_0.7),_inset_-2px_-2px_4px_rgba(255,_255,_255,_0.2)] hover:shadow-[inset_2px_2px_6px_rgba(0,_0,_0,_0.6),_inset_-1px_-1px_4px_rgba(0,0,0,_0.5)]' >Delete List Space <span className='ml-2'> <FaRegTrashAlt /> </span> </motion.div>
        </section>
    );
};

export default Button;
