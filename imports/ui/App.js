import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import PostsContainer from './PostsContainer'
import CreatePost from './CreatePost'
import PostForm from './PostForm'
import PostFormContainer from './PostFormContainer'
import { Posts } from '../api/posts'
import UpdatePost from './UpdatePost'

import AccountUIWrapper from './AccountsUIWrapper'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = props => (
    <BrowserRouter>
        <div className="container">
            <AccountUIWrapper />
            <Switch>
                <Route exact path="/" component={PostFormContainer} />
                <Route path="/update/:_id" component={PostFormContainer}/>
            </Switch>
            <PostsContainer />
        </div>
    </BrowserRouter>
)

export default withTracker(() => (
    { currentUser: Meteor.user() }
))(App)