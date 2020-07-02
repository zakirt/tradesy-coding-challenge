export const updateCountriesList = (countries) => ({
  type: 'UPDATE_COUNTRIES_LIST',
  payload: countries
});

export const sortByNameAsc = () => ({
  type: 'SORT_BY_NAME_ASC'  
});

export const sortByNameDesc = () => ({
  type: 'SORT_BY_NAME_DESC'
});

export const sortByPopulationAsc = () => ({
  type: 'SORT_BY_POPULATION_ASC'
});

export const sortByPopulationDesc = () => ({
  type: 'SORT_BY_POPULATION_DESC' 
});

export const filterByNumberOfLanguages = (numLanguages: number) => ({
  type: 'FILTER_BY_NUM_LANGUAGES',
  payload: numLanguages
});

export const filterByNumberOfLanguagesGreater = (numLanguages: number) => ({
  type: 'FILTER_BY_NUM_LANGUAGES_GREATER',
  payload: numLanguages
});