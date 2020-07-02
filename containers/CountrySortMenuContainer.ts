import { connect } from 'react-redux';
import { CountrySortMenu } from '../components/CountrySortMenu';
import { 
  sortByNameAsc, 
  sortByNameDesc, 
  sortByPopulationAsc, 
  sortByPopulationDesc 
} from '../actions/countryActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  sortByNameAsc,
  sortByNameDesc,
  sortByPopulationAsc,
  sortByPopulationDesc
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySortMenu);
