import React from 'react';
import ReactDOM from 'react-dom';
import StateApi from 'state-api';
import App from '../components/App';

// const initialData = {
//   articles: {},
//   authors: {},
// };

const store = new StateApi(window.initialData);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );