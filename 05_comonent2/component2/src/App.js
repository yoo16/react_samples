import React from 'react';
import './index.css';
import Message from './Message';

function App() {
    return (
        <div>
            <h2>React App</h2>
            <p>This is App Component!</p>
            <Message
                message="Message1" backgroundColor="red" color="white"
                width="100" height="100" x="100" y="150" />
            <Message
                message="Message2" backgroundColor="green" color="white"
                width="100" height="100" x="150" y="200" radius="20" />
        </div>
    );
}

export default App;
