import './App.css'
import { Message } from './Message'
import React, { useState } from 'react';

const App = () => {
    let initialState =  {
        count: 0,
    }
    const [state, setstate] = useState(initialState)
    return (
        <div className="App">
            <h2>React App</h2>
            <p>This is App Component!</p>
            <Message />
        </div>
    );
}

export default App;
