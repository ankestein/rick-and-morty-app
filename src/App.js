import './App.css';
import Header from "./components/Header";
import characterResponse from "./character-response.json";
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";


function App() {

    const [characters, setCharacters] = useState([])

    const loadCharacters = () => {
        setCharacters(characterResponse.results)
    }

    const clearCharacters = () => {
        setCharacters([])
    }




    return (
        <div>
            <Header title="Rick and Morty Gallery"/>
            <button onClick={loadCharacters}>Load characters</button>
            <button onClick={clearCharacters}>Remove characters</button>
            <CharacterGallery characters={characters}/>
        </div>

    );
}

export default App;
