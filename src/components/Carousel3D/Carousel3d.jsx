import React from 'react';
import { motion } from 'framer-motion';

const Carousel3d = ({
    images = [],
    radius = 500,
    duration = 20,
    width = 200,
    height = 250,
}) => {
    const totalCards = images.length;

    return (
        <section className='w-[100%] h-[100vh] text-center overflow-hidden relative flex items-center justify-center'>
            <motion.div
                className="relative"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateX(-15deg)`,
                }}
                initial={{ rotateY: 0, rotateX: -12 }}
                animate={{ rotateY: 360, rotateX: -12 }}
                transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
            >
                {images.map((img, index) => {
                    const angle = (360 / totalCards) * index;

                    return (
                        <motion.div
                            key={index}
                            className='absolute'
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <img src={img} alt={`Slide ${index + 1}`} className='w-full h-full object-cover rounded-lg shadow-lg' />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Carousel3d;
