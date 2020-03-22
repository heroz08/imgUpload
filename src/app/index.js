import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Switch, Route, Router } from 'react-router-dom';
import history  from '@src/plugins/history';
import mainStore from '@src/store';

import Page from '@src/page';
import page404 from '@src/page/page404'

export default class App extends Component {
  render() {
    return (
      <Provider store={ new mainStore()}>
        <Router history={history}>
          <Switch>
            <Route path='/' component={Page}/>
            <Route path='*' component={page404}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}