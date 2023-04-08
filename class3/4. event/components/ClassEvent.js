import React, { Component } from 'react';

class ClassEvent extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Guest'
        }

        //this.onClickHandler = this.onClickHandler.bind(this)
    }

    // onClickHandler(){
    //     //console.log('button clicked');
    //     // this.setState({
    //     //     name: 'Mark'
    //     // })
    //     console.log(this)
    //     this.setState({
    //         name: 'Paul'
    //     })
    // }

    onClickHandler = () => {
        console.log(this)
        this.setState({
            name: 'Paul'
        })
    }

    render(){
        return(
            <div>
                <h1>Name: { this.state.name }</h1>
                {/*  first option
                <button onClick={ this.onClickHandler.bind(this) }>Update</button> */}

                {/* second option
                <button onClick={ this.onClickHandler }>Update</button> */}

                {/* third option
                <button onClick={ () => this.onClickHandler()}>Update</button> */}

                {/* fourth option */}
                <button onClick={ this.onClickHandler }>Update</button>

            </div>
        )
    }
}
export default ClassEvent;