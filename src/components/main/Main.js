import React from 'react';
import SearchNav from './SearchNav'
import Header from './Header';
import TrendingDestinations from './trending/TrendingDestinations';
import BestOffers from './bestoffers/BestOffers';


const Main = () => {
    return(
        <div className='ml-16'>
            <SearchNav />
            <Header />
            <TrendingDestinations />
            <BestOffers />
        </div>
    );
}

export default Main;