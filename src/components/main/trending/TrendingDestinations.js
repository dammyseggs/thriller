import React from "react";
import france from './images/france.jpg';
import turkey from './images/turkey.jpg';
import london from './images/london.jpg';
import {BsFillStarFill, BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs'
import ListItem from "./ListItem";

const TrendingDestinations = () => {

        const TrendingData = [{
            id : 1,
            picture : france,
            destination : 'Montmartre, France',
            description : 'Visting the best tourist areas chosen by the audience',
            price : '$450,000.00',
            rating : '4/5',
        },
        {
            id : 2,
            picture : turkey,
            destination : 'Istanbul, Turkey',
            description : 'One of the best selling tours to Turkey and visiting it regions ...',
            price : '$600,000.00',
            rating : '4/5',
        },
        {
            id : 3,
            picture : london,
            destination : 'London, UK',
            description : 'London is one of the most beautiful places to visit that ...',
            price : '$450,000.00',
            rating : '4/5',
        }
    ]

    return (
        <div className="mt-28">
            <div className="flex space-x-[75%]">
                <h1 className="text-2xl font-weight:bold ">Trending destinations</h1>
                <div className="flex mt-2">
                    <BsFillArrowLeftSquareFill size={21} style={{color:'#696969'}} />
                    <BsFillArrowRightSquareFill size={21} style={{color:'#312e81'}} className="ml-3"/>
                </div>
            </div>
            <div >
                <ListItem items={TrendingData} />
            </div>
            
        </div>
    );
}

export default TrendingDestinations;