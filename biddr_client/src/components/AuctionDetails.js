import React from 'react';
function AuctionDetails(props) {
    return (
        <div >
            <h2>{props.title}</h2>
            <p>
                {props.description} <br />
            </p>
            <p>End at: {new Date(props.end_at).toDateString()}</p>
        </div>
    );
}

export default AuctionDetails;
