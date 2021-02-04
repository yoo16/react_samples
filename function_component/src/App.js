import './App.css'
import { Message } from './Message'
import Calculate from './Calculate'

const App = () => {
    return (
        <div className="App">
            <h2>React App</h2>
            <p>This is App Component!</p>
            <Message />
            <Calculate />
        </div>
    );
}

export default App;
