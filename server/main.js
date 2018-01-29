import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check, Posts } from '../imports/api/posts'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods ({
  'posts.insert'(text, name, image) {
    check(text, String)
    check(name, String)
    check(image, File)

    if (! this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    Posts.insert({
      text,
      name,
      image,
      owner: Meteor.userId(),
      createdAt: new Date(),
      author: Meteor.user().username,
    });
  },
  'posts.remove'(postId) {
    check(postId, String)
    const myPosts = Posts.find({ userId: Meteor.userId.fetch() })
    
    Posts.remove(myPosts[0]._id)
  },
  'posts.update'(postId) {
    check(postId, String)

    Posts.update(postId)
  }
})