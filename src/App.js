
import './App.css';

function App() {

    const name = "Johnny"

    return (
        <div className="App">

            <h1>Hello World!</h1>
            <p>{name}</p>
            <p>{`Hello, ${name}!`}</p>
            <p>{7 * 11}</p>

        </div>
    );
}

export default App;
