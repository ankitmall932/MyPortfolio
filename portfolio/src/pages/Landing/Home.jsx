import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, FileText, MapPin } from 'lucide-react';

function Home () {
    return (
        <div className='section-wrap'>
            <div className='grid min-h-[70vh] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]'>
                <div>
                    <div className='eyebrow mb-8 flex items-center gap-2'><span className='h-2 w-2 rounded-full bg-[#91b49b]'></span> Available for select projects</div>
                    <h1 className='display max-w-4xl font-extrabold'>Digital work with <span className='accent'>a human edge.</span></h1>
                    <p className='muted mt-8 max-w-xl text-lg leading-8'>I am Ankit, a full-stack developer and creative editor from India. I turn thoughtful ideas into fast, reliable web products, graphics, and videos that people actually enjoy using.</p>
                    <div className='mt-9 flex flex-wrap gap-3'>
                        <NavLink to='/project' className='button-primary'>Explore my work <ArrowUpRight size={ 17 } /></NavLink>
                        <a href='https://github.com/ankitmall932' target='_blank' rel='noreferrer' className='button-ghost'>GitHub</a>
                        <a href='/Ankit-Mall-Resume.pdf' download className='button-ghost'><FileText size={ 17 } /> Resume</a>
                    </div>
                    <div className='mt-14 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-[#756f69]'><MapPin size={ 16 } className='text-[#e68b5e]' /> Gorakhpur, India <span className='mx-2 text-[#4c4844]'>/</span> Building for the web since 2022 <span className='mx-2 text-[#4c4844]'>/</span> Graphic design + video editing</div>
                </div>
                <div className='relative mx-auto w-full max-w-md'>
                    <div className='absolute -inset-4 border border-[#e68b5e]/20'></div>
                    <img src="/Ankit Mall.jpeg" alt="Ankit Mall" className='relative aspect-4/5 w-full object-cover grayscale-20' />
                    <div className='absolute -bottom-5 -left-5 bg-[#91b49b] px-4 py-3 text-sm font-bold text-[#17110e]'>Design-minded<br />developer</div>
                </div>
            </div>
            <div className='grid gap-4 border-t border-white/10 py-8 text-sm text-[#a9a29a] sm:grid-cols-4'><div><span className='text-3xl font-bold text-[#f4f0e8]'>03+</span><br />Full-stack projects</div><div><span className='text-3xl font-bold text-[#f4f0e8]'>02</span><br />Creative disciplines</div><div><span className='text-3xl font-bold text-[#f4f0e8]'>04</span><br />Core technologies</div><div><span className='text-3xl font-bold text-[#f4f0e8]'>∞</span><br />Curiosity to keep learning</div></div>
        </div>
    );
}

export default Home;