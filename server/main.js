import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Posts } from '../imports/api/posts'
import { check } from 'meteor/check'

import $ from 'jquery'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'posts.insert'(name, text) {
    check(text, String)
    check(name, String)

    if (! this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    const post = {
      text,
      name,
      authorId: Meteor.userId(),
      createdAt: new Date(),
      likes: [],
      likesCount: 0
    }
    Posts.insert(post)
  },
  'posts.remove'(_id) {
    check(_id, String)
    
    return Posts.remove(_id)
  },
  'posts.like'(_id) {
    check(_id, String)

    const authorId = Meteor.userId()

    const post = Posts.findOne(_id)

    if(!post.likes.some(like => like.authorId === authorId))
      return Posts.update(_id, 
        { 
          $push: { likes: { authorId, liked: true } },
          $set: { likesCount: post.likesCount + 1 }
        })
    else {
      const liked = !post.likes.find(like => like.authorId === authorId).liked
      
      return Posts.update(
        { _id: _id, likes: { $elemMatch: { authorId }} }, 
        { 
          $set: { 
            'likes.$.liked': liked,
            likesCount: post.likesCount === 0 ? 0 : 
              liked ? 
              post.likesCount + 1 : post.likesCount - 1
          } }
      )
    }
  },
  'posts.update'(_id, name, text) {
    check(_id, String)
    check(name, String)
    check(text, String)
  
    const post = Posts.findOne(_id)

    return Posts.update(_id, { $set: { name, text } })
  }
})