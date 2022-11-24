import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { useState } from 'react';
import { Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

function App() {
  const [countriesArray, setCountriesArray] = useState(countries);
  const params = useParams();
  const id = params.id;

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
