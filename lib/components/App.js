import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  state = this.props.store.getState();
 
  // articleActions = {
  //   lookupAuthor: (authorId) => this.state.authors[authorId],
  // };
  render () {
    //debugger;
    return (
      <ArticleList
        articles={this.state.articles}
        store = {this.props.store}
      />
    )
  }
}

export default App;

// const App = () => (
//     <h2>Hello React</h2>
// );