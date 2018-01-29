import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
// import { Template } from 'meteor/templating'

export default class Post extends Component {
    constructor(props) {
        super(props)
    }
    
    state = { text: '', image: '', name: '', author: '' }

    removePost() {
        Meteor.call('posts.remove', this.props.post)
    }

    render() {
        let date = moment(this.props.createdAt).format('DD/MM/YYYY HH:mm');
        
        return (
            <div className="card mt-5">
                {/* <img className="card-img-top" src='' alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.text }</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Like</a>
                    <a href="#" className="card-link">Edit</a>
                    <a href="#" className="card-link" onClick={this.removePost.bind(this)}>Delete</a>
                </div>
                <div className="mt-2 mb-2 ml-4"> 
                    <small id="fileHelp" className="form-text text-muted">Data de criação: {date} </small>
                </div>
            </div>
        )
    }
}