import React from 'react';
import avatar from "../images/avatar.jpg"
import {FaRegPenToSquare} from 'react-icons/fa6'
import Menu from './Menu';


const Navbar = () => {
    return(
        <div className='bg-white w-64 p-10 rounded-tr-3xl grid justify-items-center '>
            <h3 className='text-2xl font-bold text-center'>
                <span className='' style={{color:'#6f7289'}}>Mima</span>
                <span className='' style={{color:'#696969'}}>Booking</span>
            </h3>
            <div className='rounded-full bg-slate-400 border-2 border-slate-500 w-32 h-32 p-1'>
                <img src={avatar} alt='avatar'className='rounded-full'/>
            </div> 
            <div className='bg-slate-600 rounded-full w-9 h-9 p-2 -mt-28'>
                <FaRegPenToSquare size={20} className='rounded-full text-white' />
            </div>
            <div className='text-2xl -mt-36'>
                <h3 style={{color:'#696969'}}>ilia jan</h3>
            </div>
            <Menu />
        </div>
    );
}

export default Navbar;