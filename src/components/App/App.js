import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Gallery from '../Gallery/Gallery'


class App extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this)
    this.state = {
      inputValue: '',
    };
  }

  getData(val){
    // gets data from child(SearchBar)
    this.setState({
      inputValue:val
    },()=>this.setState({
      state: this.state
    }))
    console.log('parent: '+this.state.inputValue);
}



  render() {
    return (
      <div className="App">
        <h5>Received by parent: {this.state.inputValue}</h5>
        <SearchBar sendData={this.getData}/>
        <Gallery keyWord={this.state.inputValue}/>
      </div>
    );
  }
}

export default App;
