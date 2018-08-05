import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    appbar:{
    },
    toolbar:{
        margin:'0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formgroup:{
        margin:'0 auto'
    },
    input: {
        margin: theme.spacing.unit,
        width: '1000px',
        margin: '10px auto 3px auto',
        fontSize: '20px'
    },
  });

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            checkMale: true,
            checkFemale: true
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeMale = this.handleChangeMale.bind(this);
        this.handleChangeFemale = this.handleChangeFemale.bind(this);

    }
    handleChangeInput(event){
        console.log('child: '+event.target.value)
        // sends data to perent (App)
        this.props.sendInputValue(event.target.value);
        event.preventDefault();
    }

    handleChangeMale(){
        this.props.sendMaleGenderChange(!this.state.checkMale)
        this.setState({
            checkMale: !this.state.checkMale
        })
    }
    handleChangeFemale(){
        this.props.sendFemaleGenderChange(!this.state.checkFemale)
        this.setState({
            checkFemale: !this.state.checkFemale
        })
    }


    render(){
        const { classes } = this.props;

        return(
            <AppBar className={classes.appbar} position="sticky" color="default">
                <Toolbar className={classes.toolbar}>
                    <Input
                        className={classes.input}
                        placeholder="Search By Regex"
                        autoFocus={true}
                        onChange={this.handleChangeInput}
                    />
                        <FormGroup className={classes.formgroup} row>
                            <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.state.checkMale}
                                onChange={this.handleChangeMale}
                                />
                            }
                            label="Male"
                            />
                            <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.state.checkFemale}
                                onChange={this.handleChangeFemale}
                                />
                            }
                            label="Female"
                            />
                        </FormGroup>
                </Toolbar>
             

            </AppBar>
        )
    }
}

export default withStyles(styles)(SearchBar);

// export default SearchBar;