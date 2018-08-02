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
            gender: props.gender,
            isMatchFound: false
        };
    }

    searchKeys(){
        if(this.props.keyWord===''){
            this.setState({
                isMatchFound: false
            })
        } else if (this.state.firstName.match(this.props.keyWord)||this.state.lastName.match(this.props.keyWord)){
            this.setState({
                isMatchFound: true
            })
            console.log('Match FOUND!!!!!!!!!!!!')
        } else{
            this.setState({
                isMatchFound: false
            })
        }

    }
    
    componentWillReceiveProps(){
        this.searchKeys();
    }

    render(){
        return(
            <div className={this.state.isMatchFound ?'highlight Contact':'regular Contact'}>
                <img className='image1' src={this.state.picture}></img>
                <p className='p1'>{this.state.firstName} {this.state.lastName}</p>
                <p className='p1'>{this.state.email}</p>
            </div>
        )
    }
}

export default Contact;