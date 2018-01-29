import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Posts } from '../imports/api/posts'
import { check } from 'meteor/check'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'posts.insert'(text, name) {
    check(text, String)
    check(name, String)

    if (! this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    const post = {
      text,
      name,
      owner: Meteor.userId(),
      createdAt: new Date(),
      author: Meteor.user().username,
    }
    Posts.insert(post)
  },
  'posts.remove'(postId) {
    check(postId, String)
    if(! this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    Posts.remove(postId)
  },
  'posts.update'(postId) {
    check(postId, String)
    if(! this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    Posts.update(postId, { $set: {text: this.post.text, name: this.post.name} })
  }
})