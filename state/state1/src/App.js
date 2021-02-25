import React, { Component } from 'react';
import Message from './Message';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.message = props.message
        this.state = {
            message: 'This is state message!',
            counter: 0,
            time: 0,
        }
        this.updateMessage = this.updateMessage.bind(this)
    }

    updateMessage() {
        this.setState((state, props) => ({
            counter: state.counter + 1,
            message: state.counter
        }))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>React App</h2>
                    <p>This is App Component!</p>
                    <p>{this.message}</p>
                    <p>{this.state.message}</p>

                    <Message
                        message="Message1" backgroundColor="red" color="white"
                        width="200" height="200" x="100" y="150" />
                    <Message
                        message="Message2" backgroundColor="black" color="white"
                        width="200" height="200" x="100" y="300" radius="20" />

                    <p><button onClick={this.updateMessage}>Update</button></p>
                </header>
            </div>
        )
    }
}

export default App;