import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageSeo = {
    '/': {
        title: 'Ankit Mall | Full-Stack Developer & Creative',
        description: 'Portfolio of Ankit Mall, a full-stack developer and creative designer building responsive websites, web applications and visual experiences.',
        type: 'website'
    },
    '/about': {
        title: 'Ankit Mall | About',
        description: 'Learn about Ankit Mall, his web development approach, creative disciplines and process for building thoughtful digital experiences.',
        type: 'profile'
    },
    '/skills': {
        title: 'Ankit Mall | Skills & Technology',
        description: 'Explore Ankit Mall\'s frontend, backend, database, workflow and creative skills across React, Next.js, Node.js and visual design.',
        type: 'website'
    },
    '/project': {
        title: 'Ankit Mall | Projects',
        description: 'Explore full-stack, React and Next.js projects built by Ankit Mall, including SidBites, TaskHub, Acyuta Digital Studio and more.',
        type: 'website'
    },
    '/contact': {
        title: 'Ankit Mall | Contact',
        description: 'Contact Ankit Mall for freelance web development, full-stack applications, frontend projects and creative collaborations.',
        type: 'website'
    }
};

function setMeta(attribute, key, content) {
    if (!content) return;

    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}

function SEO() {
    const location = useLocation();

    useEffect(() => {
        const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
        const seo = pageSeo[pathname] || {
            title: 'Ankit Mall | Page Not Found',
            description: 'The page you requested could not be found. Explore Ankit Mall\'s portfolio, projects, skills and contact page.',
            type: 'website'
        };
        const origin = window.location.origin;
        const canonicalUrl = `${origin}${pathname === '/' ? '/' : pathname}`;
        const imageUrl = `${origin}/Ankit%20Mall.jpeg`;

        document.title = seo.title;
        document.documentElement.lang = 'en';

        setMeta('name', 'description', seo.description);
        setMeta('name', 'author', 'Ankit Mall');
        setMeta('name', 'robots', pathname === '/' || pageSeo[pathname] ? 'index, follow, max-image-preview:large' : 'noindex, follow');
        setMeta('name', 'theme-color', '#11100f');
        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', seo.title);
        setMeta('name', 'twitter:description', seo.description);
        setMeta('name', 'twitter:image', imageUrl);
        setMeta('property', 'og:type', seo.type);
        setMeta('property', 'og:locale', 'en_IN');
        setMeta('property', 'og:site_name', 'Ankit Mall');
        setMeta('property', 'og:title', seo.title);
        setMeta('property', 'og:description', seo.description);
        setMeta('property', 'og:url', canonicalUrl);
        setMeta('property', 'og:image', imageUrl);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);

        let structuredData = document.head.querySelector('script[data-seo="portfolio"]');
        if (!structuredData) {
            structuredData = document.createElement('script');
            structuredData.setAttribute('type', 'application/ld+json');
            structuredData.setAttribute('data-seo', 'portfolio');
            document.head.appendChild(structuredData);
        }
        structuredData.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Person',
                    '@id': `${origin}/#person`,
                    name: 'Ankit Mall',
                    url: origin,
                    image: imageUrl,
                    jobTitle: 'Full-Stack Developer and Creative Designer',
                    email: 'mailto:ankitmall932@gmail.com',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Gorakhpur',
                        addressCountry: 'IN'
                    },
                    sameAs: [
                        'https://github.com/ankitmall932',
                        'https://www.instagram.com/ankit_mall_932'
                    ]
                },
                {
                    '@type': 'WebSite',
                    '@id': `${origin}/#website`,
                    url: origin,
                    name: 'Ankit Mall',
                    inLanguage: 'en-IN',
                    publisher: { '@id': `${origin}/#person` }
                },
                {
                    '@type': 'WebPage',
                    '@id': `${canonicalUrl}#webpage`,
                    url: canonicalUrl,
                    name: seo.title,
                    description: seo.description,
                    isPartOf: { '@id': `${origin}/#website` },
                    about: { '@id': `${origin}/#person` },
                    inLanguage: 'en-IN'
                }
            ]
        });
    }, [location.pathname]);

    return null;
}

export default SEO;
