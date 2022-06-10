import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './Components/App/App.js';

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Global />
    <App />
  </>
);
