import React from "react";
import headerBg from './images/header-bg.jpg'
import { CiLocationOn } from 'react-icons/ci'
import { MdChecklistRtl } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'



const Header = () => {
    return (
        <div className=" mt-7">
            <div>
                <img src={headerBg} alt="headerBg" className="w-[72rem] h-[14rem] rounded-3xl" />
            </div>
            <div className=" -ml-3 bg-white rounded-3xl w-[70%] px-3 py-7 flex absolute bottom-64 left-96">
                <div className="flex">
                    <CiLocationOn size={27} className="text-slate-400 mt-3 ml-6 mr-3"/>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-slate-400 p-3 text-lg font-medium  inline-flex items-center " type="button">Where Are You Going?
                        <svg className="w-2.5 h-2.5 ml-10" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                        </ul>
                    </div> 
                    <div className="inline-block ml-2 h-[50px] min-h-[1em] w-0.5 self-stretch bg-slate-200 opacity-100 dark:opacity-50"></div>
                </div>
                <div className="flex">
                    <MdChecklistRtl size={27} className="text-slate-400 mt-3 ml-6 mr-3"/>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-slate-400 p-3 text-lg font-medium   inline-flex items-center " type="button">Check-in Date
                        <svg className="w-2.5 h-2.5 ml-12" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                        </ul>
                    </div> 
                    <div className="inline-block ml-2 h-[50px] min-h-[1em] w-0.5 self-stretch bg-slate-200 opacity-100 dark:opacity-50"></div>
                </div>
                <div className="flex">
                    <BsPerson size={27} className="text-black mt-3 ml-6 mr-3"/>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-black p-3 text-lg font-medium  inline-flex items-center " type="button">3 adults
                        <svg className="w-2.5 h-2.5 ml-12" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button
                    type="button"
                    className="inline-block rounded-2xl ml-16 bg-indigo-900 px-7 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600">
                    Search
                </button>
            </div>
        </div>
    );
}

export default Header;