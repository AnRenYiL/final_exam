import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Auction } from "../requests";

class AuctionIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auctions: []
        };
    }
    componentDidMount() {
        Auction.all().then(auctions => {
            this.setState({
                auctions: auctions
            });
        });
    }
    render() {
        return (
            <main >
                <h1>Auctions</h1>
                <ul>
                    {this.state.auctions.map((auction, index) => (
                        <li key={index}>
                            <p>
                                <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                                <br />
                                <small>
                                    Posted on:{" "}
                                    {new Date(auction.created_at).toLocaleDateString()}
                                </small>
                            </p>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}

export default AuctionIndexPage;
