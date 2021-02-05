import logo from './logo.svg';
import './App.css';
import './Cart';
import Cart from './Cart';

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
                App Component
      <Cart data={data} />
            </header>
        </div>
    );
}

export default App;
