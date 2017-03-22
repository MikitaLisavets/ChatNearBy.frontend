import React, { Component } from 'react';
import CHeader from '../components/CHeader';
import CNotifications from '../components/CNotifications';
import CLoader from '../components/CLoader';
// import { Dispatcher } from '../services/Dispatcher';

export default class App extends Component {

  // getInitialState() {
  //   let locale = localStorage.getItem('locale');
  //   if (!locale) {
  //     locale = 'en';
  //     localStorage.setItem('locale', locale);
  //   }
  //   return {
  //     locale,
  //   };
  // }

  componentDidMount() {
    // Dispatcher.subscribe('locale.changed', (locale) => {
    //   this.setState({locale: locale});
    // });
  }

  render() {
    return (
      <div className='page'>
        <CHeader />
        <CLoader />
        <CNotifications />
        <main className='page__content'>main</main>
      </div>
    );
  }
}
