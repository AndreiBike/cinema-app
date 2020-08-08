import React from 'react';
import {StaticRouter, NavLink} from 'react-router-dom';
import App from './../src/client/App';

function SSRApp(props) {

  const context = {};

  console.log(__isBrowser__);

  return (
    <StaticRouter location={props.url.asPath} context={context}>
      <App />
    </StaticRouter>
  )
}

export default SSRApp;

