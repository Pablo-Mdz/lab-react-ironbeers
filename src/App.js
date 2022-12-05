import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx'
import {useEffect, useState } from  'react'
import AddBeer from './pages/AddBeer';
import Random from './pages/Random';
import Beers from './pages/Beers';
import axios from 'axios'
import Beer from './pages/Beer';


function App() {

const [beers , setBeers] = useState([])

    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            setBeers(response.data);
        });
    }, []);  

    return (
        <div className="App">
            <Link to="/">
            <h1>Home</h1>
            </Link>
     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beers" element={<Beers  beers={beers}/>} />
                <Route path="/beers/:id" element={<Beer  beers={beers}/>} />
                <Route path="/random" element={<Random beers={beers}/>} />
                <Route path="/add" element={<AddBeer beers={beers} setBeers={setBeers}/>} />

            </Routes>
        </div>
    );
}

export default App;
