// import React, { Component } from 'react'

// import Posts from '../api/posts.js'
// import PropTypes from 'prop-types'

// import PostContainer from './PostContainer'
// import Post from './Post'

// class UpdatePost extends Component {

//     handleSubmit(event) {
//         handleUpdate
//     }
    
//     componentDidMount() {
//         const post = Posts.findOne(_id)
//         text = post.text
//         name = post.name
//     }

//     // handleTextChange(event) {
//     //     this.setState({[event.target.text]: event.target.value})
//     // }

//     handleNameChange(event) {
//         this.setState({[event.target.name]: event.target.value})
//     }

//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit={this.handleSubmit.bind(this)}>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputFile">Atualizar nome do post</label>
//                         <input type="text" className="form-control-file"
//                             id="exampleInputFile" aria-describedby="fileHelp"
//                             value={name}/>
//                     </div>
//                     <div className="form-group">
//                         <textarea className="form-control" id="exampleTextarea" rows="3"
//                             value={text}> {text}
//                         </textarea>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputFile">Adicionar Imagem</label>
//                         <input type="file" className="form-control-file" id="exampleInputFile" 
//                             aria-describedby="fileHelp" />
//                         <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form> 
//             </div>
//         )
//     }
// }

// UpdatePost.propTypes = {
//     currentUser: PropTypes.object
// }

// export default UpdatePost