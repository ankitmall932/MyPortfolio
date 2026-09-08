import React from 'react';
import { ArrowUpRight, BookOpen, Database, Layers3, Palette, Server, Video, Wrench } from 'lucide-react';

const skillGroups = [
    {
        title: 'Interface',
        description: 'Clean, responsive experiences that feel natural to use.',
        icon: Layers3,
        skills: [
            ['HTML5', 'devicon-html5-plain colored'],
            ['CSS3', 'devicon-css3-plain colored'],
            ['JavaScript', 'devicon-javascript-plain colored'],
            ['TypeScript', 'devicon-typescript-plain colored'],
            ['React', 'devicon-react-original colored'],
            ['Tailwind CSS', 'devicon-tailwindcss-original colored'],
            ['React Router', 'devicon-reactrouter-plain colored'],
            ['Material UI', 'devicon-materialui-plain colored']
        ]
    },
    {
        title: 'Backend & data',
        description: 'Reliable APIs and data layers built for real product flows.',
        icon: Server,
        skills: [
            ['Node.js', 'devicon-nodejs-plain colored'],
            ['Express', 'devicon-express-original colored'],
            ['MongoDB', 'devicon-mongodb-plain colored'],
            ['REST APIs', 'devicon-fastapi-plain colored'],
            ['JWT Auth', 'devicon-jsonwebtokens-plain colored'],
            ['Axios', 'devicon-axios-plain colored'],
            ['Zod', 'devicon-zod-plain colored'],
            ['NPM', 'devicon-npm-original-wordmark colored']
        ]
    },
    {
        title: 'Workflow',
        description: 'The tools and habits that keep the build moving forward.',
        icon: Wrench,
        skills: [
            ['GitHub', 'devicon-github-original'],
            ['Postman', 'devicon-postman-plain colored'],
            ['Vercel', 'devicon-vercel-original'],
            ['Render', 'devicon-render-plain colored'],
            ['Swiper', 'devicon-swiper-original colored'],
            ['React Hook Form', 'devicon-react-original colored']
        ]
    },
    {
        title: 'Creative studio',
        description: 'Visual design and editing skills for giving digital ideas a strong identity.',
        icon: Palette,
        skills: [
            ['Graphic Designing', Palette],
            ['Video Editing', Video]
        ]
    }
];

const learning = [
    ['Next.js', 'devicon-nextjs-plain'],
    ['NestJS', 'devicon-nestjs-original colored'],
    ['Docker', 'devicon-docker-plain colored'],
    ['Redis', 'devicon-redis-plain colored'],
    ['PostgreSQL', 'devicon-postgresql-plain colored'],
    ['Data structures', 'devicon-dynamodb-plain colored']
];

function renderSkillIcon (icon) {
    if (typeof icon === 'string') {
        return <i className={`${ icon } text-3xl`} aria-hidden='true'></i>;
    }

    const Icon = icon;
    return <Icon className='text-[#e68b5e]' size={ 30 } aria-hidden='true' />;
}

function Skills () {
    return (
        <div className='mx-auto w-full max-w-290'>
            <header className='mb-14 flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between'>
                <div>
                    <p className='mb-5 font-mono text-xs uppercase tracking-[.16em] text-[#e68b5e]'>How I build</p>
                    <h1 className='text-[clamp(3rem,7vw,6.9rem)] font-extrabold leading-[.93] tracking-[-.07em]'>My working<br /><span className='text-[#e68b5e]'>toolkit.</span></h1>
                </div>
                <p className='max-w-sm leading-7 text-[#a9a29a]'>A practical stack for turning rough ideas into polished, dependable web experiences.</p>
            </header>

            <div className='grid gap-5 lg:grid-cols-4'>
                { skillGroups.map(({ title, description, icon: Icon, skills }) => (
                    <section key={ title } className='rounded border border-white/10 bg-[rgba(29,27,25,.78)] p-6 shadow-[0_1.5rem_4rem_rgba(0,0,0,.15)] sm:p-7'>
                        <div className='mb-8 flex items-start justify-between'><div><p className='mb-2 font-mono text-xs uppercase tracking-[.14em] text-[#e68b5e]'>{ title }</p><p className='max-w-xs text-sm leading-6 text-[#a9a29a]'>{ description }</p></div><Icon className='text-[#91b49b]' size={ 25 } /></div>
                        <div className='grid grid-cols-2 gap-2'>
                            { skills.map(([ name, icon ]) => <div key={ name } className='flex min-h-20 flex-col items-center justify-center gap-2 border border-white/8 bg-[#171615] px-2 py-3 text-center transition-colors hover:border-[#e68b5e]/60'>{ renderSkillIcon(icon) }<span className='text-xs text-[#d6d0c8]'>{ name }</span></div>) }
                        </div>
                    </section>
                )) }
            </div>

            <section className='mt-6 grid gap-6 border-y border-white/10 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center'>
                <div><div className='mb-4 flex items-center gap-3'><BookOpen className='text-[#91b49b]' size={ 23 } /><p className='font-mono text-xs uppercase tracking-[.14em] text-[#91b49b]'>Currently learning</p></div><h2 className='text-3xl font-bold'>Still curious.<br /><span className='text-[#e68b5e]'>Always.</span></h2><p className='mt-4 max-w-sm leading-7 text-[#a9a29a]'>The best work comes from staying open to better tools, deeper fundamentals, and new ways to solve familiar problems.</p></div>
                <div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
                    { learning.map(([ name, icon ]) => <div key={ name } className='flex items-center gap-3 border border-[#91b49b]/25 bg-[#91b49b]/5 p-4'><i className={`${ icon } text-2xl`} aria-hidden='true'></i><span className='text-sm text-[#d6d0c8]'>{ name }</span></div>) }
                </div>
            </section>

            <div className='flex flex-wrap items-center justify-between gap-4 pt-8 text-sm text-[#756f69]'><span className='flex items-center gap-2'><Database size={ 16 } className='text-[#e68b5e]' /> Built around useful technology, not hype.</span><a href='/project' className='flex items-center gap-2 font-bold text-[#e68b5e] hover:text-[#f0a477]'>See the work <ArrowUpRight size={ 16 } /></a></div>
        </div>
    );
}

export default Skills;
