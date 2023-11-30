import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/ProductContext';
import { FilterContextProvider } from './context/Filter_Context';
import { CartProvider } from './context/Cart_Context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-m072chneob3px0ta.us.auth0.com"
    clientId="d3laKK4Wh6p1q2nGFUkjRPZqcUkNihUN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
