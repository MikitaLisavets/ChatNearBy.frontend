import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import App from './views/App';
import Home from './views/Home';
// import Chat from 'views/Chat';
// import Settings from 'views/Settings';

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route component={ App }>
          <Route path='/' component={ Home } />
          {/*
            <Route path='/chat/:id' component={ Chat } />
            <Route path='/settings' component={ Settings } />
          */}
          <Redirect from='/*' to='/' />
        </Route>
      </Router>
    );
  }
}
