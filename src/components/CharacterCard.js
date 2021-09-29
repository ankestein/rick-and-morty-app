import "./CharacterCard.css"

export default function CharacterCard(props) {
    return (
        <div className="characterCard">
            <h3 className="characterCard__name">{props.character.name}</h3>
            <p className="characterCard__origin">{props.character.origin.name}</p>
            <img className="characterCard__image" src={props.character.image} alt="character image"/>
        </div>
    )
}

