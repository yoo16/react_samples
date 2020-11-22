import React, { Component } from 'react'
import socketio from 'socket.io-client'

const socket = socketio.connect('http://localhost:3005')

class ChatForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            message: ''
        }
    }

    //イベント処理
    nameChanged(e) {
        this.setState({ name: e.target.value })
    }
    messageChanged(e) {
        this.setState({ message: e.target.value })
    }
    send() {
        socket.emit('chatMessage', {
            name: this.state.name,
            message: this.state.message
        })
        this.setState({ message: '' })
    }
    render() {
        return (
            <div id='Form'>
                <div className='Name'>
                    名前:
                    <input value={this.state.name} onChange={e => this.nameChanged(e)} />
                </div>
                <div className='Message'>
                    メッセージ:
                    <input value={this.state.message} onChange={e => this.messageChanged(e)} />
                </div>
                <button className='send' onClick={e => this.send()}>送信</button>
            </div>
        )
    }
}

export default ChatForm