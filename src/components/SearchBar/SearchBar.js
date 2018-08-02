import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    render(){
        return(
            <div className='SearchBar'>
                <form>
                    <input type="text" placeholder="Search By Regex"/>
                </form>            
            </div>
        )
    }
}

export default SearchBar;