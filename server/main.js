import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Posts } from '../imports/api/posts'
import { check } from 'meteor/check'

import $ from 'jquery'

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
      author: Meteor.user().username
    }
    Posts.insert(post)
  },
  'posts.remove'(_id) {
    // console.log(_id)
    // check(_id, Object)
    // const currentPost = Posts.findOne(userId._id)
    // if(!userId) {
    //   throw new Meteor.Error('not-authorized')
    // }
    Posts.find({})
    const post = this
    Posts.remove({_id: post._id})
    // Posts.remove({})
  },
  // 'posts.update'({ userId, newName, newText }) {
  //   check(userId, Object)
  //   if(! this.userId) {
  //     throw new Meteor.Error('not-authorized')
  //   }
  //   Posts.update(postId, { $set: {text: newText, name: newName} })
  // }
})

  