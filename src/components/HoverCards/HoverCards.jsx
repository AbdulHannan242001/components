import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HoverCards = ({ image, title, description, svg }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <section className='min-h-[150vh] flex justify-center items-center px-12'>
            <div className='h-full w-full flex flex-col max-w-lg relative group min-h-[40vh] cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className='h-[40vh] overflow-hidden absolute inset-0 z-[-0]'>
                    <img src={image} alt="" className='h-auto w-full absolute top-[-200px]' />
                </div>
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? 250 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', }}
                    className='bg-neutral-50 min-h-[38vh] px-4 py-6 flex flex-col transform group-hover:translate-y-4 z-10'>
                    <div className='flex flex-row items-center gap-6'>
                        <div className='w-3/12 md:w-2/12 xl:w-4/12 border-2 border-[#00a3ff] rounded-xl p-4 flex items-center justify-center'>
                            <img src={svg} alt={''} />
                        </div>
                        <h1 className='text-5xl font-semibold px-2 py-6 w-12/12 leading-none text-sky-600'>
                            {title}
                        </h1>
                    </div>
                    <div className='flex flex-row items-center gap-6'>
                        <p className='text-base font-light px-2 py-0 w-11/12 text-pretty leading-5 pt-4 text-slate-700'>
                            {description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HoverCards;
