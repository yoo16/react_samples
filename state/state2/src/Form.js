import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: props.defaultRoomId,
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ rooms: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("onSubmit");
        console.log(this.state);
    }

    onTextAreaChange(e) {
        this.setState({ body: e.target.value });
    }

    render() {
        let rooms = [
            { id: "1", name: "Room1" },
            { id: "2", name: "Room2" },
            { id: "3", name: "Room3" },
            { id: "4", name: "Room4" }
        ];
        let options = rooms.map((room) => (
            <option key={room.id} value={room.id}>{room.name}</option>
        ));
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <select className="form-control col-3"
                            value={this.state.rooms}
                            onChange={this.onChange}>
                            {options}
                        </select>
                    </div>
                    <textarea
                        className="form-control"
                        value={this.state.body}
                        onChange={this.onTextAreaChange} />
                    <div>
                        <button className="btn btn-primary" type="submit">つぶやく</button>
                    </div>
                </form>
            </div>
        );
    }
}