import React from 'react';
import { ArrowUpRight, Check, Code2, Palette, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function About () {
    return (
        <div className='section-wrap'>
            <section className='grid items-end gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_.8fr]'>
                <div>
                    <div className='eyebrow mb-7 flex items-center gap-2'><span className='h-2 w-2 bg-[#e68b5e]'></span> About Ankit</div>
                    <h1 className='display max-w-4xl font-extrabold'>Code with clarity. <span className='accent'>Design with feeling.</span></h1>
                    <p className='muted mt-8 max-w-2xl text-lg leading-8'>I am Ankit, a developer and creative editor who likes working where technology meets visual storytelling. I build useful web experiences, then give them the polish and personality that makes them memorable.</p>
                    <div className='mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#756f69]'><span className='flex items-center gap-2'><span className='h-2 w-2 rounded-full bg-[#91b49b]'></span> Gorakhpur, India</span><span>Available for select projects</span></div>
                </div>
                <div className='surface relative overflow-hidden p-6 sm:p-8'>
                    <div className='absolute right-0 top-0 h-24 w-24 border-b border-l border-[#e68b5e]/40'></div><Sparkles className='mb-16 text-[#e68b5e]' size={ 24 } />
                    <p className='eyebrow mb-4'>My point of view</p><p className='text-2xl font-bold leading-tight text-[#f4f0e8]'>Good work should feel simple to use and hard to forget.</p>
                </div>
            </section>

            <section className='py-16'>
                <div className='mb-8 flex items-end justify-between gap-5'><div><p className='eyebrow mb-3'>What I bring</p><h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Two disciplines, one workflow.</h2></div><span className='hidden text-right text-sm text-[#756f69] sm:block'>01 — 02</span></div>
                <div className='grid gap-4 lg:grid-cols-2'>
                    <article className='group border border-white/10 bg-[#1d1b19] p-7 transition-colors hover:border-[#e68b5e]/60 sm:p-9'><div className='mb-14 flex items-start justify-between'><Code2 className='text-[#e68b5e]' size={ 30 } /><span className='font-mono text-xs text-[#756f69]'>01 / BUILD</span></div><h3 className='text-2xl font-bold'>Web development</h3><p className='muted mt-4 max-w-md leading-7'>Responsive interfaces and reliable full-stack foundations, shaped around real users and clean, maintainable code.</p><div className='mt-8 flex flex-wrap gap-2'>{ [ 'React', 'Node.js', 'MongoDB', 'REST APIs' ].map(item => <span key={ item } className='border border-white/10 px-3 py-2 text-xs text-[#a9a29a]'>{ item }</span>) }</div></article>
                    <article className='group border border-[#91b49b]/30 bg-[#91b49b] p-7 text-[#17110e] transition-transform hover:-translate-y-1 sm:p-9'><div className='mb-14 flex items-start justify-between'><Palette size={ 30 } /><span className='font-mono text-xs opacity-60'>02 / SHAPE</span></div><h3 className='text-2xl font-bold'>Visual design & editing</h3><p className='mt-4 max-w-md leading-7 text-[#304137]'>Graphic design and video editing that turn an idea into a clear visual language, from the first frame to the final export.</p><div className='mt-8 flex flex-wrap gap-2'>{ [ 'Posters', 'Brand visuals', 'Short-form video', 'Motion edits' ].map(item => <span key={ item } className='border border-[#17110e]/20 px-3 py-2 text-xs'>{ item }</span>) }</div></article>
                </div>
            </section>

            <section className='border-y border-white/10 py-14'><div className='grid gap-10 lg:grid-cols-[.8fr_1.2fr]'><div><p className='eyebrow mb-3'>How I work</p><h2 className='text-3xl font-bold tracking-tight'>From rough idea to real output.</h2></div><div className='grid gap-7 sm:grid-cols-3'>{ [ [ '01', 'Listen', 'Start with the goal, audience, and the feeling the work should create.' ], [ '02', 'Make', 'Explore the structure, visuals, and details until the direction feels right.' ], [ '03', 'Refine', 'Test the experience, sharpen the finish, and ship something dependable.' ] ].map(([ number, title, description ]) => <div key={ number }><span className='font-mono text-sm text-[#e68b5e]'>{ number }</span><h3 className='mt-4 font-bold'>{ title }</h3><p className='muted mt-2 text-sm leading-6'>{ description }</p></div>) }</div></div></section>

            <section className='grid gap-8 py-16 sm:grid-cols-3'><div><p className='text-4xl font-extrabold text-[#f4f0e8]'>03+</p><p className='mt-2 text-sm text-[#756f69]'>Full-stack projects</p></div><div><p className='text-4xl font-extrabold text-[#f4f0e8]'>02</p><p className='mt-2 text-sm text-[#756f69]'>Creative disciplines</p></div><div><p className='text-4xl font-extrabold text-[#f4f0e8]'>∞</p><p className='mt-2 text-sm text-[#756f69]'>Curiosity to keep learning</p></div></section>
            <div className='flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8'><p className='flex items-center gap-2 text-sm text-[#a9a29a]'><Check size={ 16 } className='text-[#91b49b]' /> Thoughtful work, built to last.</p><NavLink to='/contact' className='button-primary'>Let's build together <ArrowUpRight size={ 17 } /></NavLink></div>
        </div>
    );
}

export default About;