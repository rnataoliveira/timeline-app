import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types'
import { withTracker } from 'meteor/react-meteor-data'

import PostContainer from './PostContainer'
import { Posts } from '../api/posts'

const PostsContainer = ({ posts }) => posts.map(
    post => <PostContainer key={post._id} {...post} />
)

PostsContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
}

export default withTracker(() => {
    Meteor.subscribe('posts')
    return {
        posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch()
    }
})(PostsContainer)