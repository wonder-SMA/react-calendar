import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './Components/App';
import CalendarStore from './store';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Segoe UI", Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 1vh 0;
    overflow-x: hidden;
  }

  iframe {
    display: none;
  }

  ul,
  li,
  p {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const StoreContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StoreContext.Provider value={{
    store: new CalendarStore()
  }}>
    <Global />
    <App />
  </StoreContext.Provider>
);
