import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import { Auction } from "../requests";

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auction: null
        };
    }

    componentDidMount() {
        Auction.one(this.props.match.params.id).then(auction => {
            console.log(auction);
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
                    (<BidList
                        bids={this.state.auction.bids}
                    />) : (<div></div>)
                }
            </div>
        );
    }
}

export default AuctionShowPage;
