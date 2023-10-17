import React from "react";
import BestCard from './BestCard';

const BestListItem = props => {

    return(
        <div className="flex space-x-3 p-5 -ml-5">
        {props.items.map(place => (
            <BestCard
                id={place.id}
                picture={place.picture}
                destination={place.destination}
                description={place.description}
                price={place.price}
                rating={place.rating}
            />
        ))}
        </div>
    );
}

export default BestListItem;