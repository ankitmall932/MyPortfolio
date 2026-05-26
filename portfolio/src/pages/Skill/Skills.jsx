import React from 'react';

function Skills () {
    const frontend = [
        {
            name: `HTML5`,
            logo: ` <i class="devicon-html5-plain colored "></i>`
        },
        {
            name: `CSS`,
            logo: `<i class="devicon-css3-plain colored"></i>`
        },
        {
            name: `JavaScript`,
            logo: ` <i class="devicon-javascript-plain colored"></i> `
        },
        {
            name: `TypeScript`,
            logo: ` <i class="devicon-typescript-plain colored"></i>  `
        },
        {
            name: `React`,
            logo: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />`
        },
        {
            name: `Bootstrap`,
            logo: ` <i class="devicon-bootstrap-plain colored"></i> `
        },
        {
            name: `Tailwind`,
            logo: ` <i class="devicon-tailwindcss-original colored"></i>`
        },
        {
            name: `Zustand/CAPI`,
            logo: ` <i class="devicon-zustand-plain colored"></i>`
        },
        {
            name: `MUI`,
            logo: ` <i class="devicon-materialui-plain colored"></i>`
        },
        {
            name: `Zod`,
            logo: `<img src='/logo-glow.webp'/>`
        },
        {
            name: `ReactRouter`,
            logo: `<i class="devicon-reactrouter-plain colored"></i>`
        },
        {
            name: `Swiper`,
            logo: ` <i class="devicon-swiper-original colored"></i>`
        },
        {
            name: `Axios`,
            logo: ` <i class="devicon-axios-plain colored"></i> `
        },
        {
            name: `RHF`,
            logo: `<img src='/rhf.svg'/>`
        },
        {
            name: `NodeJs`,
            logo: `<i class="devicon-nodejs-plain-wordmark colored"></i>`
        },
        {
            name: `MongoDB`,
            logo: ` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />  `
        },
        {
            name: `Clerk`,
            logo: `<img src='/clerk.jpeg'/>`
        },
        {
            name: `JWT/AUTH`,
            logo: `<img src='/jwt.png'/>`
        },
        {
            name: `Express`,
            logo: ` <i class="devicon-express-original colored"></i> `
        },
        {
            name: `NPM`,
            logo: ` <i class="devicon-npm-original-wordmark colored"></i>`
        },
        {
            name: `RateLimiting`,
            logo: `<img src='/Rate-Limiting.png'/>`
        },
        {
            name: `RestApi`,
            logo: `<img src='rest api.webp' class='bg-white'/>`
        },
        {
            name: `GitHub`,
            logo: ` <i class="devicon-github-original colored"></i>`
        },
        {
            name: `Postman`,
            logo: ` <i class="devicon-postman-plain colored"></i>`
        },
        {
            name: `Brevo`,
            logo: `<img src='/Brevo.png'/>`
        },
        {
            name: `Render`,
            logo: `<img src='/Render Icon.png'/>`
        },
        {
            name: `Vercel`,
            logo: ` <i class="devicon-vercel-original colored bg-white"></i>`
        },
    ];
    const learning = [
        {
            name: `NextJs`,
            logo: ` <i class="devicon-nextjs-plain"></i>`
        },
        {
            name: `NestJs`,
            logo: ` <i class="devicon-nestjs-original colored"></i>`
        },
        {
            name: `Docker`,
            logo: `<i class="devicon-docker-plain colored"></i>`
        },
        {
            name: `Redis`,
            logo: ` <i class="devicon-redis-plain colored"></i>`
        },
        {
            name: `DSA`,
            logo: ` <i class="devicon-dynamodb-plain colored"></i>`
        },
        {
            name: `PostgreSQL`,
            logo: ` <i class="devicon-postgresql-plain colored"></i>`
        },
    ];
    return (
        <div className='w-full h-full flex flex-col sm:gap-10 gap-2 justify-center items-center'>
            <h1 className='sm:text-4xl text-2xl font-bold text-cyan-400'>Tech Stack</h1>
            <h3 className='sm:text-2xl text-xl font-semibold text-cyan-400'>Technologies I use to build scalable web applications</h3>
            <div className='grid w-full h-fit xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 border border-cyan-400/40 sm:px-10 px-2 sm:py-5 py-2 rounded-xl gap-5'>
                { frontend.map((items, index) => (
                    <div key={ index } className='flex flex-col justify-center items-center border border-cyan-500 py-8 rounded gap-5 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1 transition-all duration-300'>
                        <div dangerouslySetInnerHTML={ { __html: items.logo } } className='sm:h-15 h-10 sm:w-15 w-10 sm:text-6xl text-4xl object-fit' />
                        <h1 className='sm:text-lg text-sm font-semibold text-cyan-400'>{ items.name }</h1>
                    </div>
                )) }
            </div>
            <h1 className='sm:text-4xl text-2xl font-bold text-cyan-400'>Currently Learning</h1>
            <div className='grid w-full h-fit xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 border border-cyan-400/40 sm:px-10 px-2 sm:py-5 py-2 rounded-xl gap-5'>
                { learning.map((items, index) => (
                    <div key={ index } className='flex flex-col justify-center items-center border border-cyan-500 py-8 rounded gap-5 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1 transition-all duration-300'>
                        <div dangerouslySetInnerHTML={ { __html: items.logo } } className='sm:h-15 h-10 sm:w-15 w-10 sm:text-6xl text-4xl object-fit' />
                        <h1 className='sm:text-lg text-sm font-semibold text-cyan-400'>{ items.name }</h1>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default Skills;