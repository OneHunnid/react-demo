import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ConfigPanel from './components/ConfigPanel';
import ExitModal from './components/ExitModal';
import PaymentFormWrapper from './components/PaymentForm';

export default class Project {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render (
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
          <Route path="config-panel" component={ConfigPanel}></Route>
          <Route path="exit-modal" component={ExitModal}></Route>
          <Route path="payment-form" component={PaymentFormWrapper} handler="foo" ></Route>
        </Route>
      </Router>,
      document.querySelector('.react-container')
    );
  }
}
