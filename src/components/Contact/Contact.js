import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMatchFound: false
        };
    }
    searchKeys(){
        if(this.props.keyWord===''){
            this.setState({
                isMatchFound: false
            })
        } else if (
                this.props.firstName.match(this.props.keyWord)||
                this.props.lastName.match(this.props.keyWord)||
                this.props.fullName.match(this.props.keyWord)
                ){
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
                <img src={this.props.picture}></img>
                <p>{this.props.fullNameCapital} <i className={this.props.gender==='male'?'fa fa-male':'fa fa-female'}></i></p>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Contact;