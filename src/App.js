import './App.css';
import Header from "./components/Header";
import characterResponse from "./character-response.json";
import CharacterCard from "./components/CharacterCard";
import CharacterGallery from "./components/CharacterGallery";


function App() {

    const characters = characterResponse.results;

    return (
              <div>
                <Header title="Rick and Morty App"/>
                <CharacterGallery characters={characters}/>
            </div>

    );
}

export default App;
