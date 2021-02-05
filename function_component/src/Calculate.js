import React, { useState, useRef } from 'react'
import './Message.css'

export const Calculate = () => {
    const tax = 1.1;
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({
        price: 0,
        totalPrice: 0,
    });

    function handleCalculate(e) {
        let price = e.target.value;
        let totalPrice = Math.round(price * tax);
        setValues({
            price: price,
            totalPrice: totalPrice,
        })
    }

    function handleSend(e) {
        alert(values.totalPrice);
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>

            <h2>Show/Hide</h2>
            <div>
                {show ?
                    <div className="message">
                        <p>Hello!</p>
                        <button onClick={() => setShow(false)}>Hide</button>
                    </div>
                    : ''}
                <button onClick={() => setShow(true)}>Show</button>

                <div>
                    <h3>Total Price</h3>
                    <p>{values.totalPrice}</p>
                    <input type="text"
                        defaultValue={values.price}
                        onChange={handleCalculate}
                    />
                </div>

                <div>
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Calculate
