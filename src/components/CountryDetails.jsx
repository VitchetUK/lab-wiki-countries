import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const tdStyle = {
  width: '30%',
};

const CountryDetails = ({ countriesArray }) => {
  const [countries, setCountries] = useState(countriesArray);
  const params = useParams();
  const id = params.id;
  console.log(params);

  const showDetail = countries.find((country) => country.alpha3Code === id);

  return (
    <div className="col-7">
      <h1>{showDetail.name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Capital</td>
            <td>{showDetail.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {showDetail.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {showDetail.borders.map((borderCountry) => {
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      to={borderCountry}
                    >
                      <li>{borderCountry}</li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
