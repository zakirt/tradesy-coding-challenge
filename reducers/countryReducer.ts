import { 
  sortCountryByNameAsc, 
  sortCountryByNameDesc,
  sortCountryByPopulationAsc,
  sortCountryByPopulationDesc,
  filterByNumberOfLanguages,
  filterByNumberOfLanguagesGreater
} from '../utils/countryFormatters';

export const countryReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_COUNTRIES_LIST':
      return {
        ...state,
        countries: payload,
        allCountries: payload
      };
    case 'SORT_BY_NAME_ASC':
      return {
        ...state, 
        countries: sortCountryByNameAsc(state.countries.slice())
      };
    case 'SORT_BY_NAME_DESC':
      return {
        ...state, 
        countries: sortCountryByNameDesc(state.countries.slice())
      };  
    case 'SORT_BY_POPULATION_ASC':
      return {
        ...state, 
        countries: sortCountryByPopulationAsc(state.countries.slice())
      };
    case 'SORT_BY_POPULATION_DESC':
      return {
        ...state, 
        countries: sortCountryByPopulationDesc(state.countries.slice())
      };  
    case 'FILTER_BY_NUM_LANGUAGES':    
      return {
        ...state, 
        countries: filterByNumberOfLanguages(state.allCountries, payload)
      };   
    case 'FILTER_BY_NUM_LANGUAGES_GREATER':    
      return {
        ...state, 
        countries: filterByNumberOfLanguagesGreater(state.allCountries, payload)
      };        
    default: 
      return state;
  }
};
