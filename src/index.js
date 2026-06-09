import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import PR33_2 from './PR33_2/PR33_2';
import PR35_1 from './PR35_1/PR35_1'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PR33_2/> */}
    {/* <App /> */}
    <PR35_1 />
  </React.StrictMode>
);

// Tugas 32 bagian 3
// import { RecoilRoot } from 'recoil';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RecoilRoot>
//     <App />
//   </RecoilRoot>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
