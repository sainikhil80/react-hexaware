import React from 'react';

const Greeting = () => {
    let user = null;
    if(user){
        return <h1>Hello { user }</h1>
    }else{
        return <h1>Hello Guest</h1>
    }
}
export default Greeting;