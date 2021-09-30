import CharacterCard from "./CharacterCard";

export default function CharacterGallery({characters}) {
    return(
        characters.map(character => CharacterCard({character}))
    )
}