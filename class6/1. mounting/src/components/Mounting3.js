import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'mark'
        }
        console.log('constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                name: 'paul'
            })
        }, 5000)
    }

    render(){
        console.log('render')
        return(
            <h1>
                Name: { this.state.name }
            </h1>
        )
    }
}
export default Header;