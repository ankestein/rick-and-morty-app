import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {
    fetchCharactersFirstPage,
    fetchCharactersPerPage,
    fetchNumberOfPages
} from "./service/rick-and-morty-api-service";


function App() {

    const [characters, setCharacters] = useState([])
    const [input, setInput] = useState("")
    const [pageNumber, setPageNumber] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState()
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

    useEffect(() => {
            fetchNumberOfPages()
                .then(response => setNumberOfPages(response))
                .catch(error => console.log(error))
        },
        []
    )


    //console.log(`Number of pages: ${numberOfPages}`)


    const turnForward = () => {
        if (pageNumber < numberOfPages) {
            setPageNumber(pageNumber + 1)
        }
     }

    const turnBack = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }


    return (
        <div>
            <Header title="Rick and Morty Gallery"/>
            <p>{`Page ${pageNumber}`}</p>
            <button onClick={turnBack}>Previous Page</button>
            <button onClick={turnForward}>Next Page</button>
             <input type="text" onChange={handleInput}/>


            {characters.length === 0 ?
                <p>No characters found</p> :
                <CharacterGallery characters={filteredCharacters}/>
            }
        </div>
    );
}

export default App;
