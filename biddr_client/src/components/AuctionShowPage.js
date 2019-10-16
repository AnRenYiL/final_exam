import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import { Auction, Bid } from "../requests";
import NewBidForm from './NewBidForm'

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auction: null
        };
    }
    createBid = params => {
        Bid.create(params).then(bid => {
            // this.props.history.push(`/auctions/${params.auction_id}`);
            window.location = window.location;
        });
    }
    componentDidMount() {
        Auction.one(this.props.match.params.id).then(auction => {
            this.setState({
                auction: auction
            });
        });
    }
    render() {
        // const { id: currentUser } = this.props.currentUser;
        return (
            <div>
                <AuctionDetails
                    {...this.state.auction}
                />
                {this.state.auction ?
                    (
                        <>
                            <hr></hr>
                            <NewBidForm
                                auction_id={this.state.auction.id}
                                onCreateBid={this.createBid}
                            ></NewBidForm>
                            <BidList
                                bids={this.state.auction.bids}
                            />
                        </>) : (<></>)
                }
            </div>
        );
    }
}

export default AuctionShowPage;
