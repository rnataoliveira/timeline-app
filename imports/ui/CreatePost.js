import React, { Component } from 'react'

import Posts from '../api/posts.js'
import PropTypes from 'prop-types'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            image: '',
            name: '',
            author: ''
        }
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({ text: event.target.value })
        this.setState({ image: event.target.value })
        this.setState({ name: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { text } = this.state
        const { image } = this.state
        const { name } = this.state

        let self = this

        Meteor.call('posts.insert', text, (error, success) => {
            error ? console.log(error) : self.setState({ text: ''})
        })
    }

    render() {
        return (
            <div className="container">
                { this.props.currentUser ?
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"
                                value={this.state.name} />
                    </div>
                    <div class="form-group">
                        <textarea className="form-control" id="exampleTextarea" rows="3"
                            onChange={this.handleChange.bind(this)} 
                            value={this.state.text}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputFile">imagem</label>
                        <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"
                            value={this.state.image} onChange={this.handleChange.bind(this)} />
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