import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
    [ 'Home', '/' ],
    [ 'About', '/about' ],
    [ 'Skills', '/skills' ],
    [ 'Work', '/project' ]
];

function Navbar () {
    const [ isOpen, setIsOpen ] = useState(false);
    const linkClass = ({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${ isActive ? 'bg-[#a3b47a] text-[#171713]' : 'text-white/65 hover:bg-white/10 hover:text-white' }`;

    return (
        <>
            <header className='fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4'>
                <nav aria-label='Main navigation' className='mx-auto flex max-w-310 items-center justify-between rounded-2xl border border-white/10 bg-[#151412]/90 px-3 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5'>
                    <NavLink to='/' onClick={ () => setIsOpen(false) } className='group flex items-center gap-2.5'>
                        <span className='grid h-9 w-9 place-items-center rounded-xl bg-[#a3b47a] text-xs font-black text-[#171713] transition group-hover:rotate-6'>AM</span>
                        <span className='text-sm font-extrabold tracking-tight'>Ankit Mall<span className='text-[#a3b47a]'>.</span></span>
                    </NavLink>
                    <div className='hidden items-center gap-1 sm:flex'>
                        { links.map(([ label, path ]) => <NavLink key={ path } to={ path } className={ linkClass }>{ label }</NavLink>) }
                        <NavLink to='/contact' className='ml-2 inline-flex items-center gap-2 rounded-full bg-[#d47c60] px-4 py-2.5 text-sm font-bold text-[#171713] transition hover:bg-[#a3b47a]'>Let&apos;s talk <ArrowUpRight size={ 15 } /></NavLink>
                    </div>
                    <button type='button' aria-label={ isOpen ? 'Close navigation' : 'Open navigation' } aria-expanded={ isOpen } onClick={ () => setIsOpen(!isOpen) } className='grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-[#a3b47a] transition hover:bg-white/10 sm:hidden'>
                        { isOpen ? <X size={ 20 } /> : <Menu size={ 20 } /> }
                    </button>
                </nav>
            </header>

            { isOpen && <div className='fixed inset-0 z-40 bg-[#11100f]/95 px-5 pb-8 pt-24 backdrop-blur-xl sm:hidden'>
                <nav aria-label='Mobile navigation' className='mx-auto flex max-w-lg flex-col gap-2'>
                    { links.map(([ label, path ], index) => (
                        <NavLink key={ path } to={ path } onClick={ () => setIsOpen(false) } className={ ({ isActive }) => `flex items-center justify-between border-b border-white/10 py-4 text-4xl font-extrabold tracking-tight transition ${ isActive ? 'text-[#a3b47a]' : 'text-white hover:text-[#a3b47a]' }` }>
                            <span>{ label }</span><span className='font-mono text-sm text-white/30'>0{ index + 1 }</span>
                        </NavLink>
                    )) }
                    <NavLink to='/contact' onClick={ () => setIsOpen(false) } className='mt-5 flex items-center justify-between rounded-2xl bg-[#a3b47a] p-5 text-lg font-extrabold text-[#171713]'>Let&apos;s talk <ArrowUpRight /></NavLink>
                    <p className='mt-8 font-mono text-xs uppercase tracking-widest text-white/35'>Gorakhpur, India · Available for good ideas</p>
                </nav>
            </div> }
        </>
    );
}

export default Navbar;
