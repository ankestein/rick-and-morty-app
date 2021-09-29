import './App.css';
import Header from "./components/Header";
import characterResponse from "./character-response.json";
import CharacterCard from "./components/CharacterCard";

function App() {

    const characters = characterResponse.results;

    const name = "Johnny"

    return (
        <div>
            <div>
                <Header title="Rick and Morty App"/>

                <div className="grid-box">
                    <CharacterCard className="grid-box1" character={characters[0]}/>
                    <CharacterCard className="grid-box2" character={characters[1]}/>
                    <CharacterCard className="grid-box3" character={characters[2]}/>
                    <CharacterCard className="grid-box4" character={characters[3]}/>
                    <CharacterCard className="grid-box5" character={characters[4]}/>
                    <CharacterCard className="grid-box6" character={characters[5]}/>
                    <CharacterCard className="grid-box7" character={characters[6]}/>
                    <CharacterCard className="grid-box8" character={characters[7]}/>
                    <CharacterCard className="grid-box9" character={characters[8]}/>
                </div>

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
