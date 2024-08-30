import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Word = () => {
    const paragraph = 'This is a paragraph that is supposed to increase its words opacity based on scroll progress. Lets see how it goes!';
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.25"]
    });

    const words = paragraph.split(' ');

    return (
        <section className='flex items-center justify-center min-h-[150vh]'>
            <div ref={ref} className='w-full flex flex-col justify-center'>
                <p className='text-white flex flex-wrap mx-auto px-12 text-3xl font-thin font-serif tracking-tight'>
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + (1 / words.length);
                        return <Wo key={index} range={[start, end]} progress={scrollYProgress}>{word}</Wo>;
                    })}
                </p>
            </div>
        </section>
    );
};

export default Word;

const Wo = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    return (
        <motion.span style={{ opacity }} className='mr-2'>
            {children}
        </motion.span>
    );
};
