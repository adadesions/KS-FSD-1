import React from 'react';
import { render } from 'react-dom';

// Component
import App from '../imports/layouts/App.jsx';


Meteor.startup(function () {
  render(<App />, document.getElementById('render-target'));
})
