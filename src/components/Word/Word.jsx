import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Word = () => {
    const paragraph = 'Alot of the male problems can be solved by getting in shape and making alot of money. You still have problems. They are just smaller & you have more resources to handle them. The world is there for the taking for anyone who learns from their mistakes, Do what they say they were going to do & stick with it. What used to make a man acceptable is now considered extraordinary. The bar for winning has never been so low';
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end center"]
    });

    const words = paragraph.split(' ');

    return (
        <section ref={ref} className='relative min-h-[200vh] py-[60px]'>
            <motion.div className='sticky top-10 flex justify-center'>
                <p className='text-white flex flex-wrap mx-auto px-4 md:px-12 md:text-4xl text-3xl uppercase'>
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + (1 / words.length);
                        return <Wo key={index} range={[start, end]} progress={scrollYProgress}>{word}</Wo>;
                    })}
                </p>
            </motion.div>
        </section >
    );
};

export default Word;

const Wo = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <motion.span style={{ opacity }} className='mr-4 leading-tight'>
            {children}
        </motion.span>
    );
};
