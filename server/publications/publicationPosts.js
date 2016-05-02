import { Meteor } from 'meteor/meteor';

// Collections
import { Posts } from '../../imports/api/collections/Posts.js';


Meteor.publish('posts.all', () => {
  return Posts.find();
})

Meteor.publish('posts.ada3', () => {
  const findAda3 = { name: 'Ada3' };
  return Posts.find(findAda3);
})
