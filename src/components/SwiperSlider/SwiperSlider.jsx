import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import picture2 from '../../assets/Picture2.jpg'
import picture6 from '../../assets/Picture6.jpg'
import mountain from '../../assets/mountain.jpg'
import camera from '../../assets/camera.jpg'
import earphones from '../../assets/earphones.jpg'


const SwiperSlider = () => {
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const imageArray = [
        {
            img: picture2,
        },
        {
            img: picture6,
        },
        {
            img: mountain,
        },
        {
            img: camera,
        },
        {
            img: earphones,
        },
    ]

    return (
        <main className='min-h-[100vh] py-[60px] flex flex-col justify-center'>
            <section className='px-8'>
                <div className='flex flex-row items-center justify-between mb-6'>
                    <h2 className='text-5xl font-semibold font-mono'>Title Goes Here</h2>
                    <div className='flex flex-row gap-x-6'>
                        <span onClick={handlePrev} className='font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer'>
                            <MdArrowBack />
                        </span>
                        <span onClick={handleNext} className='font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer'>
                            <MdArrowForward />
                        </span>
                    </div>
                </div>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        ref={swiperRef}
                    >
                        {(imageArray.length > 0) && imageArray.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full h-full relative cursor-grab'>
                                    <img src={data.img} alt={index} className='w-[350px] h-[450px] object-cover' />
                                    <div className='flex flex-col justify-end  absolute top-0 left-0 w-[350px] h-[450px] bg-gradient-to-t from-black/70 from-[20%] to-[60%] to-transparent'>
                                        <div className='px-2 py-4 space-y-2'>
                                            <h2 className='text-3xl font-semibold max-w-[260px]'>Some Heading Goes Here</h2>
                                            <p className='pr-10'>A not so very long description goes here. It can be a bit long but not too long</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}

export default SwiperSlider;

