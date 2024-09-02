import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Word = () => {
    const paragraph = 'Alot of the male problems can be solved by getting in shape and making alot of money. You still have problems.They are just smaller & you have more resources to handle them.The world is there for the taking for anyone who learns from their mistakes, Do what they say they were going to do & stick with it.What used to make a man acceptable is now considered extraordinary.The bar for winning has never been so low';
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.2", "center 0.2", "end 0.1"]
    });

    const words = paragraph.split(' ');

    return (
        <section className='flex items-center justify-center min-h-[150vh]'>
            <div ref={ref} className='flex flex-col justify-center w-8/12'>
                <p className='text-white flex flex-wrap mx-auto px-12 md:text-6xl text-3xl font-thin font-serif tracking-tight'>
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
