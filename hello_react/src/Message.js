import React from 'react'

export default function Message(props) {
    var message = props.message
    var style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        width: props.width + 'px',
        height: props.height + 'px',
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: props.radius + 'px',
    }
    return (
        <div style={style}>
            {message}
        </div>
    )
}
