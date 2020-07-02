import { connect } from 'react-redux';
import { CountriesList } from '../components/CountriesList';
import { updateCountriesList } from '../actions/countryActions';

const mapStateToProps = (state) => ({
  countries: state.countries
});

const mapDispatchToProps = {
  updateCountriesList
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
