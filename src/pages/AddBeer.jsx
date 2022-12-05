import React from "react";
import {useState} from "react";

const AddBeer = ({beers, setBeers}) => {
    // const [food, setFood] = useState(props.food)
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState(0); //number
    const [contributed_by, setContributed_by] = useState("");

    const handleSubmit = (event) => {
        // Prevent the site from being refreshed
        event.preventDefault();
        // Create a new beer based on the state values
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            contributed_by,
        };

        // Add new beer to list
        setBeers([newBeer, ...beers]);

        // Reset input fields
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips(0);
        setContributed_by("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="tagline">Image</label>
                <input
                    value={tagline}
                    type="text"
                    onChange={(e) => setTagline(e.target.value)}
                />
                {/* render antd <input /> type="text" here */}

                <label htmlFor="description">Description</label>
                <input
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* render antd <input /> type="number" here */}

                <label htmlFor="first_brewed">First Brewed</label>
                <input
                    value={first_brewed}
                    type="text"
                    onChange={(e) => setFirst_brewed(e.target.value)}
                />
                {/* render antd <input /> type="text" here */}

                <label htmlFor="brewers_tips">Brewers tips</label>
                <input
                    value={brewers_tips}
                    type="number"
                    onChange={(e) => setBrewers_tips(e.target.value)}
                />
                {/* render antd <input /> type="number" here */}

                <label htmlFor="contributed_by">Contributed by</label>
                <input
                    value={contributed_by}
                    type="text"
                    onChange={(e) => setContributed_by(e.target.value)}
                />

                <button type="submit">Create</button>
            </form>
            );
        </>
    );
};

export default AddBeer;
