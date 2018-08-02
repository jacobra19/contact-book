import React, { Component } from 'react';
import './SearchBar.css'

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
                    <input type="text" placeholder="Search By Regex" onChange={this.handleChange}/>
                </form>            
            </div>
        )
    }
}

export default SearchBar;