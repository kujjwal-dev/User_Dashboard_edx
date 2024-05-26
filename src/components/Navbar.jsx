import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Home from './Home';
import { NavLink } from 'react-router-dom';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);



    const content = <>

        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
            <ul className='text-center text-xl p-20'>
                <NavLink to="/"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li></NavLink>
                    
                <NavLink to="/MyLearning"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>My Learning</li></NavLink>

                <NavLink to="/Courses"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Courses</li></NavLink>

                <NavLink to="/Contacts"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li></NavLink>
                    
            </ul>
        </div>
    </>

    return (
        <nav>
            <div className='h-10vh flex justify-beween z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>Logo</span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            
                        <NavLink to="/"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li></NavLink>
                    
                    <NavLink to="/MyLearning"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>My Learning</li></NavLink>
    
                    <NavLink to="/Courses"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Courses</li></NavLink>
    
                    <NavLink to="/Contacts"><li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li></NavLink>
                        
                        </ul>
                    </div>
                </div>

                <div>
                    {click && content}
                </div>
                <button className='block sm:hidden transition' onClick={handleClick} >
                    {click ? <FaTimes style={{ color: 'white' }} /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;