import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  // setSearchTerm = (searchTerm) => {
  //   console.log('App: dentro setSearchTerm');
  //   this.setState({ searchTerm });
  // };
  // articleActions = {
  //   lookupAuthor: (authorId) => this.state.authors[authorId],
  // };
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render () {
    //debugger;
    let { articles, searchTerm } = this.state;
    // if (searchTerm) {
    //   articles = pickBy(articles, (value) => {
    //     return value.title.match(searchTerm)
    //       || value.body.match(searchTerm);
    //   });
    // }
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE)
          || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles={articles}
        />
      </div>
    );
  }
}

export default App;

// const App = () => (
//     <h2>Hello React</h2>
// );