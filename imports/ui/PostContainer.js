import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

import Post from './Post'

export default withTracker(props => {
  const { authorId, _id, likes } = props

  const handleRemove = Meteor.userId() === authorId ? 
    () => Meteor.call('posts.remove', props._id) : false

  const handleLike = Meteor.userId() ? 
    () => Meteor.call('posts.like', props._id) : false

  const liked = Meteor.userId() ?
    likes.some(like => like.authorId === Meteor.userId() && like.liked) : false

  return {
    ...props,
    handleRemove,
    handleLike,
    liked
  }
})(Post)