import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

// import LikeButton from './LikeButton'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaHeart from 'react-icons/lib/fa/heart'

export default class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            liked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        })
    }
    
    // Verify to remove only the selected post not all, but for now...
    removePost(_id) {
        const post = this.props
        let self = this
        
        Meteor.call('posts.remove', {...post._id}, (error, success) => {
            error ? console.log(error) : self.setState({ _id: null })
        })
    }

    render() {
        let date = moment(this.props.createdAt).format('DD/MM/YYYY HH:mm');
        const info = this.state.liked ? 'liked' : 'haven\'t liked'
        const label = this.state.liked ? 'Unlike' : 'Like'

        return (
            <div className="card mt-5 row" >
                {/* <img className="card-img-top" src='' alt="Card image cap"/> */}
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.text }</p>
                </div>
                <div className="card-body">
                    <button className="card-link btn btn-primary sm col-md-2" ><FaEdit /></button>
                    <button className="card-link btn btn-primary sm col-md-2" ><FaTrashO /></button>
                    {/* <a href="/" className="card-link"key={this.props._id} onClick={this.removePost.bind(this)}><FaTrashO /></a> */}
                    <button className="card-link btn btn-primary sm col-md-2" onClick={this.handleClick}><FaHeart /> {label}</button>
                    <p>
                        <small> you {info} this. Click to toggle.</small>
                    </p>
                </div>
                <div className="mt-2 mb-2 ml-4"> 
                    {/* <small id="fileHelp" className="form-text text-muted">Autor: {this.props.author} </small> */}
                    <small id="fileHelp" className="form-text text-muted">Data de criação: {date} </small>
                </div>
            </div>
        )
    }
}