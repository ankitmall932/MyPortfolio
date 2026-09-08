import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PageRouting () {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <main className='site-main text-[#f4f0e8]'>
                <Outlet />
            </main>
            <div className='border-t border-white/10 bg-[#171615] px-[clamp(1rem,5vw,5rem)] text-[#a9a29a]'>
                <Footer />
            </div>
        </div>
    );
}

export default PageRouting;