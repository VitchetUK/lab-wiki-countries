import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
  maxHeight: '90vh',
  overflow: 'scroll',
};

const CountriesList = ({ countriesArray }) => {
  if (!countriesArray) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
      <div className="col-5" style={divStyle}>
        <div className="list-group">
          {countriesArray.map((country) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                to={country.alpha3Code}
              >
                <p>{country.name.official}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
