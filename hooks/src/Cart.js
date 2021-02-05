import React, { Component } from 'react'

function Cart(props) {
    return (
        <div style={props.data.style}>
            {props.data.message}
        </div>
    )
}

export default Cart