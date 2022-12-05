import React, {useEffect, useState} from "react";

const Random = ({beers}) => {
    const [randombeer, setRandom] = useState();
    useEffect(() => {
        const randomNumer = Math.floor(Math.random() * beers.length);
        const selectedBeer = beers[randomNumer];
        setRandom(selectedBeer);
    }, []);

    return (
        <div>
            {randombeer && (
                <>
                    <p>{randombeer.name}</p>
                    <img src={randombeer.image_url} alt="Beer" />
                    <h5 className="card-body">{randombeer.tagline}</h5>
              <p>Created By: {randombeer.contributed_by}</p>
                </>
            )}
        </div>
    );
};

export default Random;
