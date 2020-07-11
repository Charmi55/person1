import React from 'react';

const Person = (props) => {
    console.log(props)
    return(
        <div className = "Person" onClick= {props.onClick}>
            <h1>my name is {props.name} and my favorite color is {props.color}</h1>
        </div>
    
    )
}

export default Person;