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
        <section className='cursor-none min-h-screen min-w-full flex items-center justify-center relative overflow-hidden'>
            <motion.div
                style={divStyle}
                className='h-52 w-52 bg-white absolute '
            />
            <div className='relative text-4xl md:text-8xl text-white max-h-[100vh] max-w-[100vw]'>
                <p className='relative z-10 mix-blend-exclusion font-mono font-thin'>
                    Some Text Goes Here
                </p>
            </div>
        </section>
    );
}

export default InvertedText;
