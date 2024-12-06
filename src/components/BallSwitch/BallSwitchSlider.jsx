import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BallSwitchSlider = () => {
    const [showHeaders, setShowHeaders] = useState(false);
    return (
        <section className='flex justify-center items-center min-h-screen'>
            <div
                onClick={() => setShowHeaders(!showHeaders)}
                className=" h-[65px] px-1 w-[140px] rounded-full bg-neutral-100 flex items-center shadow-[inset_1.5px_1.5px_5px_rgba(64,64,64,0.9)] cursor-pointer overflow-hidden"
            >
                <motion.div
                    className={`h-[55px] w-[55px] flex items-center justify-center rounded-full transition-colors duration-300 shadow-xl shadow-[#000000]`}
                    animate={{
                        x: showHeaders ? '140%' : 0,
                        backgroundImage: 'linear-gradient(to right, rgb(40, 103, 236), rgb(65, 155, 240), rgb(40, 103, 236))',
                        backgroundPosition: showHeaders ? '0% 50%' : '100% 50%',
                        backgroundSize: '300% 300%',
                        transition: {
                            type: 'spring',
                            stiffness: 40,
                            damping: 20,
                            duration: 0.5,
                        },
                    }}
                />
            </div>
        </section>
    )
}

export default BallSwitchSlider