import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    img:{
        borderRadius:'50%',
        padding:'8px'
    },
    regular:{
        backgroundColor:'white'
    },
    highlight:{
        backgroundColor:'yellow'
    },
    card:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    content:{
        alignSelf:'flex-start',
    }
  });

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
        const { classes } = this.props;
        if((!this.props.showMales && this.props.gender==='male')||(!this.props.showFemales && this.props.gender==='female')){
            return null
        } else {
            return(
                <Grid className={classes.grid} item xs={6} sm={4} >
                    <Card className={[this.state.isMatchFound ?classes.highlight:classes.regular,classes.card]}>
                        <img alt={'avatar'} className={classes.img} src={this.props.picture}/>
                        <CardContent className={classes.content}>
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
}

export default withStyles(styles)(Contact);
