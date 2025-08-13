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
        [-0.9, 0.9],
        ['30deg', '-30deg']
    )
    const skewX = useSpring(skewXRaw, { stiffness: 200, mass: 2, damping: 15 })

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2400]);
    const x = useSpring(xRaw,)

    return (
        <section ref={targetRef} className='w-full min-h-[400vh] py-[30px] sm:py-[45px] lg:py-[60px] relative bg-neutral-50'>
            <div className='sticky top-0 flex h-[100vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8'>
                <motion.p
                    style={{
                        skewX,
                        x,
                    }}
                    className="origin-bottom-left whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 uppercase leading-[0.85] md:leading-[0.85]">
                    This text leans left when going up, and leans right when going down. How cool is that :D
                </motion.p>
            </div >
        </section >
    )
}

export default SkewText