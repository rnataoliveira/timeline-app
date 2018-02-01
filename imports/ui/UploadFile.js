import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'jquery'

class UploadFile extends Component {
    constructor(props) {
        super(props)

        this.state = { image: ''}
    }

    handleChange(event) {
        event.preventDefault();
        let image = event.target.value
        console.log("event =", event.target.value);

        let files = ReactDOM.findDOMNode(event.target).files
        console.log(files)
        let reader = new FileReader()
        let img = {
            id: Math.random().toString(36).substring(3),
            src: false,
            data: false,
            url: false
        }
        reader.readAsDataURL(files[0])
        
        reader.onload = (event) => {
            img.src = event.target.result
            let imageData = new FormData()
            imageData.append('image', img)
            img.data = imageData
        };
        this.props.setImage(image)
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputFile">Adicionar Imagem</label>
                <input type="file" className="form-control-file" id="image" aria-describedby="fileHelp"
                    onChange={(event) => this.handleChange(event)}/>
                <small id="fileHelp" className="form-text text-muted">Adicione uma imagem ao seu post</small>
            </div>
        )
    }

}

export default UploadFile