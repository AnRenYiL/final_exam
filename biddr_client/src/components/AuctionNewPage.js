import React, { Component } from "react";

import NewAuctionForm from "./NewAuctionForm";
import { Auction } from "../requests";

export default class AuctionNewPage extends Component {

    createAuction = params => {
        Auction.create(params).then(auction => {
            this.props.history.push(`/auctions/${auction.id}`);
        });
    };

    render() {
        return (
            <main>
                <div className="header">Create an Auction</div>
                <NewAuctionForm onCreateQuestion={this.createAuction} />
            </main>
        );
    }
}
