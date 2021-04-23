import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import TodoListUI from './TodoListUI';
//  写了一个网页，上线到支持https协议的服务器上，网页就会具备用户第一次访问这个网页需要联网才能访问，出现突然断网的问题，如果使用了registerServiceWorker，在第二次访问这个页面的时候，则可以依旧访问，他是把这个网页存储在浏览器之内，在下次没有网络的时候依旧可以访问这个网页
// import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
