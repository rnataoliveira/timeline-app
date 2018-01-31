import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import PostsContainer from './PostsContainer'
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
        <PostsContainer />
    </div>
)

export default withTracker(() => (
    { currentUser: Meteor.user() }
))(App)