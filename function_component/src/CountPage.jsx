import React, { useState } from 'react'

export function CountPage() {
    const [count, setCount] = useState(0)

    const countHandler = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>Clicked {count} times</p>
            <button onClick={countHandler}>Count Up</button>
        </div>
    )
}

export default CountPage
