import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
    }

    static getDerivedStateFromProps(props){
        return{
            name: props.newname
        }
    }

    onClickHandler = () => {
        console.log('update cliked')
        this.setState({
            name: 'Paul'
        })
    }

    render(){
        return(
            <div>
                <h1>Name: {this.state.name}</h1>
                <button onClick={ this.onClickHandler }>Update</button>
            </div>
        )
    }
}
export default Header;