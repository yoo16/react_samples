import React, { useState, useRef } from 'react'
import './Message.css'

export const Calculate = () => {
    const [count, setCount] = useState(0)
    const [price, claculatePrice] = useState(0)
    const inputPrice = useRef(null);

    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click</button>
                <p>You clicked {price} </p>
                <input ref={inputPrice} type="text" />
                <button onClick={() => claculatePrice(100)}>Click</button>
            </div>
        </div>
    )
}

export default Calculate
