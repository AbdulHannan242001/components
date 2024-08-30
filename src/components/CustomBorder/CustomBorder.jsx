import React from 'react'

const CustomBorder = () => {
    return (
        <section className='flex items-center justify-center min-h-screen'>
            <div className='relative flex items-center justify-center w-8/12 h-auto p-1'>
                {/* Background div with gradient and shadow */}
                <div className='absolute inset-0 z-0 p-4 rounded '>
                    <div className='absolute inset-0 rounded bg-gradient-to-br from-violet-500 to-pink-500 opacity-50 shadow-[-10px_-10px_60px_10px_rgba(140,60,100,0.5),10px_10px_60px_10px_rgba(139,92,246,0.5)]'></div>
                </div>

                {/* Foreground content */}
                <div className='relative z-10 px-6 py-10 rounded bg-slate-950 shadow-lg'>
                    <h2 className='text-xl font-semibold mb-1 text-white font-oswald'>TELECOM</h2>
                    <p className='text-slate-100 text-sm mb-2'>Turnkey solutions with design validation & built</p>
                    <ol className='text-sm list-disc mx-4'>
                        <li>MDU's</li>
                        <li>RFSI</li>
                        <li>Break Fix</li>
                        <li>Emergency Work</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default CustomBorder