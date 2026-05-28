import React from 'react';
import { NavLink } from 'react-router-dom';

function Home () {
    return (
        <div className='w-full  h-screen flex lg:flex-row flex-col-reverse  lg:gap-5 gap-3 '>
            <div className='lg:w-1/2 w-full h-full flex flex-col sm:gap-10 gap-5 justify-center items-center '>
                <div className='bg-slate-900 text-cyan-400 border border-slate-800 sm:font-bold font-semibold sm:text-4xl text-2xl px-5 py-2 rounded mt-5 shadow-[0_0_25px_rgba(34,211,238,0.15)]'>Full Stack Developer</div>
                <div className='bg-slate-900 text-cyan-400 border border-slate-800 sm:font-bold font-semibold sm:text-4xl text-2xl px-5 py-2 rounded'> Building Modern Web Applications</div>
                <div className='text-slate-300 font-semibold leading-8  sm:text-xl text-lg max-w-md'>I build fast, responsive, and modern web applications that turn ideas into real digital experiences.</div>
                <div className='flex justify-center items-center mt-8'>
                    <NavLink to='/project' className='bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 px-5 py-3 rounded-l hover:scale-105 transition-all duration-300'>Projects</NavLink>
                    <NavLink to='https://github.com/ankitmall932' className='border border-slate-700 text-slate-100 font-semibold hover:bg-slate-800 px-5 py-3 rounded-r hover:scale-105 transition-all duration-300'>GitHub</NavLink>
                </div>
            </div>
            <div className='lg:w-1/2 w-full  lg:h-full h-70 flex justify-center items-center'>
                <img src="/Ankit Mall.jpeg" alt="" className='object-cover sm:h-80 md:h-100 lg:h-120 xl:h-150 h-60 sm:w-80 md:w-100  lg:w-120 xl:w-150 w-60  rounded-full shadow-2xl lg:mt-0 mt-20' />
            </div>
        </div>
    );
}

export default Home;