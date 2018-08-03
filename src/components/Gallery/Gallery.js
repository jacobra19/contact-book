import React, { Component } from 'react';
import './Gallery.css'
import axios from 'axios';
import Contact from '../Contact/Contact'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : [],
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
    capitalizeName(first,last){
        let full = first+' '+last;
        let splited =  full.split(' ')
        let uppered = splited.map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        })
        let result = uppered.join(' ');
        return result;
    }


    componentWillReceiveProps(){
        console.log('from gallery '+this.props.keyWord)
    }

    componentDidMount() {
        this.getContacts();
      }


    render(){
        return(
            <div className='Gallery'>
                {this.state.contacts.length>0? 
                this.state.contacts.map((contact,i)=>{
                    return <Contact 
                    keyWord={this.props.keyWord.toLowerCase()} 
                    key={i} 
                    picture={contact.picture.large} 
                    firstName={contact.name.first} 
                    lastName={contact.name.last} 
                    email={contact.email} 
                    gender={contact.gender}
                    fullName={contact.name.first+' '+contact.name.last}
                    fullNameCapital={this.capitalizeName(contact.name.first,contact.name.last)}
                    />

                })
                
                
                
                : null}


                <button onClick={this.getContacts}>LOAD MORE</button>
            </div>
        )
    }
}

export default Gallery;