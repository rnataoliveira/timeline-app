import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './main.html'
import App from '../imports/ui/App'
import { BrowseRouter } from 'react-router-dom'

Meteor.startup(() => {
  render((
    <BrowseRouter>
      <App />
    </BrowseRouter>
  ), document.getElementById('render-target'))
})