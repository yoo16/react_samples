import './App.css'
import CountPage from './CountPage';
import Message from './Message'

function App() {
    var user = {
        name: "Tokyo",
        message: 'Message From App!'
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>React App</h2>
                <p>This is App Component!</p>
                <Message user={user} /> 
                <CountPage />
            </header>
        </div>
    );
}

export default App;
