import React, { useState } from 'react';

const FunctionEvent = () => {

    const [name, setName] = useState('Guest')

    function onClickHandler(){
        setName('Paul')
    }

    return(
        <div>
            <h1>Welcome {name}</h1>
            <button onClick={ onClickHandler }>Update</button>
        </div>
    )
}
export default FunctionEvent;