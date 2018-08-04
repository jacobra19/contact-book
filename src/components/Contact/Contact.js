import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';
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
            <Grid item xs={6} sm={4}>
                <Card className={this.state.isMatchFound ?'highlight Contact':'regular Contact'}>
                    <img src={this.props.picture}/>
                    <CardContent className={'my-card-content'}>
                        <Typography variant="subheading" gutterBottom>
                            {this.props.fullNameCapital} <i className={this.props.gender==='male'?'fa fa-male':'fa fa-female'}></i>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                            {this.props.email}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default Contact;