import React from "react";
import { CiLocationOn } from 'react-icons/ci'
import {AiOutlineHeart} from 'react-icons/ai'

const BestCard = (props) => {
    return (
        <div className="bg-white w-[76%] px-2 py-5 rounded-3xl">
            <div className="">
                <img src={props.picture} alt="" className="w-[350px] rounded-xl"/>
            </div>
            <div className="mt-4 flex">
                <CiLocationOn className=" mt-1.5 text-slate-500"/>
                <h2 className="font-bold text-lg ml-1">{props.destination}</h2>
            </div>
              <p className="mt-2 text-sm text-slate-400">{props.description}</p>
            <div className="flex space-x-16 ml-3 mt-3">
                <h2 className=" font-bold">{props.price}</h2>
                <AiOutlineHeart className=" mt-1.5 ml-1 text-slate-500"/>
            </div>
        </div>
    );
}

export default BestCard;