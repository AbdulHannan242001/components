import React, { useRef } from 'react'
import { motion, useSpring, useScroll, useTransform, useVelocity } from 'framer-motion'

const SkewText = () => {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const scrollVelocity = useVelocity(scrollYProgress)

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ['45deg', '-45deg']
    )
    const skewX = useSpring(skewXRaw, { stiffness: 400, mass: 3, damping: 15 })

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -17000]);
    const x = useSpring(xRaw,)

    return (
        <section ref={targetRef} className=' w-full min-h-[1000vh] relative bg-neutral-50'>
            <div className='sticky top-0 flex h-[100vh] items-center overflow-hidden' >
                <motion.p
                    style={{
                        skewX,
                        x,
                    }}
                    className="origin-bottom-left whitespace-nowrap text-7xl font-bold text-neutral-900 uppercase leading-[0.85] md:leading-[0.85]">
                    You really can solve alot of male problems by getting in shape and making alot of money. You still have problems.
                    They are just smaller & you have more resources to handle them.
                    The world is there for the taking for anyone who learns from their mistakes, Do what they say they were going to do & stick with it.
                    What used to make a man acceptable is now considered extraordinary.
                    The bar for winning has never been so low
                </motion.p>
            </div >
        </section >
    )
}

export default SkewText