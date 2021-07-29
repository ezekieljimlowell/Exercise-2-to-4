import React, { Component } from 'react';

export default class Multiply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:null,
            b:null
        }
        this.setData = this.setData.bind(this);
    }
    setData() {
        this.setState({
            a:13,
            b:23
        })
    }
    
    render() {
        return (
            <div>
                <button type="button" onClick={this.setData}>Change</button>
                <p>{this.state.a*this.state.b}</p>
            </div>
        )
    }
}