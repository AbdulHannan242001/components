import React from 'react'

const Button = () => {
    return (
        <div><div className='flex justify-center items-center mt-4 bg-gradient-to-tr from-indigo-600 to-violet-600 text-white w-full md:w-80 px-4 py-2 rounded cursor-pointer transition-all ease-in-out duration-200 shadow-[-2px_-2px_5px_rgba(97,_117,_203,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_2px_2px_5px_rgba(97,_117,_203,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:shadow-[1px_1px_5px_rgba(97,_117,_203,_0.6),_2px_2px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(97,_117,_203,_1),inset_-3px_-3px_4px_rgba(0,_0,_0,_0.3)]'>
            <button
                disabled={loading}
                type='submit'
            >
                {
                    !loading ?
                        <span
                            className='text-lg font-bold font-inter text-primaryWhite'
                        >
                            Login
                        </span>
                        :
                        // <img
                        //     src={loadingGif}
                        //     width={33}
                        //     height={33}
                        // />
                        null
                }
            </button>
        </div></div>
    )
}

export default Button