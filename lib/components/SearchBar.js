import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  doSearch = debounce(() => {
    //console.log('SearchBar doSearch: ' + this.state.searchTerm);
    //this.props.doSearch(this.state.searchTerm);
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);
  handleSearch = (event) => {
    //console.log('SearchBar handleSearch: ' + this.searchInput.value)
    //console.log('SearchBar handleSearch: ' + event.target.value);
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
    
  }
  render() {
    return (
      <input
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}    
      />
    );
  }
}

//export default SearchBar;
export default storeProvider()(SearchBar);