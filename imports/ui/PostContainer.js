import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types'

import Post from './Post'

const PostContainer = props => (props.posts.map(post=>
    <div className="container">
        <Post key={post._id} name={post.name} text={post.text} image={post.image} author={post.author} createdAt={post.createdAt}/>
    </div>
))

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer