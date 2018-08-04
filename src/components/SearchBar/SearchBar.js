import React, { Component } from 'react';
import './SearchBar.css'
import { Paper } from '@material-ui/core';
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
            <div className='SearchBar'>
                <form>
                    <Paper elevation={4}>
                    <Input
                        placeholder="Search By Regex"
                        autoFocus={true}
                        onChange={this.handleChange}
                    />
                    </Paper>
                </form>            
            </div>
        )
    }
}

export default SearchBar;