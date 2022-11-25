import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countriesArray, setCountriesArray] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountriesArray(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesArray={countriesArray} />

          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countriesArray={countriesArray} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
