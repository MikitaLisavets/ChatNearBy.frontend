import React, { Component, PropTypes } from 'react';
import CHeader from '../components/CHeader';
import CNotifications from '../components/CNotifications';
import CLoader from '../components/CLoader';
import { Dispatcher } from '../services/Dispatcher';

export default class App extends Component {

  getInitialState() {
    let locale = localStorage.getItem('locale');
    if (!locale) {
      locale = 'en';
      localStorage.setItem('locale', locale);
    }
    return {
      locale: locale
    }
  }

  componentDidMount() {
    // Dispatcher.subscribe('locale.changed', (locale) => {
    //   this.setState({locale: locale});
    // });
  }

  render() {
    return (
      <div className="page">
        <CHeader/>
        <CLoader/>
        <CNotifications/>
        <main className="page__content">{this.props.children}</main>
      </div>
    );
  }
}