import React, { Component } from 'react';
import Message from './Message';

class App extends Component {

    message = ''
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
    render() {
        return (
            <div>
                <h2>React App</h2>
                <p>{this.message}</p>
                <p>{this.state.message}</p>
                <p>{this.state.time}</p>
                <Message
                    message="Message1" backgroundColor="red" color="white"
                    width="100" height="100" x="100" y="150" />
                <Message
                    message="Message2" backgroundColor="green" color="white"
                    width="100" height="100" x="150" y="200" radius="20" />
                <p><button onClick={this.updateMessage}>Update</button></p>
            </div>
        )
    }
    updateMessage() {
        this.setState((state, props) => ({
            counter: state.counter + 1,
            message: state.counter
        }))
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((state) => ({
                time: state.time + 1,
            }))
        }, 1000)
    }
}

export default App;
