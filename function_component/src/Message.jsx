import React from 'react'

function Message(props) {
    var user = props.user;
    return (
        <div>
            <p>Hello, {user.name}!</p>
            <p>{user.message}</p>
        </div>
    )
}

export default Message