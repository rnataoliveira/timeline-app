import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

import PostForm from './PostForm'

import { Posts } from '../api/posts'

export default withTracker(props => {
  const { match: { params: { _id } } } = props
  
  const post = _id && Posts.findOne({ _id })

  const handleUpdate = post && Meteor.userId() === post.authorId ?
    (name, text) => Meteor.call('posts.update', _id, name, text) : false

  const handleInsert = Meteor.userId() ?
    (name, text, image) => Meteor.call('posts.insert', name, text, image) : false

  return {
    name: post ? post.name : '',
    text: post ? post.text : '',
    image: post ? post.image : '',
    currentUser: Meteor.user(),
    handleSave: handleUpdate || handleInsert
  }
})(PostForm)