import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import PostsContainer from './PostsContainer'
import CreatePost from './CreatePost'
import { Posts } from '../api/posts'
import UpdatePost from './UpdatePost'

import AccountUIWrapper from './AccountsUIWrapper'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const App = props => (
    <div className="container">
        <Router history={hashHistory}>
            <Route path='/update:_id' component={UpdatePost} />
        </Router>
        <AccountUIWrapper />
        <CreatePost currentUser={props.currentUser}/>
        <PostsContainer />
    </div>
)

export default withTracker(() => (
    { currentUser: Meteor.user() }
))(App)