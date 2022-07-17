import React from "react";
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


const HomePage = () => {
  return (
    <div>
      <div className="container-fluid mx-sm-2 p-0">
        <div>
          <a href="/beers">
            <img className="card-img-top" src={beers} alt="beers"/>
            <h2 className="px-3 mt-1 fw-light text-black" >All Beers</h2>
            
            <p className="px-3 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </a>
          <img className="card-img-top" src={randomBeer} alt="random beer"/>
          <h2 className="px-3 mt-1 fw-light">Random Beer</h2>
          
          <p className="px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img className="card-img-top" src={newBeer} alt="new-beer"/>
          <h2 className="px-3 mt-1 fw-light">New Beers</h2>
          
          <p className="px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;