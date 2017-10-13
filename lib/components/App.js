import React, { Component } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors:  api.getAuthors()
    };
    console.log(this.state);
  }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  render () {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    )
  }
}

// class App extends Component {
//     state = {
//       answer: 42, 
//     };
//     asyncFunc = () => {
//         return Promise.resolve(37);
//       };
//       async componentDidMount() {
//         this.setState({
//           answer: await this.asyncFunc()
//         });
//       }
//     render () {
//       return (
//         <h2>Hello Class Component -- {this.state.answer}</h2>    
//       );
//     }
// }

export default App;

// const App = () => (
//     <h2>Hello React</h2>
// );