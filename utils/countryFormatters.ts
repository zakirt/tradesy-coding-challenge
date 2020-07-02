export const getNumberOfLanguages = (languages: any[]): number => (
  Object.keys(languages).length
);

export const sortCountryByNameAsc = (countries: any[]) => (
  countries.sort(compareNamesAsc)
);

export const sortCountryByNameDesc = (countries: any[]) => (
  countries.sort(compareNamesDesc)
);

export const sortCountryByPopulationAsc = (countries) => (
  countries.sort(comparePopulationAsc)
);

export const sortCountryByPopulationDesc = (countries) => (
  countries.sort(comparePopulationDesc)
);

export const filterByNumberOfLanguages = (countries: any[], numLanguages: number) => (
  countries.filter((country) => getNumberOfLanguages(country.languages) === numLanguages)
);

export const filterByNumberOfLanguagesGreater = (countries: any[], numLanguages: number) => (
  countries.filter((country) => getNumberOfLanguages(country.languages) >= numLanguages)
);
  
function compareNamesAsc(a, b): number {
  const result = a.name.localeCompare(b.name);
  return calcResultAsc(result);
}

function compareNamesDesc(a, b): number {
  const result = a.name.localeCompare(b.name);
  return calcResultDesc(result);
}

function comparePopulationAsc(a, b) {
  const result = a.population - b.population;
  return calcResultAsc(result);
}

function comparePopulationDesc(a, b): number {
  const result = a.population - b.population;
  return calcResultDesc(result);
}

function calcResultAsc(result: number): number {
  if (result < 0) {
    return -1;
  }
  if (result > 0) {
    return 1;
  }
  return 0;
}

function calcResultDesc(result: number): number {
  if (result < 0) {
    return 1;
  }
  if (result > 0) {
    return -1;
  }
  return 0;
}