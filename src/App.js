import './App.css';
import Header from "./components/Header";
import characterResponse from "./character-response.json";
import CharacterGallery from "./components/CharacterGallery";


function App() {

    const characters = characterResponse.results;

    return (
              <div>
                <Header title="Rick and Morty Gallery"/>
                <CharacterGallery characters={characters}/>
            </div>

    );
}

export default App;
