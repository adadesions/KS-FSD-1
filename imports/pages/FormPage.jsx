import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Component
import PostForm from '../ui/PostForm.jsx';

class FormPage extends Component {
  render() {
    return (
      <section>
        <PostForm />
      </section>
    )
  }
}

export default createContainer(() => {
  return {

  }
}, FormPage);
