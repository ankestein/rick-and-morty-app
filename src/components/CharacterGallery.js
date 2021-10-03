import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import styled from "styled-components/macro"

export default function CharacterGallery({characters}) {
    return (
        <CharacterGalleryContent>
            {
                characters.map(character => <CharacterCard key={character.id} character={character} />)
            }
        </CharacterGalleryContent>
    )
}

const CharacterGalleryContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    `