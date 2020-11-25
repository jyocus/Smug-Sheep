import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    //Going to pass our current URL into Browser, after login is complete it will be sent back to origin
    redirectUri={window.location.origin}
    >
    <App />
  </ Auth0Provider>,
  document.getElementById('root')
);


  //We might want StrictMode at some point, might need to look more into how it handles bad lifecylce components,etc. 
{/* <React.StrictMode></React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
