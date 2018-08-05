import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Gallery from '../Gallery/Gallery'


class App extends Component {
  constructor(props) {
    super(props);
    this.getInputValue = this.getInputValue.bind(this)
    this.getMaleGenderChange = this.getMaleGenderChange.bind(this)
    this.getFemaleGenderChange = this.getFemaleGenderChange.bind(this)
    this.state = {
      inputValue: '',
      showFemales: true,
      showMales: true
    };
  }

  getInputValue(val){
    // gets data from child(SearchBar)
    this.setState({
      inputValue:val
    },()=>this.setState({
      state:this.state
    }))
  }

  getMaleGenderChange(val){
    this.setState({
      showMales:val
    },()=>this.setState({
      state:this.state
    }))
  }
  getFemaleGenderChange(val){
    this.setState({
      showFemales:val
    },()=>this.setState({
      state:this.state
    }))
  }
  



  render() {
    return (
      <div className="App">
        <SearchBar sendInputValue={this.getInputValue} sendMaleGenderChange={this.getMaleGenderChange} sendFemaleGenderChange={this.getFemaleGenderChange}/>
        <Gallery showMales={this.state.showMales} showFemales={this.state.showFemales} keyWord={this.state.inputValue} showMales={this.state.showMales} showFemales={this.state.showFemales}/>
      </div>
    );
  }
}

export default App;
