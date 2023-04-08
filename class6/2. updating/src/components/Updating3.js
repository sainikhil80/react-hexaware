import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Paul'
            })
        }, 5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState)
        document.getElementById('oldstate').innerHTML = "Old state: "+ prevState.name
        return true;
    }

    componentDidUpdate(){
        document.getElementById('newstate').innerHTML = "new state: "+ this.state.name
    }

    render(){
        return <div>
            <h1>Name: { this.state.name }</h1>
            <h1 id='oldstate'></h1>
            <h1 id='newstate'></h1>
        </div>
    }
}
export default Header;