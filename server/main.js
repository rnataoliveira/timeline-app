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
      authorId: Meteor.userId(),
      createdAt: new Date(),
      likes: []
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

    // if(!post.likes.some(like => like.authorId === authorId))
    //   totalLikes += 1
    //   Posts.update(_id, {$push: {likes: [...post.likes, {authorId, liked}]}})
    // else
    //   Posts.update(_id, {$push: { ...post, likes: post.likes.map(like =>
    //     like.authorId === authorId ?
    //     { authorId, liked: !like.liked } : like)}})


    if(!post.likes.some(like => like.authorId === authorId))
      return Posts.update(_id, { 
        ...post, 
        likes: [...post.likes, { authorId, liked: true }] 
      })
    else
      return Posts.update(_id, 
        { ...post,
          likes: post.likes.map(like => 
            like.authorId === authorId ? 
            { authorId, liked: !like.liked } : like
          ) 
        })
  },
  'posts.update'(_id, newText, newName) {
    check(_id, String)
    check(newText, String)
    check(newName, String)
  
    const post = Posts.findOne(_id)

    Posts.update(_id,
      { $set: 
        {
          text: newText,
          name: newName
        }
      })

  }
})

  