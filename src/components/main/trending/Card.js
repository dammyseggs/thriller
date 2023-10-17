import React from "react";
import {BsFillStarFill} from 'react-icons/bs'

const Card = (props) => {
    return (
        <div className="flex bg-white w-[76%] px-2 py-5 rounded-3xl">
            <div className="">
                <img src={props.picture} alt="" className="w-[250px] rounded-xl"/>
            </div>
            <div className="ml-3">
                <h2 className="font-bold text-lg">{props.destination}</h2>
                <p className="mt-2 text-sm text-slate-400">{props.description}</p>
                <h2 className="mt-2 font-bold">{props.price}</h2>
            </div>
            <div className="flex space-x-1">
                <BsFillStarFill className=" mt-1 ml-1 text-amber-400"/>
                <h3>{props.rating}</h3>
            </div>
        </div>
    );
}

export default Card;