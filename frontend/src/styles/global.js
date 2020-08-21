import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html{
    font-size: 62.5%;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px 'Roboto Slab', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  .toast {
    background-color: #78D0d3;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
  }

  .toast-erro {
    background-color: red;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
  }
`;