import React from 'react'
import { motion } from 'framer-motion'

const Background = () => {
    return (
        // <motion.svg
        //     width="320"
        //     height="384"
        //     viewBox="0 0 320 384"
        //     fill="none"
        //     xmlns="http://www.w3.org/2000/svg"
        //     className='absolute inset-0 z-00'
        //     variants={{
        //         hover: { scale: 1.5 },
        //     }}
        //     transition={{
        //         duration: 1,
        //         ease: "backInOut",
        //     }}
        // >
        //     <motion.circle
        //         variants={{
        //             hover: { scaleY: 0.5, y: -40 },
        //         }}
        //         transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
        //         cx="160"
        //         cy="120"
        //         r="80"
        //         fill="#111111"
        //     />
        //     <motion.ellipse
        //         variants={{
        //             hover: { scaleY: 2.50, y: -100 },
        //         }}
        //         transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
        //         cx="160"
        //         cy="240"
        //         rx="80"
        //         ry="30.5"
        //         fill="#111111"
        //     />
        // </motion.svg>

        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='absolute inset-0 z-00'
            variants={{
                hover: { scale: 1.5 },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.path
                d="M81.0148 133.304C77.1406 129.368 77.1908 123.037 81.1269 119.162L155.96 45.5074C157.928 43.5703 161.093 43.5954 163.03 45.5635L236.686 120.396C240.56 124.332 240.509 130.664 236.573 134.538L179.558 190.656C167.75 202.278 148.755 202.128 137.133 190.32L81.0148 133.304Z"
                fill="#333333"
                variants={{
                    hover: { scale: 0.9, y: -15 },
                }}
                transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
            />

            <motion.path
                d="M81.8649 212.154C77.9908 208.218 78.041 201.887 81.9771 198.013L156.81 124.358C158.778 122.42 161.944 122.446 163.881 124.414L237.536 199.246C241.41 203.182 241.36 209.514 237.424 213.388L180.408 269.506C168.6 281.129 149.605 280.978 137.983 269.17L81.8649 212.154Z"
                fill="#333333"
                variants={{
                    hover: { scale: 0.9, y: -40 },
                }}
                transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
            />

            <motion.path d="M82.8649 263.154C78.9908 259.218 79.041 252.887 82.9771 249.013L157.81 175.358C159.778 173.42 162.944 173.446 164.881 175.414L238.536 250.246C242.41 254.182 242.36 260.514 238.424 264.388L181.408 320.506C169.6 332.129 150.605 331.978 138.983 320.17L82.8649 263.154Z"
                fill="#333333"
                variants={{
                    hover: { scale: 0.9, y: -35 },
                }}
                transition={{ delay: 0.25, duration: 1, ease: "backInOut" }}
            />

        </motion.svg>


    )
}

const SquishyCard = () => {
    return (
        <section className='min-h-[100vh] py-[60px] flex items-center justify-center px-2'>
            <motion.div
                whileHover="hover"
                variants={{
                    hover: { scale: 1.1 },
                }}
                transition={{ duration: 1, ease: "backInOut" }}
                className='relative h-96 w-fit max-w-80 shrink-0 overflow-hidden rounded-lg bg-indigo-600 p-8'>
                <div className='relative z-10 text-white '>
                    <span className='mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm text-white font-light'>Pro</span>
                    <motion.span
                        initial={{ scale: 0.85 }}
                        variants={{
                            hover: {
                                scale: 1
                            },
                        }}
                        transition={{ duration: 1, ease: "backInOut" }}
                        className='my-2 block origin-top-left py-0.5 font-semibold text-6xl text-white'
                    >
                        $99 / Month
                    </motion.span>
                    <p className='my-2 block py-0.5 text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nihil</p>
                </div>
                <button className='text-xl absolute bottom-4 right-4 left-4 z-20 rounded border-2 border-white bg-white py-2 text-center text-black uppercase backdrop-blur transition-colors hover:bg-white/30 hover:text-white font-bold font-mono' >GET IT NOW</button>
                <Background />
            </motion.div>
        </section>
    );
}

export default SquishyCard;