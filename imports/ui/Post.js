import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

export default class Post extends Component {
    constructor(props) {
        super(props)
    }
    state = { text: '', image: '', name: '', author: '' }

    handleDelete(event) {
        event.preventDefault()
        Meteor.call('posts.remove', this.props.post._id)
    }

    handleUpdate(event) {
        event.preventDefault()
        Meteor.call('posts.remove', this.props.post._id)
    }

    render() {
        return (
            <div className="card mt-5">
                <img className="card-img-top" src={ image } alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ text }</p>
                    <span>Data de criação: { createdAt }</span>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Like</a>
                    <a href="#" className="card-link" onClick={this.handleUpdate.bind(this)}>Edit</a>
                    <a href="#" className="card-link" onClick={this.handleDelete.bind(this)}>Delete</a>
                </div>
            </div>
        )
    }
}