import React, { Component } from 'react';

class Hello extends Component{

    constructor(){
        super()
        this.state = {
            name: 'Guest',
            email: 'guest@gmail.com'
        }
    }

    onClickHandler = () => {
        // console.log('button clicked')
        // console.log(this.state.name)
        // this.state.name = 'Mark'
        // console.log(this.state.name)
        this.setState({
            name: 'Mark'
        })
    }

    render() {
        return (
             <div>
                 <h1>Hello, { this.state.name }, { this.state.email }</h1>
                 <button onClick={ this.onClickHandler } >Login</button>
             </div>
        );
    }
}
export default Hello;