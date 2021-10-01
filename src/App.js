import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./service/rick-and-morty-api-service";


function App() {

    const [characters, setCharacters] = useState([])
    const [input, setInput] = useState("")


    const handleInput = event => {
        const newInput = event.target.value
        setInput(newInput)
    }

    const filteredCharacters =
        characters.filter(character =>
            character.name.toLowerCase().includes(input.toLowerCase())
        )


    useEffect(() => {
            fetchCharacters()
                .then(response => setCharacters(response))
                .catch(error => console.log(error))
            },
        []
    )


    return (
        <div>
            <Header title="Rick and Morty Gallery"/>
            <input type="text" onChange={handleInput}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
