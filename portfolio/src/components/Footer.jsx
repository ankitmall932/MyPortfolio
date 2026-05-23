import React from 'react';
import { NavLink } from 'react-router-dom';
import { LocationOn, Email, Call, WhatsApp, Instagram, Facebook } from '@mui/icons-material';

function Footer () {
    const isActive = ({ isActive }) => {
        return isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500 hover:underline';
    };
    return (
        <div className='w-full h-full flex sm:flex-row flex-col sm:justify-evenly gap-5 py-5'>
            <div className='flex flex-col gap-2' >
                <h1 className='text-2xl font-semibold '>Contacts</h1>
                <div className='flex items-center  gap-3'>
                    <h3><LocationOn /></h3>
                    <h3>Gorakhpur Uttar Pradesh</h3>
                </div>
                <div className='flex items-center  gap-3'>
                    <h3><Email /></h3>
                    <h3>ankitmall932@gmail.com</h3>
                </div>
                <div className='flex items-center  gap-3'>
                    <h3><Call /></h3>
                    <h3>9936738441</h3>
                </div>
                <div className='flex gap-5'>
                    <NavLink to='https://wa.me/919936738441'><WhatsApp /></NavLink>
                    <NavLink to='https://www.instagram.com/ankit_mall_932'><Instagram /></NavLink>
                    <NavLink to='https://www.facebook.com/ankitmall.932'><Facebook /></NavLink>
                </div>
            </div>
            <div className='w-fit flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>Links</h1>
                <NavLink className={ isActive } to='/'>Home</NavLink>
                <NavLink className={ isActive } to='/about'>About</NavLink>
                <NavLink className={ isActive } to='/skills'>Skills</NavLink>
                <NavLink className={ isActive } to='/project'>Project</NavLink>
                <NavLink className={ isActive } to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
}

export default Footer;