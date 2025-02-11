import React, { useState } from 'react'

export default function Calculate(props) {
  const [count, setCount] = useState(0)

  const countHandler = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={countHandler}>Click</button>
    </div>
  )
}
