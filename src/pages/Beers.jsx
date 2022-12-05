import React from "react";
import {Link} from "react-router-dom";

const Beers = ({beers}) => {
    console.log(beers);
    return (
        <div>
            {beers.map((oneBeer) => {
                console.log(oneBeer)
                return (
                    <>
                        <Link to={oneBeer._id}>
                            <img style={{"with" : "auto", "height" : "200px"}} src={oneBeer.image_url} alt="" />
                            <h2>{oneBeer.name}</h2>
                        </Link>
                            <h4>{oneBeer.description}</h4>
                        <hr />
                    </>
                );
            })}
        </div>
    );
};

export default Beers;
