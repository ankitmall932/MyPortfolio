import React from 'react';
import { ArrowDownRight, ArrowUpRight, Code2, Sparkles } from 'lucide-react';

const projects = [
    {
        title: 'SidBites',
        type: 'Full-stack product',
        description: 'A full-stack food ordering platform built with a modern Next.js stack.',
        image: '/SidBites.png',
        tags: ['Next.js', 'Better Auth', 'PostgreSQL', 'Prisma'],
        live: 'https://sid-bites.vercel.app',
        color: 'bg-[#d47c60]'
    },
    {
        title: 'TaskHub',
        type: 'Task management app',
        description: 'A task management app built to help organize work and stay on top of priorities.',
        image: '/Landing.png',
        tags: ['Next.js', 'Task management', 'Productivity'],
        live: 'https://task-hub-lyart-psi.vercel.app',
        color: 'bg-[#a3b47a]'
    },
    {
        title: 'Acyuta Digital Studio',
        type: 'TypeScript frontend product',
        description: 'A polished TypeScript digital studio website focused on clear visual storytelling, responsive layouts, and a refined frontend experience.',
        image: '/acyuta-digital-studio.png',
        tags: ['TypeScript', 'React', 'Tailwind CSS'],
        live: 'https://acyutadigitalstudio.website',
        color: 'bg-[#a49bbd]'
    },
    {
        title: 'Siddhi Hotels',
        type: 'Full-stack product',
        description: 'A complete hotel booking experience with authentication, search, payments, and role-based dashboards.',
        image: '/landing page.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        live: 'https://hotel-booking-site-nine.vercel.app/',
        code: 'https://github.com/ankitmall932/Hotel-Booking-Site',
        color: 'bg-[#ffb93d]'
    },
    {
        title: 'Sid Notes',
        type: 'Full-stack product',
        description: 'A full-stack notes application built as my first TypeScript project, with a focused interface for creating and managing notes.',
        image: '/SidNotes.png',
        tags: ['TypeScript', 'React', 'Full-stack'],
        live: 'https://sid-notes-zeta.vercel.app/',
        color: 'bg-[#78c8ee]'
    }
];

function Project () {
    return (
        <div className='mx-auto w-full max-w-310'>
            <header className='relative isolate mb-8 overflow-hidden rounded-4xl bg-[#89956f] p-7 text-[#171713] sm:mb-12 sm:p-12 lg:p-16'>
                <div className='absolute -right-16 -top-32 -z-10 h-96 w-96 rounded-full border border-black/10 shadow-[0_0_0_2rem_rgba(0,0,0,.025),0_0_0_4rem_rgba(0,0,0,.02)]'></div>
                <p className='text-xs font-bold uppercase tracking-[.2em] text-black/55'>A little bit of everything / 2026</p>
                <div className='mt-8 flex flex-wrap items-end justify-between gap-6'>
                    <h1 className='text-[clamp(4rem,10vw,8.5rem)] font-extrabold leading-[.78] tracking-[-.095em]'>Things I&apos;ve<br /><span className='font-serif font-medium italic text-[#d47c60]'>made.</span></h1>
                    <p className='max-w-xs text-sm leading-6 text-black/60 sm:text-base'>Five little corners of the internet, built with curiosity and a lot of care.</p>
                </div>
                <div className='mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50'><Sparkles size={ 15 } /> Five projects <span>·</span> One curious mind</div>
            </header>

            <div className='grid gap-5 md:grid-cols-2'>
                { projects.map((project, index) => (
                    <article key={ project.title } className={ `group overflow-hidden rounded-3xl border border-white/8 bg-[#1a1917] transition duration-300 hover:-translate-y-1 hover:border-white/20 ${ index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2' : '' }` }>
                        <a href={ project.live } target='_blank' rel='noreferrer' className={ `relative block overflow-hidden ${ index === 0 ? 'min-h-64 bg-[#11100f] md:min-h-90' : '' }` }>
                            <img src={ project.image } alt={ `${ project.title } project preview` } className={ `w-full transition duration-500 group-hover:scale-[1.025] ${ index === 0 ? 'aspect-[1.55] object-contain object-center md:absolute md:inset-0 md:h-full' : 'aspect-[1.55] object-cover object-top' }` } />
                            <span className={ `absolute left-5 top-5 h-1 w-10 rounded-full ${ project.color }` }></span>
                            <span className='absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[#171713]/90 text-[#a3b47a] shadow-lg shadow-black/20 transition group-hover:rotate-45'><ArrowUpRight size={ 19 } /></span>
                        </a>
                        <div className={ `p-5 sm:p-7 ${ index === 0 ? 'flex flex-col justify-center lg:p-10' : '' }` }>
                            <p className='text-[10px] font-bold uppercase tracking-[.16em] text-[#a3b47a]'>{ project.type }</p>
                            <div className='mt-2 flex items-start justify-between gap-3'>
                                <h2 className='text-2xl font-extrabold tracking-tight sm:text-3xl'>{ project.title }</h2>
                                <ArrowDownRight className='mt-1 shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#a3b47a]' />
                            </div>
                            <p className='mt-3 max-w-lg text-sm leading-6 text-white/55'>{ project.description }</p>
                            <div className='mt-5 flex flex-wrap gap-2'>
                                { project.tags.map(tag => <span key={ tag } className='rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/65'>{ tag }</span>) }
                            </div>
                            <div className='mt-6 flex flex-wrap gap-5 text-xs font-bold'>
                                <a href={ project.live } target='_blank' rel='noreferrer' className='inline-flex items-center gap-1.5 text-[#a3b47a] hover:text-white'>Live project <ArrowUpRight size={ 14 } /></a>
                                { project.code && <a href={ project.code } target='_blank' rel='noreferrer' className='inline-flex items-center gap-1.5 text-white/55 hover:text-white'><Code2 size={ 14 } /> Source code</a> }
                            </div>
                        </div>
                    </article>
                )) }
            </div>

            <div className='mt-12 flex items-center gap-3 border-t border-white/10 py-8 text-xs text-white/40'>
                <span>More ideas are already in the notebook.</span>
            </div>
        </div>
    );
}

export default Project;
