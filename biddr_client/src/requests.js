// Requests

const BASE_URL = "http://localhost:3000/api/v1";

const Auction = {
    all() {
        return fetch(`${BASE_URL}/auctions`, { credentials: "include" }).then(
            res => res.json()
        );
    },
    one(id) {
        return fetch(`${BASE_URL}/auctions/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/auctions`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

const Session = {
    create(params) {
        // `params` is an object that represents a user
        // { email: 'some@email.com', password: 'some-password' }
        return fetch(`${BASE_URL}/session`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};

const Bid = {
    create(params) {
        return fetch(`${BASE_URL}/auctions/${params.auction_id}/bids`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
}
const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    }
};
export { Auction, Session, Bid, User };
