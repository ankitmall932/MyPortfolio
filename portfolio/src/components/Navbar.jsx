import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

function Navbar () {
    const [ isOpen, setIsOpen ] = useState(false);
    const isActive = ({ isActive }) => {
        return isActive
            ? 'relative pb-1 text-[#f4f0e8] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#e68b5e] after:content-[""]'
            : 'relative pb-1 text-[#a9a29a] transition-colors hover:text-[#e68b5e] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e68b5e] after:transition-all after:duration-300 after:content-[""] hover:after:w-full';
    };
    return (
        <>
            <div className='hidden sm:flex fixed top-0 left-0 right-0 z-50 items-center justify-between border-b border-white/10 bg-[#11100f]/90 px-[clamp(1.25rem,5vw,5rem)] py-4 backdrop-blur-md'>
                <NavLink to='/' className='flex items-center gap-3'>
                    <span className='flex h-9 w-9 items-center justify-center bg-[#e68b5e] font-bold text-[#17110e]'>AM</span>
                    <span className='font-bold tracking-tight'>Ankit Mall<span className='text-[#e68b5e]'>.</span></span>
                </NavLink>
                <div className='flex items-center gap-8'>
                    <NavLink className={ isActive } to='/'>Home</NavLink>
                    <NavLink className={ isActive } to='/about'>About</NavLink>
                    <NavLink className={ isActive } to='/skills'>Skills</NavLink>
                    <NavLink className={ isActive } to='/project'>Work</NavLink>
                    <NavLink className={ ({ isActive }) => `flex items-center gap-1 border px-4 py-2 text-sm font-bold transition-colors ${ isActive ? 'border-[#e68b5e] bg-[#e68b5e] text-[#17110e]' : 'border-[#e68b5e]/60 text-[#e68b5e] hover:bg-[#e68b5e] hover:text-[#17110e]' }` } to='/contact'>Let's talk <ArrowUpRight size={ 15 } /></NavLink>
                </div>
            </div>
            <div className='flex sm:hidden fixed top-0 right-0 left-0 z-50 items-center justify-between border-b border-white/10 bg-[#11100f]/95 px-4 py-4 backdrop-blur-md'>
                <NavLink to='/' className='flex items-center gap-3 font-bold'><span className='flex h-9 w-9 items-center justify-center bg-[#e68b5e] text-sm text-[#17110e]'>AM</span>Ankit Mall<span className='text-[#e68b5e]'>.</span></NavLink>
                <div>
                    <button aria-label='Open navigation' onClick={ () => setIsOpen(true) } className='text-[#e68b5e]'><Menu /></button>
                    <div onClick={ () => setIsOpen(false) } className={ `fixed inset-0 bg-[#11100f]/80 backdrop-blur-md transition-opacity duration-300 ${ isOpen ? 'opacity-100' : 'pointer-events-none opacity-0' }` }>
                        <div onClick={ event => event.stopPropagation() } className={ `fixed right-0 top-0 z-50 h-full w-[min(21rem,88vw)] border-l border-white/10 bg-[#1d1b19] p-6 shadow-2xl transition-transform duration-300 ${ isOpen ? 'translate-x-0' : 'translate-x-full' }` }>
                            <div className='flex justify-end'><button aria-label='Close navigation' onClick={ () => setIsOpen(false) } className='text-[#e68b5e]'><X /></button></div>
                            <div className='mt-10 flex flex-col gap-6 text-2xl'>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/'>Home</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/about'>About</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/skills'>Skills</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/project'>Work</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/contact'>Let's talk</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;