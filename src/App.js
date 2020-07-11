import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

export default class App extends Component {
  
  state= {
  //  person: {name:"charmi", color: "blue", Id:0}
    person:[
      {name:"charmi", color: "blue", Id:0},
      {name:"nirav", color: "black", Id:1},
      {name:"ashu", color: "orange", Id:0}
    ]
  }

  removeperson=(Id)=>{
    const newperson = [...this.state.person];
    newperson.splice(Id,1);
    this.setState({person:newperson})

  }

render(){
  return (
    <div className = "App">
     { this.state.person.map((person, Id)=>
      <Person onClick={()=>this.removeperson(Id)} name = {person.name} color={person.color}/>)
    }
    </div>
    
    
  );
}

}

