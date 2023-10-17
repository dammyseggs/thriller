import React from 'react';
import {BsSearch, BsBell} from 'react-icons/bs'

const SearchNav = () => {
    return (
        <div className='bg-white rounded-3xl p-6 flex space-x-96 mr-7'>
            <div className='ml-5'>
                <form>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none ">
                            <BsSearch size={22} className=' text-slate-300 '/>
                        </div>
                        <input type="search" id="default-search" className="block pl-14 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white w-80" placeholder="Search any thing ..." required />
                    </div>
                </form>
            </div>
            <div className='flex flex-row mt-3'>
                <h2 className='text-xl font-bold text-black mr-5'>Saturday, may 3, 2023</h2>
                <div className='flex items-center -mt-1 justify-center h-6 w-6 rounded-full shadow-lg shadow-pink-500/60' style={{backgroundColor:'#ff515a'}}>
                    <h2 className="" >3</h2>
                </div>
                <div className='p-1 pt-2 border rounded-md ml-2 mr-16 -mt-1'>
                    <BsBell size={26} className=' text-slate-300 '/>
                </div>
            </div>
        </div>
    );
}

export default SearchNav;