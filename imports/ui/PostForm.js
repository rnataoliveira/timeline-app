import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', text: '' }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name, text: nextProps.text })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSave(this.state.name, this.state.text)
    this.props.history.push('/')
    this.setState({ name: '', text: '' })
  }

  handleNameChange(event) {
    event.preventDefault()
    const name = event.target.value
    this.setState({ name })
  }

  handleTextChange(event) {
    event.preventDefault()
    const text = event.target.value
    this.setState({ text })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="exampleInputFile">Nome do post</label>
                <input type="text" className="form-control-file"
                    id="exampleInputFile" aria-describedby="fileHelp"
                    value={this.state.name} 
                    onChange={this.handleNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Texto do post</label>
                <textarea className="form-control" id="exampleTextarea" rows="3"
                    onChange={this.handleTextChange.bind(this)}
                    value={this.state.text}
                    placeholder="Digite sua mensagem aqui...">
                </textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  handleSave: PropTypes.func.isRequired
}

export default PostForm