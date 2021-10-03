import "./CharacterCard.css"
import styled from "styled-components/macro"

export default function CharacterCard({character}) {
    return (
        <CharacterCardContent>
            <h3>{character.name}</h3>
            <CharacterCardOrigin>{character.origin.name}</CharacterCardOrigin>
            <CharacterCardImage src={character.image} alt={character.name}/>
        </CharacterCardContent>
    )
}

const CharacterCardContent = styled.div`
  margin: 20px;
  width: 250px;
  border: black solid 1px;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #666;
  padding: 10px;
  text-align: center;
  background-color: cadetblue;
  color: aliceblue;
`

const CharacterCardOrigin = styled.div`
  margin-bottom: 10px;
  font-style: italic;
`

const CharacterCardImage = styled.img`
  width: 200px;
  margin-bottom: 30px;
    `