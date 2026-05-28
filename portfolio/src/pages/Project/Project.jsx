import React from 'react';
import { NavLink } from 'react-router-dom';
import { GitHub, ArrowOutward } from '@mui/icons-material';

function Project () {
    return (
        <div className='flex w-full flex-col  h-full py-15 gap-10'>
            <div className='flex w-full xl:h-120 h-full gap-5 xl:flex-row flex-col '>
                <div className='h-full xl:w-1/4 w-full border border-cyan-400 rounded-2xl flex flex-col gap-2 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all   duration-200 hover:scale-105' >
                    <div className='h-50 w-full '>
                        <img src="/landing page.png" alt="landing page" className='h-full w-full object-fit rounded-t-2xl' />
                    </div>
                    <div className='h-50 w-full px-3 flex flex-col '>
                        <h1 className='text-2xl font-semibold mb-2 text-cyan-400'>Siddhi Hotels  </h1>
                        <h3 className='text-sm font-semibold text-white/70'>Modern Hotel booking web application with authentication and booking flow</h3>
                        <h1 className='text-2xl text-cyan-400 font-semibold mt-3'>Demo Note : </h1>
                        <h3 className='text-sm font-semibold text-white/70 mt-2'>Since this demo runs on a free hosting tier, the initial request may take a few moments while the server wakes up.</h3>
                    </div>
                    <div className='h-20 w-full flex justify-center  items-center '>
                        <NavLink to='https://hotel-booking-site-nine.vercel.app/' className='flex justify-center items-center px-3 py-2 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all rounded  gap-2 duration-200 hover:scale-105 active:scale-95'><ArrowOutward />Live Demo</NavLink>
                        <NavLink to='https://github.com/ankitmall932/Hotel-Booking-Site' className='flex justify-center items-center  px-3 py-2 border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all rounded gap-2 duration-200 hover:scale-105 active:scale-95'><GitHub />GitHub</NavLink>
                    </div>
                </div>
                <div className='h-full xl:w-3/4 w-full sm:p-5 p-2 border border-cyan-400 rounded-2xl shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all  duration-200'>
                    <img src="/Dashboard.png" alt="dashboard image" className='object-cover' />
                </div>
            </div>
            <div className='flex w-full xl:h-100 h-full gap-5 xl:flex-row flex-col '>
                <div className='xl:h-100 h-full xl:w-1/4 w-full border border-cyan-400 rounded-2xl sm:p-5 p-2 flex flex-col gap-3 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all  duration-200 hover:scale-105' >
                    <h1 className='text-2xl text-cyan-400 font-semibold'>Key Features</h1>
                    <ul className='list-disc list-inside text-lg font-semibold text-white/70 '>
                        <li>Full Authentication</li>
                        <li>Role based UI</li>
                        <li>Search & Filtering</li>
                        <li>Seamless booking flow</li>
                        <li>Responsive UI</li>
                        <li>Payment Integration</li>
                        <li>Owner Dashboard Management </li>
                        <li>Customer Booking Management</li>
                        <li>Email Notifications</li>
                    </ul>
                </div>
                <div className='h-full xl:w-3/4 w-full sm:p-5 p-2 border border-cyan-400 rounded-2xl grid xl:grid-cols-2 grid-cols-1 gap-2 shadow-[0_0_10px_rgba(34,211,238,0.18)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]  transition-all  duration-200 '>
                    <div className='flex h-full justify-center items-center '>
                        <img src="/Booking page.png" alt=" booking page image" className='object-cover h-full' />
                    </div>
                    <div className='flex h-full justify-center items-center '>
                        <img src="/account settings page.png" alt="account setting " className='object-cover h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;