import React, { useState } from 'react'
import watch from '../../assets/watch.jpg'
import earphones from '../../assets/earphones.jpg'
import mouse from '../../assets/mouse.jpg'

const ColorCards = () => {
    const [isActive, setIsActive] = useState(0)

    return (
        <section className='min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6'>
            <div className='w-full bg-neutral-100 rounded p-2 sm:p-4 flex flex-col lg:flex-row overflow-hidden'>
                <div
                    onClick={() => setIsActive(0)}
                    className={`${isActive == 0 ? 'lg:w-4/6 w-full lg:h-auto min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'lg:w-3/6 w-full lg:h-auto h-[35vh] sm:h-[40vh] bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer flex flex-col`}
                >
                    <div className='lg:h-3/5 h-auto p-3 sm:p-4'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl px-2 py-2 sm:py-3 lg:py-6 font-serif w-full lg:w-8/12 leading-tight'>This Is Some Heading</h1>
                        <p className='text-sm sm:text-base lg:text-lg px-2 py-0 font-serif w-full lg:w-11/12 text-pretty leading-relaxed'>This is some text or maybe some description. Gotta keep writing; in real world cases, descriptions are pretty long</p>
                        <button className='mx-2 my-2 sm:my-3 border-2 text-xs sm:text-sm lg:text-base font-thin font-mono py-1.5 sm:py-2 w-[120px] sm:w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                    <div className='flex flex-col h-auto lg:h-1/2 justify-end items-center lg:items-end'>
                        <img src={watch} alt="" className='h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[200px] mt-2 sm:mt-4 lg:mt-0' />
                    </div>
                </div>
                <div
                    onClick={() => setIsActive(1)}
                    className={`${isActive == 1 ? 'lg:w-4/6 w-full lg:h-auto min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'lg:w-3/6 w-full lg:h-auto h-[35vh] sm:h-[40vh] bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer flex flex-col`}
                >
                    <div className='flex flex-col h-auto lg:h-1/2 justify-start items-center lg:items-end p-3 sm:p-4'>
                        <img src={earphones} alt="" className='h-[80px] sm:h-[100px] lg:h-[120px] xl:h-[200px] mt-0 lg:mt-0' />
                    </div>
                    <div className='lg:h-3/5 h-auto p-3 sm:p-4'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl px-2 py-2 sm:py-3 lg:py-6 font-serif w-full leading-tight'>This Is Another Heading</h1>
                        <button className='mx-2 my-2 sm:my-3 border-2 text-xs sm:text-sm lg:text-base font-thin font-mono py-1.5 sm:py-2 w-[120px] sm:w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                </div>
                <div
                    onClick={() => setIsActive(2)}
                    className={`${isActive == 2 ? 'lg:w-4/6 w-full lg:h-auto min-h-[50vh] sm:min-h-[60vh] bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'lg:w-3/6 w-full lg:h-auto h-[35vh] sm:h-[40vh] bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer flex flex-col`}
                >
                    <div className='lg:h-3/5 h-auto p-3 sm:p-4'>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl px-2 py-2 sm:py-3 lg:py-6 font-serif w-full leading-tight'>This Is Some Heading</h1>
                        <p className='text-sm sm:text-base lg:text-lg px-2 py-0 font-serif w-full lg:w-11/12 text-pretty leading-relaxed'>This is some text or maybe some description. Gotta keep writing; in real world cases, descriptions are pretty long</p>
                        <button className='mx-2 my-2 sm:my-3 border-2 text-xs sm:text-sm lg:text-base font-thin font-mono py-1.5 sm:py-2 w-[120px] sm:w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                    <div className='flex flex-col h-auto lg:h-1/2 justify-end items-center p-3 sm:p-4'>
                        <img src={mouse} alt="" className='h-[100px] sm:h-[120px] lg:h-[150px] xl:h-[200px] mt-2 sm:mt-4 lg:mt-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ColorCards
