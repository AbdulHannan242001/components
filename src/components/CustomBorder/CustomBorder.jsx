import React from 'react'

const CustomBorder = () => {
    return (
        <section className='flex items-center justify-center min-h-[100vh] py-[30px] sm:py-[45px] lg:py-[60px] px-4 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto p-1'>
                {/* Background div with gradient and shadow */}
                <div className='absolute inset-0 z-0 p-2 sm:p-3 lg:p-4 rounded'>
                    <div className='absolute inset-0 rounded bg-gradient-to-br from-violet-500 to-pink-500 opacity-50 shadow-[-10px_-10px_60px_10px_rgba(140,60,100,0.5),10px_10px_60px_10px_rgba(139,92,246,0.5)]'></div>
                </div>

                {/* Foreground content */}
                <div className='relative z-10 px-4 sm:px-6 py-6 sm:py-8 lg:py-10 rounded bg-gradient-to-b from-slate-900 to-slate-950 shadow-lg w-full'>
                    <h2 className='text-xl sm:text-2xl font-semibold mb-1 text-white font-oswald leading-tight'>List Of Stuff</h2>
                    <p className='text-slate-100 text-sm sm:text-base lg:text-lg mb-2 leading-relaxed'>Some description thats not too long</p>
                    <ol className='text-sm sm:text-base list-disc mx-4 space-y-1'>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default CustomBorder