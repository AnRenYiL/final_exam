import React from "react";

function NewAuctionForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const newAuction = {
            title: formData.get("title"),
            description: formData.get("description")
        };

        props.onCreateQuestion(newAuction);
        currentTarget.reset();
    }
    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Please Enter Title"
                />
            </div>
            <div className="field">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    placeholder="Please Enter Description"
                    rows="2"
                />
            </div>
            <div className="field">
                <label htmlFor="end_at">End at</label>
                <input
                    type="date"
                    name="end_at"
                    id="end_at"
                />
            </div>
            <div className="field">
                <label htmlFor="reverse_price">Reverse Price</label>
                <input
                    type="number"
                    name="reverse_price"
                    id="reverse_price"
                />
            </div>
            <button className="ui button" type="submit">
                Submit
      </button>
        </form>
    );
}

export default NewAuctionForm;
