import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, FileDown, MapPin, Sparkles } from 'lucide-react';

const featuredProjects = [
    { name: 'SidBites', category: 'FULL-STACK / NEXT.JS', image: '/SidBites.png', link: 'https://sid-bites.vercel.app', color: 'bg-[#d47c60]' },
    { name: 'Acyuta Digital Studio', category: 'TYPESCRIPT / CREATIVE', image: '/acyuta-digital-studio.png', link: 'https://acyutadigitalstudio.website', color: 'bg-[#a49bbd]' },
    { name: 'TaskHub', category: 'NEXT.JS / PRODUCTIVITY', image: '/Landing.png', link: 'https://task-hub-lyart-psi.vercel.app', color: 'bg-[#a3b47a]' }
];

function Home () {
    return (
        <div className='mx-auto w-full max-w-310'>
            <section className='relative isolate grid min-h-[min(760px,calc(100svh-150px))] overflow-hidden rounded-4xl bg-[#89956f] text-[#171713] shadow-[0_30px_100px_rgba(0,0,0,.25)] lg:grid-cols-[1.08fr_.92fr]'>
                <div className='pointer-events-none absolute -right-32 -top-40 -z-10 h-136 w-136 rounded-full border border-black/10 sm:right-0'></div>
                <div className='pointer-events-none absolute -right-12 -top-20 -z-10 h-100 w-100 rounded-full border border-black/10'></div>
                <div className='relative z-10 flex flex-col items-start p-7 sm:p-10 lg:justify-center lg:p-14 xl:p-16'>
                    <div className='inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[.12em]'>
                        <span className='relative flex h-2.5 w-2.5'><span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#354e38] opacity-40'></span><span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-[#354e38]'></span></span>
                        Open to good ideas
                    </div>
                    <p className='mb-3 mt-10 text-xs font-bold uppercase tracking-[.2em] text-black/55'>Ankit Mall <span className='px-1'>/</span> Developer + creative</p>
                    <h1 className='max-w-212.5 text-[clamp(4rem,9vw,8.5rem)] font-extrabold leading-[.78] tracking-[-.095em]'>
                        Make it<br />
                        <span className='font-serif font-medium italic tracking-[-.09em]'>work.</span><br />
                        Make it<br className='lg:hidden' /> <span className='text-[#d47c60]'>matter.</span>
                    </h1>
                    <p className='mt-8 max-w-md text-base leading-7 text-black/65 sm:text-lg'>I turn big ideas into useful websites, memorable visuals, and digital experiences people love to use.</p>
                    <div className='mt-8 flex flex-wrap gap-3'>
                        <NavLink to='/project' style={ { backgroundColor: '#e2694d', color: '#fff' } } className='group inline-flex min-h-12 items-center gap-3 rounded-full border border-black/10 px-6 text-sm font-bold shadow-lg shadow-black/15 transition hover:-translate-y-0.5'>See what I make <ArrowUpRight size={ 17 } className='transition group-hover:rotate-45' /></NavLink>
                        <a href='/Ankit-Mall-Resume.pdf' download className='inline-flex min-h-12 items-center gap-2 rounded-full border border-black/25 px-5 text-sm font-bold transition hover:bg-white/25'><FileDown size={ 16 } /> Resume</a>
                    </div>
                    <div className='mt-10 flex items-center gap-2 text-xs font-semibold text-black/55'><MapPin size={ 14 } /> Gorakhpur, India <span className='mx-1'>·</span> Making for the web since 2022</div>
                </div>

                <div className='relative flex min-h-110 items-center justify-center px-8 pb-12 pt-5 sm:min-h-140 lg:min-h-0 lg:py-12 lg:pr-12'>
                    <div className='absolute right-[12%] top-[13%] h-24 w-24 rounded-full bg-[#d47c60] sm:right-[16%] sm:h-32 sm:w-32'></div>
                    <div className='relative w-[min(74%,360px)] rotate-3 rounded-[1.4rem] border-[9px] border-[#171713] bg-[#171713] shadow-[18px_22px_0_rgba(23,23,19,.16)] transition duration-500 hover:rotate-0'>
                        <img src='/Ankit Mall.jpeg' alt='Ankit Mall' className='aspect-4/5 w-full rounded-[.8rem] object-cover' />
                        <div className='absolute -bottom-5 -left-7 rounded-2xl bg-[#a49bbd] px-4 py-3 shadow-xl sm:-left-12'>
                            <span className='block font-mono text-[10px] font-bold uppercase tracking-[.14em]'>The human behind</span>
                            <span className='text-xl font-extrabold tracking-tight'>the pixels.</span>
                        </div>
                    </div>
                    <div className='absolute right-[4%] top-[29%] flex h-18 w-18 rotate-12 items-center justify-center rounded-full bg-[#d47c60] text-[#171713] shadow-xl sm:right-[9%] sm:top-[25%] sm:h-24 sm:w-24'>
                        <Sparkles size={ 36 } strokeWidth={ 1.5 } />
                    </div>
                    <div className='absolute bottom-[13%] right-[4%] max-w-36 -rotate-3 rounded-xl bg-[#171713] px-4 py-3 text-white shadow-xl sm:bottom-[17%] sm:right-[8%]'>
                        <span className='block text-[10px] uppercase tracking-[.15em] text-[#a3b47a]'>Currently</span>
                        <span className='text-sm font-bold'>Building cool stuff</span>
                    </div>
                    <span className='absolute bottom-[7%] left-[5%] font-mono text-[10px] font-bold tracking-widest text-black/40'>26°45&apos;N&nbsp; 83°22&apos;E</span>
                </div>
            </section>

            <div className='my-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl border border-white/10 bg-white/[.035] px-5 py-5 text-center text-[11px] font-bold uppercase tracking-[.18em] text-white/55 sm:gap-x-8 sm:text-xs'>
            <span>Developer</span><span className='text-[#a3b47a]'>✳</span><span>Designer</span><span className='text-[#a3b47a]'>✳</span><span>Creative thinker</span><span className='text-[#a3b47a]'>✳</span><span>Video editor</span>
            </div>

            <section className='grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:items-center lg:py-16'>
                <div><p className='text-xs font-bold uppercase tracking-[.18em] text-[#a3b47a]'>A little about me</p><p className='mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl'>Curious by default.<br /><span className='text-white/40'>Creative on purpose.</span></p></div>
                <div className='border-l border-white/15 pl-5'><p className='text-4xl font-extrabold tracking-[-.08em] sm:text-5xl'>05<span className='text-[#a3b47a]'>+</span></p><p className='mt-2 text-xs text-white/50'>Projects shipped</p></div>
                <div className='border-l border-white/15 pl-5'><p className='text-4xl font-extrabold tracking-[-.08em] sm:text-5xl'>02</p><p className='mt-2 text-xs text-white/50'>Creative disciplines</p></div>
                <div className='border-l border-white/15 pl-5'><p className='text-4xl font-extrabold tracking-[-.08em] sm:text-5xl'>∞</p><p className='mt-2 text-xs text-white/50'>Things to learn</p></div>
            </section>

            <section className='py-10 sm:py-16' id='selected-work'>
                <div className='mb-7 flex flex-wrap items-end justify-between gap-5 sm:mb-10'>
                    <div><p className='text-xs font-bold uppercase tracking-[.18em] text-[#a3b47a]'>A few things out in the world</p><h2 className='mt-3 text-5xl font-extrabold leading-none tracking-[-.08em] sm:text-7xl'>Selected <span className='font-serif font-medium italic text-[#a3b47a]'>work.</span></h2></div>
                    <NavLink to='/project' className='group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-bold transition hover:border-[#a3b47a] hover:text-[#a3b47a]'>All five projects <ArrowUpRight size={ 16 } className='transition group-hover:rotate-45' /></NavLink>
                </div>
                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2'>
                    { featuredProjects.map((project, index) => (
                        <a key={ project.name } className={ `group relative flex flex-col overflow-hidden rounded-[1.4rem] border border-white/[.08] bg-[#1a1917] transition duration-300 hover:-translate-y-1 hover:border-white/20 ${ index === 0 ? 'md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[640px]' : 'lg:col-span-5' }` } href={ project.link } target='_blank' rel='noreferrer'>
                            <div className={ `relative overflow-hidden ${ index === 0 ? 'aspect-[1.65] bg-[#11100f] md:aspect-[1.5] lg:aspect-[1.3]' : 'aspect-[1.55] lg:aspect-[2.4]' }` }>
                                <img src={ project.image } alt={ `${ project.name } project preview` } className={ `h-full w-full transition duration-500 group-hover:scale-[1.035] ${ index === 0 ? 'object-contain object-center' : 'object-cover object-top' }` } />
                                <span className={ `absolute left-5 top-5 h-1 w-10 rounded-full ${ project.color }` }></span>
                                <span className='absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[#a3b47a] text-[#171713] shadow-lg shadow-black/20 transition group-hover:rotate-45'><ArrowUpRight size={ 19 } /></span>
                            </div>
                            <div className='flex items-end justify-between gap-3 p-5 sm:p-6'>
                                <div><p className='text-[10px] font-bold tracking-[.15em] text-white/40'>{ project.category }</p><h3 className='mt-2 text-xl font-extrabold tracking-tight sm:text-2xl'>{ project.name }</h3></div>
                                <ArrowDownRight className='mb-1 shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#a3b47a]' />
                            </div>
                        </a>
                    )) }
                </div>
            </section>

            <section className='relative my-12 overflow-hidden rounded-4xl bg-[#a49bbd] p-7 text-[#171713] sm:my-16 sm:p-12 lg:p-16'>
                <span className='absolute -right-10 -top-24 select-none font-serif text-[20rem] leading-none text-white/20'>?</span>
                <div className='relative z-10 max-w-3xl'>
                    <p className='text-xs font-bold uppercase tracking-[.18em] text-black/55'>Have a good one?</p>
                    <div className='mt-5 flex flex-wrap items-end justify-between gap-6'>
                        <h2 className='text-5xl font-extrabold leading-[.87] tracking-[-.08em] sm:text-7xl lg:text-8xl'>Let&apos;s make<br /><span className='font-serif font-medium italic'>some noise.</span></h2>
                        <NavLink to='/contact' aria-label='Get in touch' className='group grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#d47c60] text-[#171713] transition hover:rotate-45 hover:bg-[#c58d78] sm:h-20 sm:w-20'><ArrowUpRight size={ 28 } /></NavLink>
                    </div>
                    <p className='mt-6 max-w-md text-sm leading-6 text-black/60 sm:text-base'>Got a big idea or a little question? Either way, my inbox is open.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
