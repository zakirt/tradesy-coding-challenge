import React, { Fragment } from 'react';

export const CountrySortMenu = ({ 
  sortByNameAsc, 
  sortByNameDesc, 
  sortByPopulationAsc, 
  sortByPopulationDesc 
}) => {
  return <Fragment>
    <h5 className="h5">Sort by name</h5>
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" onClick={() => sortByNameAsc()}>A-Z</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => sortByNameDesc()}>Z-A</a>
      </li>         
    </ul>
    <h5 className="h5">Sort by population</h5>
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" onClick={() => sortByPopulationAsc()}>Low to high</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => sortByPopulationDesc()}>High to low</a>
      </li>   
    </ul>
  </Fragment>
};
