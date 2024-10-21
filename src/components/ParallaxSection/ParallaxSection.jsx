import React, { useRef } from 'react'
import clouds from '../../assets/clouds.jpg'
import island from '../../assets/island.jpg'
import mountain from '../../assets/mountain.jpg'
import { useScroll, motion, useTransform } from 'framer-motion';

const ParallaxSection = () => {
    const word = 'Parallax Section'
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50])
    const md = useTransform(scrollYProgress, [0, 1], [0, -100])
    const lg = useTransform(scrollYProgress, [0, 1], [0, -150])
    return (
        <main className='min-h-[150vh]'>
            <section ref={ref} className="min-h-screen flex items-center">
                <div className='p-8 w-full'>
                    <motion.h1 style={{ y: sm }} className='text-neutral-200 text-4xl md:text-6xl font-serif font-semibold'>Some Heading Goes Here</motion.h1>
                    <p className='text-2xl md:text-3xl relative'>
                        {
                            word.split("").map((letter, index) => {
                                const rd = Math.floor(Math.random() * -25) - 25;
                                const yValue = useTransform(scrollYProgress, [0, 1], [0, rd])
                                return <motion.span className='text-neutral-100 relative uppercase font-semibold' key={index} style={{ top: yValue }}>{letter}</motion.span>
                            })
                        }
                    </p>
                    <div className='relative h-[400px] md:w-6/12'>
                        <img className='absolute inset-0 h-full object-cover object-center' src={island} alt="" />
                        <motion.img style={{ y: md }} className='absolute left-[-20px] bottom-[-20px] md:w-[150px] w-auto h-[150px] md:h-[200px] object-cover object-center' src={mountain} alt="" />
                        <motion.img style={{ y: lg }} className='absolute right-[-20px] bottom-[-100px] md:w-[300px] w-auto h-[150px] md:h-[250px] object-cover object-center' src={clouds} alt="" />
                    </div>
                </div>
            </section >
        </main>
    )
}

export default ParallaxSection