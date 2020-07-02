import { getNumberOfLanguages } from '../utils/countryFormatters';

export class CountriesService {
  private countries: any[];
  private countriesUrl: string = 'https://restcountries.eu/rest/v2/region/europe';

  async getAllCountries() {
    try {
      const res = await fetch(this.countriesUrl);
      if (!res.ok) {
        throw new Error('CountriesService.getAllCountries(): failed to fetch response.');
      }
      this.countries = await res.json();      
    } catch (e) {
      throw e;  // re-throw to the top caller
    }
    return this.countries;
  }
}
