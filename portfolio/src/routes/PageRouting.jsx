import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PageRouting () {
    return (
        <div>
            <Navbar />
            <div className='mt-12 sm:px-15 px-5 bg-slate-950 text-slate-100 py-4'>
                <Outlet />
            </div>
            <div className=' sm:px-15 px-5 bg-slate-900 text-slate-400 border-t border-slate-800'>
                <Footer />
            </div>
        </div>
    );
}

export default PageRouting;