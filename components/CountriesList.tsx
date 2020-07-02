import React, { Component, Fragment } from 'react';
import { Country } from './Country';
import CountrySortMenu from '../containers/CountrySortMenuContainer';
import CountryFilterMenu from '../containers/CountryFilterMenuContainer';
import { CountriesService } from '../services/CountriesService';

export class CountriesList extends Component {
  public state: any = {
    isLoading: true
  };

  async componentDidMount() {
    try {      
      const { updateCountriesList } = this.props;
      const countriesService = new CountriesService();      
      const countries = await countriesService.getAllCountries();
      this.setState({
        countries,
        isLoading: false
      });   
      updateCountriesList(countries);
    } catch (e) {
      console.error(e);
    }
  }       

  render() {
    const { countries } = this.props;
    return (
      <Fragment>
        <CountrySortMenu />
        <CountryFilterMenu />
        {countries.map((country) => (
          <div className="row">
            <div className="col">
              <Country key={country.name} country={country} />
            </div>
          </div>          
        ))}
      </Fragment>
    );
  } 
}
