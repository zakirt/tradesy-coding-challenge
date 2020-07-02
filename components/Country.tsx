import React from 'react';
import { CountryObject } from '../interfaces/Country';
import { getNumberOfLanguages } from '../utils/countryFormatters';

export const Country = ({ country }: { country: CountryObject }) => {
  const { name, flag, subregion, capital, population, languages } = country;
  return (
    <div className="card mb-3 bg-light">
      <div className="row no-gutters">
        <div className="col-sm-4">
           <img src={flag} className="card-img" alt={name} />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <table className="table">
             <tr>
                <th scope="row">Subregion</th>
                <td>{subregion}</td>   
              </tr>
               <tr>
                <th scope="row">Capital</th>
                <td>{capital}</td>   
              </tr>
              <tr>
                <th scope="row">Population</th>
                <td>{population}</td>   
              </tr>
              <tr>
                <th scope="row">Number of Languages</th>
                <td>{getNumberOfLanguages(languages)}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  ); 
};
