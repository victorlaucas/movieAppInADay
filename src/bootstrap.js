import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Router, Switch, Route } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import history from './history';
import Header from './components/navbar';
import Index from './components/index';
import FaqItem from './components/faq_item';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Switch>
              <Route path='/' exact component={Index}/>
              <Route path='/faq' component={FaqItem}/>
          </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);


{/* <Router history={history}>
        <Header>
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/movies" component={Index}></Route>
            <Route path="/faq" component={FaqItem}></Route>

          </Switch>
        </Header>
      </Router> */}