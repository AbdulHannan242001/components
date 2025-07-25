import React, { useRef } from 'react';
import clouds from '../../assets/clouds.jpg';
import { motion, useInView } from 'framer-motion';

const InViewAnimation = () => {
    // Ref for the animation container
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.5 });

    // Text animation variants
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: custom * 0.5 },
        }),
    };

    return (
        <main className="h-fit md:h-[100dvh] bg-slate-50 flex items-center">
            <div ref={containerRef} className="flex flex-col md:flex-row w-full md:min-h-screen">
                <div className="p-[10px] md:p-[30px] h-fit md:h-screen w-full md:w-6/12 flex items-center justify-center">
                    <div className='w-full md:w-10/12 h-auto relative'>
                        <motion.img
                            src={clouds}
                            alt="clouds"
                            className='w-full h-full object-cover'
                            initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
                            animate={{ boxShadow: isInView ? '0px 10px 20px rgba(0, 0, 0, 0.4)' : '0px 0px 0px rgba(0, 0, 0, 0)' }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        />
                        <motion.div
                            className='w-full h-full bg-neutral-50 absolute top-0 z-50'
                            initial={{ height: 'full' }}
                            animate={{ height: isInView ? '0px' : '400px' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        />
                    </div>
                </div>
                <div className="w-full md:w-6/12 h-full mt-auto min-h-[350px] md:min-h-screen flex flex-col justify-center items-start p-[10px] md:p-[30px] ">
                    <motion.span
                        className="text-red-500 text-sm md:text-lg font-semibold font-mono"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2}
                    >
                        In-View Animation
                    </motion.span>
                    <motion.p
                        className=" text-4xl md:text-7xl text-zinc-800 font-bold md:leading-[70px] tracking-tighter pb-[20px]"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2.5}
                    >
                        LOOK AT THIS IMAGE IT LOOKS GREAT !!! <br /> DOESN'T IT ?
                    </motion.p>
                    <motion.p
                        className="text-2xl md:text-5xl text-zinc-600 font-semibold max-w-lg tracking-tight"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={3}
                    >
                        Well, that's why I chose it in the first place.
                    </motion.p>
                </div>
            </div>
        </main>
    );
};

export default InViewAnimation;
