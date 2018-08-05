import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from '../SearchBar/SearchBar'
import Gallery from '../Gallery/Gallery'

const styles = theme => ({
  app:{
    marginBottom: '24px'
  }
});

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
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <SearchBar sendInputValue={this.getInputValue} sendMaleGenderChange={this.getMaleGenderChange} sendFemaleGenderChange={this.getFemaleGenderChange}/>
        <Gallery keyWord={this.state.inputValue} showMales={this.state.showMales} showFemales={this.state.showFemales}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
