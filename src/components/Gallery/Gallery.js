import React, { Component } from 'react';
import './Gallery.css'
import axios from 'axios';
import Contact from '../Contact/Contact'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : [],
            filterContacts:[],
            numOfContacts:9
        };
        this.getContacts = this.getContacts.bind(this)
    }

    getContacts(){
        axios.get(`https://randomuser.me/api/?results=9`)
          .then(res => {
              console.log('initial staet: ',this.state.contacts)
              console.log(res.data.results)
              let myContacts = [...this.state.contacts, ...res.data.results]
              this.setState({
                contacts: myContacts
              })
              console.log('state update: ',this.state.contacts)
          })
          .catch(error=>{
              console.log(error)
          })
    }

    addYellow(){
        
    }

    componentWillReceiveProps(){
        console.log('from gallery '+this.props.keyWord)
        if(this.props.keyWord!==''){

        } else {
            console.log('EMPTY STRING!')
            //remove yellow background
        }
    }

    componentDidMount() {
        this.getContacts();
      }

    render(){
        return(
            <div className='Gallery'>
                {this.state.contacts.length>0? 
                this.state.contacts.map((contact,i)=>{
                    return <Contact keyWord={this.props.keyWord} key={i} picture={contact.picture.large} firstName={contact.name.first} lastName={contact.name.last} email={contact.email} gender={contact.gender}/>
                })
                
                
                
                : null}


                <button onClick={this.getContacts}>LOAD MORE</button>
            </div>
        )
    }
}

export default Gallery;