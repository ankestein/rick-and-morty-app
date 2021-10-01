import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./service/rick-and-morty-api-service";


function App() {

    const [characters, setCharacters] = useState([])
    const [input, setInput] = useState("")
    const [pageNumber, setPageNumber] = useState(1)


    const handleInput = event => {
        const newInput = event.target.value
        setInput(newInput)
    }

    const filteredCharacters =
        characters.filter(character =>
            character.name.toLowerCase().includes(input.toLowerCase())
        )


    useEffect(() => {
            fetchCharactersPerPage()
                .then(response => setCharacters(response))
                .catch(error => console.log(error))
            },
        [pageNumber]
    )

    const fetchCharactersPerPage = (pageNumber) => {
        return  (
            fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
                .then(response => response.json())
                .then(json => json.results)
        )
    }

const turnForward = () => {
        setPageNumber(pageNumber + 1)
    fetchCharactersPerPage(pageNumber)
}

const turnBack = () => {
        setPageNumber(pageNumber -1)
    fetchCharactersPerPage(pageNumber)
}



    return (
        <div>
            <Header title="Rick and Morty Gallery"/>
            <button onClick={turnBack}>Previous</button>
            <button onClick={turnForward}>Next</button>
            <input type="text" onChange={handleInput}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
