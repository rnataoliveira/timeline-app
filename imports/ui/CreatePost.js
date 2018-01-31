import React, { Component } from 'react'

import Posts from '../api/posts.js'
import PropTypes from 'prop-types'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            name: ''
        }
    }

    // handleTextUpdate(event) {
    //     event.preventDefault()
    //     event.setState({ text: Posts.text })
        
    // }

    // handleNameUpdate() {
    //     event.preventDefault()
    //     event.setState({ name: Posts.name })
    // }
    
    // handleUpdateSubmit() {
    //     const Post = ({ _id, name, text, createdAt, authorId, handleUpdate }) => (
    //         handleUpdate
    //     )
    // }

    handleTextChange(event) {
        event.preventDefault()
        this.setState({ text: event.target.value })
    }

    handleNameChange(event) {
        event.preventDefault()
        this.setState({ name: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        const { text, name } = this.state
        let self = this

        Meteor.call('posts.insert', text, name, (error, success) => {
            error ? console.log(error) : self.setState({ text: '', name: '' })
        })
    }

    render() {
        return (
            <div className="container">
                { this.props.currentUser ?
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Adicionar nome ao post</label>
                        <input type="text" className="form-control-file"
                            id="exampleInputFile" aria-describedby="fileHelp"
                            value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleTextarea" rows="3"
                            onChange={this.handleTextChange.bind(this)}
                            value={this.state.text}
                            placeholder="Digite sua mensagem aqui...">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Adicionar Imagem</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" 
                            aria-describedby="fileHelp" />
                        <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
                : '' }
            </div>
        )
    }
}

CreatePost.propTypes = {
    currentUser: PropTypes.object
}

export default CreatePost