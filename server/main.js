import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check, Posts } from '../imports/api/posts'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'posts.insert'(text) {
    check(text, String)

    if (! this.userId) {
      throw new Meteor.Error('not-authorized')
    }

    Posts.insert({
      text,
      name,
      owner: Meteor.userId(),
      createdAt: new Date(),
      author: Meteor.user().username,
      // image      
    });
  },
  'posts.remove'(postId) {
    check(postId, String)

    Posts.remove(postId)
  },
  'posts.update'(postId) {
    check(postId, String)

    Posts.update(postId)
  }
})