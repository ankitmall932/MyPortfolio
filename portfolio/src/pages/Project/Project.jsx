import React from 'react';
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react';

const projects = [
    {
        number: '01',
        title: 'Siddhi Hotels',
        type: 'Full-stack product',
        description: 'A complete hotel booking experience with authentication, search, payments, and role-based dashboards.',
        image: '/landing page.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        live: 'https://hotel-booking-site-nine.vercel.app/',
        code: 'https://github.com/ankitmall932/Hotel-Booking-Site'
    },
    {
        number: '02',
        title: 'Acyuta Digital Studio',
        type: 'TypeScript frontend product',
        description: 'A polished TypeScript digital studio website focused on clear visual storytelling, responsive layouts, and a refined frontend experience.',
        image: '/acyuta-digital-studio.png',
        tags: ['TypeScript', 'React', 'Tailwind CSS'],
        live: 'https://acyuta-web-studio.vercel.app/'
    },
    {
        number: '03',
        title: 'Sid Notes',
        type: 'Full-stack product',
        description: 'A full-stack notes application built as my first TypeScript project, with a focused interface for creating and managing notes.',
        image: '/SidNotes.png',
        tags: ['TypeScript', 'React', 'Full-stack'],
        live: 'https://sid-notes-zeta.vercel.app/'
    }
];

const tagClass = 'border border-white/15 px-2 py-1 text-xs text-[#a9a29a]';

function Project () {
    return (
        <div className='mx-auto w-full max-w-290'>
            <header className='mb-16 flex flex-col gap-5 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between'>
                <div>
                    <p className='mb-5 font-mono text-xs uppercase tracking-[.16em] text-[#e68b5e]'>Selected work</p>
                    <h1 className='text-[clamp(3rem,7vw,6.9rem)] font-extrabold leading-[.93] tracking-[-.07em]'>
                        Things I&apos;ve<br />
                        <span className='text-[#e68b5e]'>made.</span>
                    </h1>
                </div>
                <p className='max-w-xs leading-7 text-[#a9a29a]'>A small collection of products, experiments, and ideas built with care.</p>
            </header>

            <div className='grid gap-6 lg:grid-cols-2'>
                { projects.map(project => (
                    <article
                        key={ project.number }
                        className={ `group overflow-hidden rounded border border-white/12 bg-[rgba(29,27,25,.78)] shadow-[0_1.5rem_4rem_rgba(0,0,0,.18)] ${ project.upcoming ? 'border-dashed border-[#91b49b]/40 bg-[#91b49b]/5' : '' }` }
                    >
                        <>
                                <div className='relative h-72 overflow-hidden bg-[#292522]'>
                                    <img src={ project.image } alt={ project.title } className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />
                                    <span className='absolute left-5 top-5 bg-[#e68b5e] px-3 py-1 font-mono text-xs text-[#17110e]'>{ project.number }</span>
                                </div>
                                <div className='p-7 sm:p-9'>
                                    <p className='mb-3 font-mono text-xs uppercase tracking-[.16em] text-[#e68b5e]'>{ project.type }</p>
                                    <div className='flex items-start justify-between gap-4'>
                                        <h2 className='text-3xl font-bold'>{ project.title }</h2>
                                        <a href={ project.live } target='_blank' rel='noreferrer' aria-label={ `Open ${ project.title } live demo` } className='text-[#e68b5e]'>
                                            <ArrowUpRight />
                                        </a>
                                    </div>
                                    <p className='mt-4 max-w-lg leading-7 text-[#a9a29a]'>{ project.description }</p>
                                    <div className='mt-7 flex flex-wrap gap-2'>
                                        { project.tags.map(tag => <span key={ tag } className={ tagClass }>{ tag }</span>) }
                                    </div>
                                    <div className='mt-8 flex flex-wrap gap-5 text-sm font-bold'>
                                        <a href={ project.live } target='_blank' rel='noreferrer' className='flex items-center gap-2 text-[#e68b5e]'>Live demo <ArrowUpRight size={ 15 } /></a>
                                        { project.code && <a href={ project.code } target='_blank' rel='noreferrer' className='flex items-center gap-2 text-[#a9a29a] hover:text-[#f4f0e8]'><Code2 size={ 15 } /> Source</a> }
                                    </div>
                                </div>
                        </>
                    </article>
                )) }
            </div>

            <div className='mt-16 flex items-center gap-3 border-t border-white/10 pt-8 text-sm text-[#756f69]'>
                <Sparkles size={ 16 } className='text-[#e68b5e]' />
                More ideas are already in the notebook.
            </div>
        </div>
    );
}

export default Project;
