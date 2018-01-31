import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import PropTypes from 'prop-types'
// import { BrowserRouter, Route, Link } from 'react-router-dom'

import FaEdit from 'react-icons/lib/fa/edit'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaHeart from 'react-icons/lib/fa/heart'

let countLikes = 0
const Post = ({ _id, name, text, createdAt, authorId, liked, handleRemove, handleLike, handleUpdate, likesQuantity }) => (
    <div className="card mt-5 row" >
        {/* <img className="card-img-top" src='' alt="Card image cap"/> */}
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
        </div>
        <div className="card-body">
            {handleUpdate &&
            <a className="card-link btn btn-primary sm col-md-2"
                href={`${_id}`}
                onClick={handleUpdate}>
                <FaEdit /> 
            </a>}
            
            {handleRemove && 
            <button className="card-link btn btn-primary sm col-md-2" 
                onClick={handleRemove}>
                <FaTrashO />
            </button>}

            {handleLike && 
            <button className="card-link btn btn-primary sm col-md-2"
                onClick={handleLike}>
                <FaHeart /> {liked ? 'Unlike' : 'Like' }
            </button>
            }
        </div>
        <div className="mt-2 mb-2 ml-4"> 
            <small id="fileHelp" className="form-text text-muted">Autor: {authorId} </small>
            <small id="fileHelp" className="form-text text-muted">Data de criação: {moment(createdAt).format('DD/MM/YYYY HH:mm')} </small>
        </div>
    </div>
)

Post.propTypes = {
    _id: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    liked: PropTypes.bool.isRequired,
    handleRemove: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool
    ]).isRequired,
    handleLike: PropTypes.func.isRequired
}

export default Post