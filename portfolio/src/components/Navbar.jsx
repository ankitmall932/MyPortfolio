import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar () {
    const [ isOpen, setIsOpen ] = useState(false);
    const isActive = ({ isActive }) => {
        return isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500 hover:underline';
    };
    return (
        <>
            <div className='px-10  hidden sm:flex justify-between items-center  shadow-2xl fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-200 font-medium'>
                <div >
                    <NavLink>
                        <img src="/ChatGPT Image May 23, 2026, 07_17_18 PM.png" alt="Name logo" className='h-12 w-30' />
                    </NavLink>
                </div>
                <div className='gap-12 items-center flex'>
                    <NavLink className={ isActive } to='/'>Home</NavLink>
                    <NavLink className={ isActive } to='/about'>About</NavLink>
                    <NavLink className={ isActive } to='/skills'>Skills</NavLink>
                    <NavLink className={ isActive } to='/project'>Project</NavLink>
                    <NavLink className={ isActive } to='/contact'>Contact</NavLink>
                </div>
            </div>
            <div className='px-5  sm:hidden flex justify-between items-center  shadow-2xl fixed top-0 right-0 left-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-200 font-medium'>
                <div>
                    <NavLink>
                        <img src="/ChatGPT Image May 23, 2026, 07_17_18 PM.png" alt="Name logo" className='h-12  w-30' />
                    </NavLink>
                </div>
                <div>
                    <button onClick={ () => setIsOpen(true) }><Menu strokeWidth={ 2.25 } /></button>
                    <div onClick={ () => setIsOpen(false) } className={ `fixed inset-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-200 font-medium transition-opacity duration-300 ${ isOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none' }` }>
                        <div className={ `fixed top-0 right-0 h-fit w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-200 font-medium z-50 shadow-xl transform transition-transform duration-300 ${ isOpen ? 'translate-x-0' : 'translate-x-full' }` }>
                            <div className='flex items-center justify-end p-4  bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-200 font-medium'>
                                <button onClick={ () => setIsOpen(false) }><X strokeWidth={ 2.25 } /></button>
                            </div>
                            <div className='flex flex-col gap-5 p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-200 font-medium'>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/'>Home</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/about'>About</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/skills'>Skills</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/project'>Project</NavLink>
                                <NavLink onClick={ () => setIsOpen(false) } className={ isActive } to='/contact'>Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;