import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  handleClickRegister() {
    const { username, password } = this.refs;
    const options = {
      username: username.value,
      password: password.value,
      profile: {
        course: 'kickstart FSD#1'
      }
    }
    Accounts.createUser(options, () => {
      console.log('Create new user!');
    })
  }

  handleClickLogin() {
    const { username, password } = this.refs;
    Meteor.loginWithPassword(username.value, password.value);
  }

  render() {
    return (
      <div id="login-form">
        <form>
            <label htmlFor="username">
               Username
            </label>
            <input
              ref='username'
              type="text"
              id='username'
            />
          <br/><br/>
          <label htmlFor="password">
             Password
          </label>
          <input
            ref='password'
            type="password"
            id='password'
          />
        </form>
        <br/><br/>
          <button
            ref='showInfo'
            type='button'
            onClick={ this.handleClickLogin }
          >
            Login
          </button>
        <button
          ref='showInfo'
          type='button'
          onClick={ this.handleClickRegister }
        >
          Register
        </button>
      </div>
    )
  }
}
