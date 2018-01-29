import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import PostContainer from './PostContainer'
import CreatePost from './CreatePost'

import { Posts } from '../api/posts'
import AccountUIWrapper from './AccountsUIWrapper'

const App = props => (
    <div className="container">
        <header>
            <h1>Timeline</h1>
        </header>
        <AccountUIWrapper />
        <CreatePost currentUser={props.currentUser}/>
        <PostContainer key={props._id} posts={props.posts}/>
    </div>
)

export default withTracker(() => {
    Meteor.subscribe('posts')
    return {
        posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
        currentUser: Meteor.user(),
    }
})(App)