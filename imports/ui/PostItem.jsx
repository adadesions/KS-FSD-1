import React, { PropTypes } from 'react';

// Components
import LikeButton from './LikeButton.jsx';
import DeleteButton from './DeleteButton.jsx';

export default class PostItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.data.text} POST BY
        {this.props.data.name}
        <LikeButton postId={this.props.data._id} active={this.props.data.active}/>
        <DeleteButton postId={this.props.data._id} />
      </li>
    )
  }
}

PostItem.propTypes = {
  data: PropTypes.object.isRequired,
}
