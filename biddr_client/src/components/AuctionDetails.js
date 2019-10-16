import React from 'react';
function AuctionDetails(props) {
    return (
        <div >
            <h2>{props.title}</h2>
            <p>
                {props.description} <br />
            </p>
        </div>
    );
}

export default AuctionDetails;
