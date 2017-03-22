import React, { Component } from 'react';
// import { Meteor } from 'meteor/meteor';
import NotificationSystem from 'react-notification-system';
// import { Dispatcher } from '/imports/services/Dispatcher';

export default class CNotifications extends Component {

  componentDidMount() {
    // Dispatcher.subscribe('notification.add', (notification) => {
    //   this.refs.notificationSystem.addNotification(notification);
    // });
    // Dispatcher.subscribe('notification.remove', (notification) => {
    //   this.refs.notificationSystem.removeNotification(notification);
    // });
  }

  render() {
    return (
      <NotificationSystem ref={ (notif) => { this.notif = notif; } } />
    );
  }
}
