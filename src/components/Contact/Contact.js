import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: props.picture,
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            gender: props.gender
        };
    }
    

    render(){
        return(
            <div className='Contact'>
                <img className='image1' src={this.state.picture}></img>
                <p className='p1'>{this.state.firstName} {this.state.lastName}</p>
                <p className='p1'>{this.state.email}</p>
            </div>
        )
    }
}

export default Contact;