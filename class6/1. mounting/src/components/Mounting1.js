import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
        console.log('lifecycle: constructor')
    }

    static getDerivedStateFromProps(){
        console.log('lifecycle: getDerivedStateFromProps')
        return true;
    }

    render(){
        console.log('lifecycle: render')
        return <h1>Lifecycle: Mounting</h1>
    }

    componentDidMount(){
        console.log('lifecycle: componentDidMount')
    }
}
export default Header;