import React from "react";
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import image5 from "./images/image5.jpg"
import BestListItem from "./BestListItem";

const BestOffers = () => {

    const BestOfferData = [{
        id : 1,
        picture : image1,
        destination : '7Seasons Apartment',
        description : 'Kensington / London',
        price : '$65.00 / Night',
    },
    {
        id : 2,
        picture : image2,
        destination : 'Along With The Villa',
        description : 'Hungary / Budapest',
        price : '$65.00 / Night',
    },
    {
        id : 3,
        picture : image3,
        destination : 'Resort And Recreation',
        description : 'Williamstreet / Boxon',
        price : '$65.00 / Night',
    },
    {
        id : 4,
        picture : image4,
        destination : 'Beautiful and Classy',
        description : 'Citadines Opera Paris / France',
        price : '$65.00 / Night',
    },
    {
        id : 5,
        picture : image5,
        destination : 'Permanent Peace',
        description : 'Sugar Apartment / Brasil',
        price : '$79.00 / Night',
    }
]

    return (
        <div className=" mt-9">
            <div className="flex space-x-[83%]">
                <h1 className="text-2xl font-weight:bold ">Best Offers</h1>
                <div className="mt-2 text-base font-semibold">
                    <h2>View All</h2>
                </div>
            </div>
            <div >
                <BestListItem items={BestOfferData} />
            </div>

        </div>
    );
}

export default BestOffers;