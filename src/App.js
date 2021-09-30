import './App.css';
import Header from "./components/Header";
import characterResponse from "./character-response.json";
import CharacterCard from "./components/CharacterCard";
import CharacterGallery from "./components/CharacterGallery";


function App() {

    const characters = characterResponse.results;

    const name = "Johnny"

    return (
        <div>

            <div>
                <Header title="Rick and Morty App"/>
                <CharacterGallery characters={characters}/>
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
