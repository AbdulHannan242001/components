import React, { useRef } from 'react'
import Picture1 from '../../assets/Picture1.jpg'
import Picture2 from '../../assets/Picture2.jpg'
import Picture3 from '../../assets/Picture3.jpg'
import Picture4 from '../../assets/Picture4.jpg'
import Picture5 from '../../assets/Picture5.jpg'
import Picture6 from '../../assets/Picture6.jpg'
import Picture7 from '../../assets/Picture7.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'

const ImageParallax = () => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    const scale4times = useTransform(scrollYProgress, [0, 0.8], [1, 4])
    const scale6times = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8times = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale7times = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale9times = useTransform(scrollYProgress, [0, 1], [1, 9])
    const scale10times = useTransform(scrollYProgress, [0, 1], [1, 5])

    const pictureArray = [
        {
            src: Picture1,
            credits: 'Photo by Pixabay',
            topValue: '0%',
            leftValue: '0%',
            scaleValue: scale4times,
            widthPercentage: '25vw',
            heightPercentage: '25vh'
        },
        {
            src: Picture2,
            credits: 'Photo by Sebastian Palomino',
            topValue: '30%',
            leftValue: '-25%',
            scaleValue: scale9times,
            widthPercentage: '30vw',
            heightPercentage: '30vh'
        },
        {
            src: Picture3,
            credits: 'Photo by Pedro Figueras',
            topValue: '29%',
            leftValue: '4%',
            scaleValue: scale6times,
            widthPercentage: '25vw',
            heightPercentage: '28vh'
        },
        {
            src: Picture4,
            credits: 'Photo by Jaime Reimer',
            topValue: '-32%',
            leftValue: '30%',
            scaleValue: scale8times,
            widthPercentage: '25vw',
            heightPercentage: '35vh'
        },
        {
            src: Picture5,
            credits: 'Photo by Irina Iriser',
            topValue: '-30%',
            leftValue: '1.5%',
            scaleValue: scale6times,
            widthPercentage: '28.5vw',
            heightPercentage: '30vh'
        },
        {
            src: Picture6,
            credits: 'Photo by Ricky Esquivel',
            topValue: '13%',
            leftValue: '28%',
            scaleValue: scale10times,
            widthPercentage: '20vw',
            heightPercentage: '50vh'
        },
        {
            src: Picture7,
            credits: 'Photo by Pixabay',
            topValue: '-12%',
            leftValue: '-27%',
            scaleValue: scale7times,
            widthPercentage: '25vw',
            heightPercentage: '50vh'
        },
    ];
    return (
        <section className='flex flex-col justify-center items-center min-h-screen py-[10vh] space-y-[10vh] overflow-clip'>
            <h1 className='text-neutral-300 text-4xl md:text-9xl max-w-5xl md:mr-auto md:mx-24 font-mono md:leading-[6.8rem] tracking-[0.02rem]'>HELLO <br /> SOME SHIT <br /> IS  ABOUT TO <br /> HAPPEN BELOW</h1>
            <div ref={containerRef} className='h-[300vh] relative w-full'>
                <div className='w-full h-[100vh] sticky top-0 overflow-clip'>
                    {
                        pictureArray.map(({ src, credits, topValue, leftValue, scaleValue, heightPercentage, widthPercentage }, index) => {
                            return (
                                <motion.div key={index}
                                    style={{
                                        scale: scaleValue,
                                    }}
                                    className={`w-[100%] h-[100%] absolute flex items-center justify-center`}>
                                    <div
                                        className={`relative`}
                                        style={{
                                            width: widthPercentage,
                                            height: heightPercentage,
                                            top: topValue,
                                            left: leftValue,
                                        }}
                                    >
                                        <img src={src} alt="" className='w-full h-full object-cover' />
                                        <p className='absolute bottom-0 left-0 size-auto text-xs text-neutral-100/50'>{credits}</p>
                                    </div>
                                </motion.div>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <h1 className='text-neutral-300 text-4xl md:text-9xl max-w-5xl md:mr-auto md:mx-24 font-mono md:leading-[6.8rem] tracking-[0.02rem]'>REST <br /> OF THE <br /> SITE GOES <br /> THERE ? MAYBE!</h1>
        </section>
    )
}

export default ImageParallax