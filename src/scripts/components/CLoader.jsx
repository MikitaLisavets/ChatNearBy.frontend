import React, { Component } from 'react';
import classnames from 'classnames';
// import { Dispatcher } from '/imports/services/Dispatcher';

export default class CLoader extends Component {

  // getInitialState() {
  //   return {
  //     isLoadedHide: true,
  //   };
  // }

  componentWillMount() {
    // Dispatcher.subscribe('loader.show', () => {
      // this.setState({isLoadedHide: false});
    // });
    // Dispatcher.subscribe('loader.hide', () => {
      // this.setState({isLoadedHide: true});
    // });
  }

  render() {
    const classes = classnames({
      'loader': true,
      // 'loader_hide': this.state.isLoadedHide,
    });
    return (
      <div className={ classes } />
    );
  }
}
