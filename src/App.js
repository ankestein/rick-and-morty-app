
import './App.css';
import Header from "./components/Header";

function App() {

    const name = "Johnny"

    return (
        <div>
            <div>
                <Header title="Rick and Morty App"/>
                <Header title="Another title"/>
            </div>



            <div className="App">
                <h2>Hello World!</h2>
                <p>{name}</p>
                <p>{`Hello, ${name}!`}</p>
                <p>{7 * 11}</p>

            </div>
        </div>
    );
}

export default App;
