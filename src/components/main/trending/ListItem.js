import React from "react";
import Card from "./Card";

const ListItem = props => {

        return(
            <div className="flex space-x-3 p-5 -ml-5">
            {props.items.map(place => (
                <Card
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

export default ListItem;