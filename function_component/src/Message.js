import React from 'react'
import './Message.css'

export function Message(props) {

    return (
        <div style={props.data.style} className="message">
            {props.data.message}
        </div>
    )
}

export default Message;