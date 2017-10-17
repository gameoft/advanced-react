import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';

import App from 'components/App';
import config from '../config';

// const serverRender = () => {
//   return ReactDOMServer.renderToString(
//     <App />
//   );
// };

const serverRender = async () => {
  //const resp = await axios.get('/data');
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  //console.log(resp.data)
  const store = new StateApi(resp.data);
 
  // const initialData = {
  //   articles: api.getArticles(),
  //   authors: api.getAuthors(),
  // };
  //console.log('***************************************************' + JSON.stringify(initialData))
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data,
  };  
  // return ReactDOMServer.renderToString(
  //   <App initialData={initialData} />
  // );
};

export default serverRender;