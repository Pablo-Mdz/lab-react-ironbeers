import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="beers">
                <img src="../assets/beers.png" alt="all beers" />
            <h1>All Beers</h1>
            </Link>
            <Link to="add">
                <img src="../assets/new-beer.png" alt="add beers" />
                <h1>Add Beer</h1>
                </Link>
            <Link to="random">
                <img src="..assets/random-beer.png" alt="random beers" />
                <h1>Random beer</h1>
                    </Link>
        </div>
    );
};

export default Home;

