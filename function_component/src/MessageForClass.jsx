import React, { Component } from 'react'

export default class Message2 extends Component {
    message = "";
    // コンストラクタ
    constructor(props) {
        super(props)
        this.name = props.data.message
        this.message = props.data.message
    }
    render() {
        return (
            <div>
                <p>Hello, {this.name}!</p>
                <p>{this.message}</p>
            </div>
        )
    }
}
