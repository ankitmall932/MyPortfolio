import React from 'react';
import { Rocket, Star, Brain, Book } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function About () {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center gap-15 py-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5'>
                <div>
                    <div className="card w-full lg:h-80 h-fit">
                        <div className="card2 w-full h-full flex flex-col gap-5 justify-center items-center ">
                            <h1 className='text-cyan-400 text-2xl font-semibold '>WHO I AM</h1>
                            <p className='text-white/70 font-semibold  lg:mx-10 mx-0'>I’m a developer who enjoys building fast, intuitive web applications with clean design and reliable engineering. My focus is creating practical digital experiences that are scalable, performant, and genuinely useful.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full lg:h-80 h-fit">
                        <div className="card2 w-full h-full flex flex-col gap-5 justify-center items-center ">
                            <h1 className='text-cyan-400 text-2xl font-semibold'>MY JOURNEY</h1>
                            <p className='text-white/70 font-semibold lg:mx-10 mx-0'>What started as curiosity about web development quickly became a passion for building digital experiences. Through continuous learning and hands-on projects,  I’ve grown into a developer focused on creating practical, scalable, and modern web applications.</p>
                        </div>
                    </div>
                </div><div>
                    <div className="card w-full lg:h-80 h-fit ">
                        <div className="card2 w-full h-full flex flex-col gap-5 justify-center items-center ">
                            <h1 className='text-cyan-400 text-2xl font-semibold'>DEVELOPMENT PHILOSOPHY</h1>
                            <p className='text-white/70 font-semibold  lg:mx-10 mx-0'>For me, development is not just about writing code—it’s about solving problems thoughtfully. I focus on building products with clean architecture, scalable systems, and user experiences that feel effortless and reliable.</p>
                        </div>
                    </div>
                </div><div>
                    <div className="card w-full lg:h-80 h-fit">
                        <div className="card2 w-full h-full flex flex-col gap-5 justify-center items-center ">
                            <h1 className='text-cyan-400 text-2xl font-semibold '>PERSONAL NOTE</h1>
                            <p className='text-white/70 font-semibold lg:mx-10 mx-0'>For me, development is more than just writing code—it’s a mindset of curiosity, creativity, and continuous learning. I genuinely enjoy building things, experimenting with new ideas, and pushing myself to grow with every project.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-15'>
                <div className='flex justify-center items-center w-full h-40 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1 transition-all rounded-2xl flex-col gap-5 duration-200'>
                    <div className='flex gap-5 text-cyan-400 '><Rocket size={ 30 } /><h1 className='text-2xl font-bold'>Project Builds</h1></div>
                    <div className='font-semibold text-white/70'>3+ Full-Stack Projects</div>
                </div>
                <div className='flex justify-center items-center w-full h-40 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1 transition-all rounded-2xl flex-col gap-5 duration-200'>
                    <div className='flex gap-5 text-cyan-400 '><Star size={ 30 } /><h1 className='text-2xl font-bold'>Tech Stack</h1></div>
                    <div className='font-semibold text-white/70'>React, Node.js, MongoDB</div>
                </div>
                <div className='flex justify-center items-center w-full h-40 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1 transition-all rounded-2xl flex-col gap-5 duration-200'>
                    <div className='flex gap-5 text-cyan-400 '><Brain size={ 30 } /><h1 className='text-2xl font-bold'>Problem Solving</h1></div>
                    <div className='font-semibold text-white/70'>Building Scalable Solutions</div>
                </div>
                <div className='flex justify-center items-center w-full h-40 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1 transition-all rounded-2xl flex-col gap-5 duration-200'>
                    <div className='flex gap-5 text-cyan-400 '>< Book size={ 30 } /><h1 className='text-2xl font-bold'>Learning Mindset</h1></div>
                    <div className='font-semibold text-white/70'>Always Exploring Modern Tech</div>
                </div>
            </div>
            <NavLink to='/contact' className='px-8 py-3 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all rounded-xl flex-col gap-5 duration-200 hover:scale-105 active:scale-95'>Let's Build Together</NavLink>
        </div>
    );
}

export default About;