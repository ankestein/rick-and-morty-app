import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharactersFirstPage, fetchCharactersPerPage} from "./service/rick-and-morty-api-service";


function App() {

    const [characters, setCharacters] = useState([])
    const [input, setInput] = useState("")
    const [pageNumber, setPageNumber] = useState(1)
    // const [page, setPage] = useState("https://rickandmortyapi.com/api/character/?page=1")


    const handleInput = event => {
        const newInput = event.target.value
        setInput(newInput)
    }

    const filteredCharacters =
        characters.filter(character =>
            character.name.toLowerCase().includes(input.toLowerCase())
        )


    useEffect(() => {
            fetchCharactersPerPage(pageNumber)
                .then(response => response.results)
                .then(results => setCharacters(results))
                .catch(error => console.log(error))
            },
        [pageNumber]
    )


    const numberOfPages = () => {fetchCharactersFirstPage()
        .then(response => response.info.pages)


    console.log(`Number of pages: ${numberOfPages}`)}


    const turnForward = () => {
        if (pageNumber < 34) {
            setPageNumber(pageNumber + 1)
        }
        fetchCharactersPerPage(pageNumber)
    }

    const turnBack = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
        fetchCharactersPerPage(pageNumber)
    }


    return (
        <div>
            <Header title="Rick and Morty Gallery"/>
            <button onClick={turnBack}>Previous Page</button>
            <button onClick={turnForward}>Next Page</button>
            <input type="text" onChange={handleInput}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
