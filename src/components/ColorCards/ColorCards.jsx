import React, { useState } from 'react'
import watch from '../../assets/watch.jpg'
import earphones from '../../assets/earphones.jpg'
import mouse from '../../assets/mouse.jpg'

const ColorCards = () => {
    const [isActive, setIsActive] = useState(0)

    return (
        <section className='min-h-screen flex items-center justify-center'>
            <div className='w-12/12 bg-neutral-100 rounded p-4 flex flex-row overflow-hidden'>
                <div onClick={() => setIsActive(0)} className={`${isActive == 0 ? 'w-4/6 bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'w-3/6 bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer h-[80vh] flex-col flex`}>
                    <div className='h-3/5'>
                        <h1 className='text-5xl px-2 py-6 font-serif w-8/12 leading-none'>This Is Some Heading</h1>
                        <p className='text-lg px-2 py-0 font-serif w-11/12 text-pretty leading-5'>This is some text or maybe some description.Gotta keep writing in real world cases descriptions are pretty long</p>
                        <button className='mx-2 my-3 border-2 text-base font-thin font-mono py-2 w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                    <div className='flex flex-col h-2/5 justify-end items-end'>
                        <img src={watch} alt="" className='pr-6 h-[200px]' />
                    </div>
                </div>
                <div onClick={() => setIsActive(1)} className={`${isActive == 1 ? 'w-4/6 bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'w-3/6 bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer border h-[80vh]`}>
                    <div className='flex flex-col h-2/5 justify-start items-end'>
                        <img src={earphones} alt="" className=' h-[200px]' />
                    </div>
                    <div className='h-3/5'>
                        <h1 className='text-5xl px-2 py-6 font-serif w-12/12 leading-none'>This Is Another Heading</h1>
                        <button className='mx-2 my-3 border-2 text-base font-thin font-mono py-2 w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                </div>
                <div onClick={() => setIsActive(2)} className={`${isActive == 2 ? 'w-4/6 bg-gradient-to-t from-[#ff630b] to-[#f54701]' : 'w-3/6 bg-[#f2f2f2] text-black'} transition-all ease-in-out duration-300 cursor-pointer border h-[80vh]`}>
                    <div className='h-3/5'>
                        <h1 className='text-5xl px-2 py-6 font-serif w-12/12 leading-none'>This Is Some Heading</h1>
                        <p className='text-lg px-2 py-0 font-serif w-11/12 text-pretty leading-5'>This is some text or maybe some description.Gotta keep writing in real world cases descriptions are pretty long</p>
                        <button className='mx-2 my-3 border-2 text-base font-thin font-mono py-2 w-[150px] hover:bg-white hover:text-slate-900 transition-colors ease-linear duration-300'>
                            I AM A BUTTON
                        </button>
                    </div>
                    <div className='flex flex-col h-2/5 justify-end items-center'>
                        <img src={mouse} alt="" className='h-[200px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ColorCards