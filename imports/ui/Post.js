import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

export default class Post extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card mt-5">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Post Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span></span>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Like</a>
                    <a href="#" className="card-link">Edit</a>
                    <a href="#" className="card-link">Delete</a>
                </div>
            </div>
        )
    }
}