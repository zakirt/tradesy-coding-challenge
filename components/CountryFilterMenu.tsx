import React, { Fragment } from 'react';

export const CountryFilterMenu = ({ filterByNumberOfLanguages, filterByNumberOfLanguagesGreater }) => {
  return <Fragment> 
    <h5 className="h5">Filter countries by number of languages</h5>
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" onClick={() => filterByNumberOfLanguages(1)}>1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" onClick={() => filterByNumberOfLanguages(2)}>2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" onClick={() => filterByNumberOfLanguagesGreater(3)}>3</a>
      </li>       
    </ul>
  </Fragment>
};
