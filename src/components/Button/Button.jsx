import React from 'react';

const Button = () => {
    return (
        <section className='flex justify-center items-center min-h-screen'>
            <div className='flex justify-center items-center mt-4 bg-gradient-to-tr from-indigo-600 to-violet-600 text-white w-full md:w-80 px-4 py-2 rounded cursor-pointer transition-all ease-in-out duration-200 shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0),inset_0px_0px_0px_rgba(97,_117,_203,_0),inset_0px_0px_0px_rgba(0,_0,_0,_0)] hover:shadow-[-4px_-4px_10px_rgba(97,_117,_203,_0.6),_4px_4px_10px_rgba(0,_0,_0,_0.3),inset_4px_4px_10px_rgba(97,_117,_203,_0),inset_-4px_-4px_10px_rgba(0,_0,_0,_0)] active:shadow-[inset_4px_4px_10px_rgba(97,_117,_203,_0.6),_inset_-4px_-4px_10px_rgba(0,_0,_0,_0.3)]'>
                <button
                    type='submit'
                >
                    <span
                        className='text-lg font-bold font-inter text-primaryWhite'
                    >
                        Login
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Button;
