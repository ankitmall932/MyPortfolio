import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

function Footer () {
    return (
        <footer className='section-wrap flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between'>
            <div className='flex flex-col gap-3'>
                <p className='eyebrow'>Have a good idea?</p>
                <h2 className='text-3xl font-bold tracking-tight text-[#f4f0e8]'>Let's make it real.</h2>
                <div className='mt-2 flex flex-wrap gap-5 text-sm'>
                    <span className='flex items-center gap-2'><MapPin size={ 15 } className='text-[#e68b5e]' /> Gorakhpur, India</span>
                    <a className='flex items-center gap-2 hover:text-[#e68b5e]' href='mailto:ankitmall932@gmail.com'><Mail size={ 15 } className='text-[#e68b5e]' /> ankitmall932@gmail.com</a>
                </div>
            </div>
            <div className='flex flex-col items-start gap-3 text-sm sm:items-end'>
                <NavLink to='/contact' className='flex items-center gap-2 font-bold text-[#e68b5e] hover:text-[#f0a477]'>Start a conversation <ArrowUpRight size={ 16 } /></NavLink>
                <p className='text-xs text-[#756f69]'>© 2026 Ankit Mall. Built with intent.</p>
            </div>
        </footer>
    );
}

export default Footer;