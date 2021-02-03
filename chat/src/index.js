import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatApp from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
