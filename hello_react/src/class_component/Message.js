import React, { Component } from 'react'

export default class Message extends Component {
    message = ''
    style = {}

    constructor(props) {
        super(props)
        this.message = props.message
        this.style = {
            position: 'absolute',
            left: props.x + 'px',
            top: props.y + 'px',
            width: props.width + 'px',
            height: props.height + 'px',
            backgroundColor: props.backgroundColor,
            color: props.color,
            borderRadius: props.radius + 'px',
        }
    }
    render() {
        return (
            <div style={this.style}>
                {this.message}
            </div>
        )
    }
}