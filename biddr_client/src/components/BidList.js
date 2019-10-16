import React from 'react';

function BidList(props) {
    return (
        <ul className="BidList">
            {props.bids.map((bid) => (
                <li className="ui segment" key={bid.id}>
                    ${bid.price} on {new Date(bid.created_at).toDateString()}
                </li>
            ))}
        </ul>
    );
}

export default BidList;
