import React, { Component } from 'react';
import Message from './Message';

class App extends Component {

    message = ''
    constructor(props) {
        super(props)
        this.message = props.message
        //state の利用
        this.state = {
            message: 'This is state message!',
            counter: 0,
            time: 0,
        }
        //onClick をバインド
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
        //state の設定
        this.setState((state, props) => ({
            //++ 演算子ではなく + 1
            counter: state.counter + 1,
            message: state.counter
        }))
    }
    componentWillUnmount() {
        //アンマウント時にタイマークリア
        clearInterval(this.timer);
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((state) => ({
                //++ 演算子ではなく + 1
                time: state.time + 1,
            }))
        }, 1000)
    }
}

export default App;
