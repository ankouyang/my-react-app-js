import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// serviceWorker   worker进程 运行于浏览器后台的另外一个进程
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
