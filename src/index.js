import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import Sidebar from "./Components/Sidebar/Sidebar"
// import "./assets/js/script.js"
import MainContent from './Components/Main_Content/MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <main>
      <Sidebar />
      <MainContent/>
    </main>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
