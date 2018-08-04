import React, { Component } from 'react';
import './SearchBar.css'
import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regex:''
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event){
        console.log('child: '+event.target.value)
        // sends data to perent (App)
        this.props.sendData(event.target.value);
        event.preventDefault();
    }


    render(){
        return(
            <AppBar className='SearchBar'  position="sticky" color="default">
                <Toolbar >
                    <Input
                        placeholder="Search By Regex"
                        autoFocus={true}
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <Typography variant="subheading" gutterBottom>
                        second line
                    </Typography>
                </Toolbar>
             

            </AppBar>
        )
    }
}

export default SearchBar;