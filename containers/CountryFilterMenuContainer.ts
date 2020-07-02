import { connect } from 'react-redux';
import { CountryFilterMenu } from '../components/CountryFilterMenu';
import { 
  filterByNumberOfLanguages,
  filterByNumberOfLanguagesGreater
} from '../actions/countryActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  filterByNumberOfLanguages,
  filterByNumberOfLanguagesGreater
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFilterMenu);
