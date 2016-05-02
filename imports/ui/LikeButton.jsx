import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import ReactTestUtils from 'react-addons-test-utils';

// Collections
import { Posts } from '../api/collections/Posts.js';

const inActive = {
  backgroundColor: 'blue',
  width: '120px',
  height: '60px',
  color: '#FFF',
}

const active = {
  backgroundColor: 'red',
  width: '120px',
  height: '60px',
  color: '#FFF',
}

// Stateless fucntions
const likeMeText = () => <h1>LIKE ME</h1>


export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      active: this.props.active,
    }

    this.isActive = this.isActive.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
  }


  handleClickLike() {
    this.setState({
      active: !this.state.active,
    });

    Meteor.call('updatePostActive', this.props)
  }

  isActive() {
    return this.state.active ? active : inActive
  }

  render() {
    return (
      <button
        ref='likeButton'
        type='button'
        style={this.isActive()}
        onClick={ this.handleClickLike }
      >
        { likeMeText() }
      </button>
    )
  }
}

LikeButton.propTypes = {
  postId: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ]),
  active: PropTypes.bool.isRequired,
}
