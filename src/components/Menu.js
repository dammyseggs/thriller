import React from 'react';
import {AiFillHome, AiOutlineHeart} from 'react-icons/ai'
import {BsGrid} from 'react-icons/bs'
import {PiEnvelopeSimple} from 'react-icons/pi'
import {TbSettings2} from 'react-icons/tb'
import {BiRightArrowCircle} from 'react-icons/bi'

const Menu = () => {
    return (
        <div className=''>
            <div className='flex flex-row mt-5'>
            <AiFillHome size={25} className='mr-7 text-slate-600' /><span className='text-slate-600'>Dashboard</span> 
            </div>
            <div className='flex flex-row mt-5'>
                 <BsGrid size={25} className=' mr-7' style={{color:'#696969'}}/><span className='' style={{color:'#696969'}}>Explore City</span>
            </div>
            <div className='flex flex-row mt-5'>
                <PiEnvelopeSimple size={25} className=' mr-7' style={{color:'#696969'}}/><span className='' style={{color:'#696969'}}>Ticket</span>
            </div>
            <div className='flex flex-row mt-5'>
                <AiOutlineHeart size={25} className=' mr-7' style={{color:'#696969'}}/> <span className='' style={{color:'#696969'}}>Favourites</span>
            </div>
            <div className='flex flex-row mt-5'>
                 <TbSettings2 size={25} className=' mr-7' style={{color:'#696969'}}/><span className='' style={{color:'#696969'}}>Setting</span>
            </div>

            <div className='flex flex-row mt-36'>
                 <BiRightArrowCircle size={25} className=' mr-7' style={{color:'#696969'}}/> <span style={{color:'#696969'}}>Logout</span>
            </div>
        </div>
    );
}

export default Menu;