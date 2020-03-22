import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@src/page/Home'

export default class Page extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}