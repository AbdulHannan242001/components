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
        ['45deg', '-45deg']
    )
    const skewX = useSpring(skewXRaw, { stiffness: 200, mass: 2, damping: 15 })

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3500]);
    const x = useSpring(xRaw,)

    return (
        <section ref={targetRef} className=' w-full min-h-[400vh] relative bg-neutral-50'>
            <div className='sticky top-0 flex h-[100vh] items-center overflow-hidden' >
                <motion.p
                    style={{
                        skewX,
                        x,
                    }}
                    className="origin-bottom-left whitespace-nowrap text-7xl font-bold text-neutral-900 uppercase leading-[0.85] md:leading-[0.85]">
                    This text leans left when going down, and leans right when going up. How cool is that :D
                </motion.p>
            </div >
        </section >
    )
}

export default SkewText