import {connect} from 'react-redux';
import {bindSearchField, search, resetSearch} from '../store/actions';
import Search from '../components/Search';

function mapStateToProps(state) {
    return {
        value: state.searchField
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onTyping: value => dispatch(bindSearchField(value)),
        onSearch: value => dispatch(search(value)),
        onReset: () => dispatch(resetSearch())
    };
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps);

export default SearchContainer(Search);