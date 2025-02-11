import React from 'react';
import './App.css';
import Message from './Message';
import Calculate from './Calculate';

function App() {
    var items = [
        { name: "コーヒー", price: 300},
        { name: "紅茶", price: 350},
    ]
    return (
        <div className="App">
            <header className="App-header">
                <h2>React App</h2>
                <p>This is App Component!</p>
                <Message
                    message="Message1" backgroundColor="red" color="white"
                    width="200" height="200" x="100" y="150" />
                <Message
                    message="Message2" backgroundColor="white" color="red"
                    width="200" height="200" x="150" y="200" radius="20" />
                <Calculate items={items} />
            </header>
        </div>
    );
}

export default App;