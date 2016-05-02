import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class LogoutButton extends React.Component {

  handleClickLogout() {
    Meteor.logout(() => {
      console.log('Logout Succeed')
    });
  }

  render() {
    return (
      <button
        type='button'
        onClick={ this.handleClickLogout }
      >
        Logout
      </button>
    )
  }
}
