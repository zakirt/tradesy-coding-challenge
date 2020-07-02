
export interface RegionalBloc {
  acronym: string,
  name: string,
  otherAcronyms: string[],
  othernames: string[]
};

export interface CountryObject {
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: string[],
  capital: string,
  altSpellings: string[],
  region: string,
  subregion: string,
  population: number,
  latlng: string[],
  demonym: string,
  area: number,
  gini: number|null,
  timezones: string[],
  borders: string[],
  nativeName: string,
  numericCode: string,
  currencies: any[],
  languages: any[],
  translations: any,
  flag: string,
  regionalBlocs: RegionalBloc[],
  cioc: string
};
