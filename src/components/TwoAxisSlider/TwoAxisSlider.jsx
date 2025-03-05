import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion, AnimatePresence } from 'framer-motion';

import picture2 from '../../assets/Picture2.jpg';
import picture6 from '../../assets/Picture6.jpg';
import mountain from '../../assets/mountain.jpg';
import camera from '../../assets/camera.jpg';
import earphones from '../../assets/earphones.jpg';

const TwoAxisSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const handleMouseEnter = () => swiperRef.current?.swiper?.autoplay.stop();
    const handleMouseLeave = () => swiperRef.current?.swiper?.autoplay.start();

    // Text animation variants
    const parentVariants = {
        hidden: { opacity: 0, y: 40 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3, // Delay for child animations
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: {
                staggerChildren: 0.3,
                duration: 0.3,
                ease: 'easeIn',
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
    };

    const imageArray = [
        {
            shortTitle: 'Short Title 1',
            img: picture2,
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: picture6,
            shortTitle: 'Short Title 2',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: mountain,
            shortTitle: 'Short Title 3',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: camera,
            shortTitle: 'Short Title 4',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
        {
            img: earphones,
            shortTitle: 'Short Title 5',
            heading: 'This Is Some Heading',
            description: 'This is a really long description or a really really long description. I dont know i am just typing random text.'
        },
    ];

    return (
        <section className='min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-neutral-900 gap-4'>
            {/* Text Section */}
            <main className='md:w-4/12 flex flex-col justify-center h-full px-8'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide} // Key ensures component re-renders on slide change
                        variants={parentVariants}
                        initial='hidden'
                        animate='animate'
                        exit='exit'
                    >
                        <motion.h3
                            variants={childVariants}
                            className='text-2xl font-black text-sky-600 leading-none pb-1'
                        >
                            {imageArray[currentSlide].shortTitle}
                        </motion.h3>
                        <motion.h1
                            variants={childVariants}
                            className='text-4xl font-semibold text-neutral-50 pb-3'
                        >
                            {imageArray[currentSlide].heading}
                        </motion.h1>
                        <motion.p
                            variants={childVariants}
                            className='text-lg text-gray-300'
                        >
                            {imageArray[currentSlide].description}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Swiper Section */}
            <main className='w-full md:w-8/12 h-full flex flex-col justify-center'>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                            1300: { slidesPerView: 2.5 },
                        }}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                        ref={swiperRef}
                    >
                        {imageArray.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`${index === currentSlide
                                        ? 'w-[400px] h-[530px]'
                                        : 'mt-[25px]'
                                        } w-[380px] h-[480px] object-cover rounded-md`}
                                >
                                    <img
                                        src={data.img}
                                        alt={data.shortTitle}
                                        className='w-full h-full cursor-grab hover:scale-105 transition-all ease-in rounded-md'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </section>
    );
};

export default TwoAxisSlider;
