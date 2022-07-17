import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios'


function App() {
  const [beers, setBeers] = useState([])
  const [randomBeer, setRandomBeer] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data)
        setBeers(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        console.log(response.data)
        setRandomBeer(response.data)

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/beers' element={<Beers beers={beers} /> }  />
        <Route path='/beers/:id' element={<BeerDetail beers={beers} /> }  />
        <Route path='/random-beer' element={<RandomBeer beer={randomBeer} /> }  />
        <Route path='*' element={<h1>404- Not Found </h1>} />
      </Routes>  
    </div>
  );
}

export default App;