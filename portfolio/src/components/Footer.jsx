import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

function Footer () {
    return (
        <footer className='mx-auto flex w-full max-w-310 flex-col gap-8 py-9 sm:flex-row sm:items-end sm:justify-between'>
            <div className='flex flex-col gap-3'>
                <p className='font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a3b47a]'>Got a good one?</p>
                <h2 className='text-3xl font-extrabold tracking-tight text-white'>Let&apos;s make it real.</h2>
                <div className='mt-2 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50'>
                    <span className='flex items-center gap-2'><MapPin size={ 14 } className='text-[#a3b47a]' /> Gorakhpur, India</span>
                    <a className='flex items-center gap-2 transition hover:text-[#a3b47a]' href='mailto:ankitmall932@gmail.com'><Mail size={ 14 } className='text-[#a3b47a]' /> ankitmall932@gmail.com</a>
                </div>
            </div>
            <div className='flex flex-col items-start gap-3 text-xs sm:items-end'>
                <NavLink to='/contact' className='flex items-center gap-2 font-bold text-[#a3b47a] transition hover:text-white'>Start a conversation <ArrowUpRight size={ 15 } /></NavLink>
                <p className='text-[10px] text-white/35'>© 2026 Ankit Mall. Built with intent.</p>
            </div>
        </footer>
    );
}

export default Footer;
