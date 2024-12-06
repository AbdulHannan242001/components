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
        <main className="min-h-[100vh] bg-slate-50 flex items-center">
            <div ref={containerRef} className="flex flex-row w-full min-h-screen">
                <div className="p-30px h-screen w-6/12 flex items-center justify-center">
                    <div className='w-10/12 h-[400px] relative'>
                        <img src={clouds} alt="clouds" className='w-full h-full object-cover shadow-xl shadow-slate-400' />
                        <motion.div
                            className='w-full h-[400px] bg-neutral-50 absolute top-0 z-50'
                            initial={{ height: '400px' }}
                            animate={{ height: isInView ? '0px' : '400px' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        />
                    </div>
                </div>
                <div className="bg-slate-100 w-6/12 h-screen flex flex-col justify-center items-start p-[30px] ">
                    <motion.span
                        className="text-red-500 text-lg font-semibold font-mono"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2}
                    >
                        In-View Animation
                    </motion.span>
                    <motion.p
                        className="text-7xl text-zinc-800 font-bold leading-[70px] tracking-tighter pb-[20px]"
                        variants={textVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        custom={2.5}
                    >
                        LOOK AT THIS IMAGE IT LOOKS GREAT !!! <br /> DOESN'T IT ?
                    </motion.p>
                    <motion.p
                        className="text-5xl text-zinc-600 font-semibold max-w-lg tracking-tight"
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