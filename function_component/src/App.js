import './App.css'
import { Message } from './Message'
import Calculate from './Calculate'

function App() {
    let data = {
        style: {
            border: '1px solid white',
            margin: '10px',
            padding: '20px',
        },
        message: 'Message From App!'
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>React App</h2>
                <p>This is App Component!</p>
                <Message data={data} />
                <Calculate />
            </header>
        </div>
    );
}

export default App;
