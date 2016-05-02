import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Collection
import { Posts } from '../api/collections/Posts.js';

// Component
import PostItem from '../ui/PostItem.jsx';
import LoginForm from '../ui/LoginForm.jsx';
import LogoutButton from '../ui/LogoutButton.jsx';

class ShowPostPage extends React.Component {
  constructor() {
    super();

  }

  renderPost() {
    // const data = [
    //   { name:'Ada', text:'Hello,World' },
    //   { name:'Mr.A', text:'Hi! AdaCode.io' },
    //   { name:'Anakin', text:'Hello, Vader' },
    //   { name:'Vader', text:'How are you?' },
    // ];
    return this.props.posts.map((post, index) => {
      return <PostItem key={index} data={post} />
    })
  }

  isLogin() {
    console.log(this.props.userId);
    return this.props.userId ? <LogoutButton /> : <LoginForm />
  }

  render() {
    return (
      <section>
        { this.isLogin() }
        <ul>
          { this.renderPost() }
        </ul>
      </section>
    )
  }
}

export default createContainer((props) => {
  const subcribe = Meteor.subscribe('posts.ada3');
  let posts = [];

  if(subcribe.ready()) {
    posts = Posts.find().fetch();
  }
  return {
    posts,
    userId: Meteor.userId(),
  }
}, ShowPostPage);
