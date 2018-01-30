// import React, { Component } from 'react'


// export default class LikeButton extends Component {
//     constructor() {
//         super()
//         this.state = {
//             liked: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState({
//             liked: !this.state.liked
//         })
//     }

//     render() {
//         const info = this.state.liked ? 'liked' : 'haven\'t liked'
//         const label = this.state.liked ? 'Unlike' : 'Like'
//         return (
//             <div className="row">
//                 <button className="card-link btn btn-primary sm col-md-2" onClick={this.handleClick}><FaHeart /> {label}</button>
//                 {/* <a href="/" onClick={this.handleClick} className="card-link"><FaHeart />{label}</a> */}
//                 <p>
//                     you {info} this. Click to toggle.
//                 </p>
//             </div>
//         )
//     }
// }