import "./Header.css"

export default function Header(props) {
    return (
            <header className="header">
                <h1 className="header__title">{props.title}</h1>
                <img className="header__logo" src="https://rickandmortyapi.com/icons/icon-512x512.png" alt="Rick and Morty logo"/>
            </header>
    )
}