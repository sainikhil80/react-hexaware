import React from 'react';

const Person = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hi my name is { props.name }</h1>
        </div> 
    )
}

export default Person;