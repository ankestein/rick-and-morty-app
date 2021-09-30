import "./CharacterCard.css"

export default function CharacterCard({character}) {
    return (
        <div className="character-card">
            <h3 className="character-card__name">{character.name}</h3>
            <div className="character-card__origin">{character.origin.name}</div>
            <img className="character-card__image" src={character.image} alt={character.name}/>
        </div>
    )
}

