import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './components/Common/ScrollToTop';



ReactDOM.render(
  //<React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App/>
      </Provider>
    </HashRouter>,
  //</React.StrictMode>,
  document.getElementById('root')
);


