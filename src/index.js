import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
//这里都是使用BrowserRouter路由的方式
import { BrowserRouter} from 'react-router-dom'

// serviceWorker   worker进程 运行于浏览器后台的另外一个进程
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
