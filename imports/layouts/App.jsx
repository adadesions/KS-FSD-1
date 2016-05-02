import { Meteor } from 'meteor/meteor';
import React from 'react';

import ShowPostPage from '../pages/ShowPostPage.jsx';
import FormPage from '../pages/FormPage.jsx';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Hello My React App</h1>
        <ShowPostPage userId={Meteor.userId() || ''}/>
        <FormPage />
      </main>
    )
  }
}
