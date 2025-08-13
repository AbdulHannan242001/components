import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InvertedText = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divSize = 208;  // Size of the motion.div (52px * 4 = 208px)

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const newX = Math.min(Math.max(clientX - divSize / 2, 0), window.innerWidth - divSize);
            const newY = Math.min(Math.max(clientY - divSize / 2, 0), window.innerHeight - divSize);

            setPosition({ x: newX, y: newY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const divStyle = {
        borderRadius: '9999px',
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: 'absolute'
    };

    return (
        <section className='min-h-[100vh] py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8 cursor-none min-w-full flex items-center justify-center relative overflow-hidden'>
            <motion.div
                style={divStyle}
                className='h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52 bg-white absolute'
            />
            <div className='relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-white max-h-[100vh] max-w-[100vw] px-4'>
                <p className='relative z-10 mix-blend-exclusion font-mono font-thin leading-tight text-center'>
                    Some Text Goes Here
                </p>
            </div>
        </section>
    );
}

export default InvertedText;
