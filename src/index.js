import React from 'react';
import ReactDOM from 'react-dom/client';
import './intro/assets/css/main.css';
import './header/assets/css/headerCss.css';

import LayOut from './pages/LayOut';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayOut />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
