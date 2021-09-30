import './App.css';
import Header from "./components/Header";
import characterResponse from "./character-response.json";
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";


function App() {

    const [characters, setCharacters] = useState([])
    const [input, setInput] = useState("")

    const loadCharacters = () => {
        setCharacters(characterResponse.results)
    }

    const clearCharacters = () => {
        setCharacters([])
    }

    const handleInput = event => {
        const input = event.target.value
        setInput(input)
    }

    const filteredCharacters =
        characters.filter(character =>
        character.name.toLowerCase().includes(input.toLowerCase())
    )

    return (
        <div>
            <Header title="Rick and Morty Gallery"/>
            <button onClick={loadCharacters}>Load characters</button>
            <button onClick={clearCharacters}>Clear characters</button>
            <input type="text" onChange={handleInput}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
