import "./Header.css"
import styled from "styled-components/macro"

export default function Header(props) {
    return (
            <HeaderContent>
                <HeaderImage className="header__logo" src="https://rickandmortyapi.com/icons/icon-512x512.png" alt="Rick and Morty logo"/>
                <HeaderTitle className="header__title">{props.title}</HeaderTitle>
            </HeaderContent>
    )
}

const HeaderContent = styled.header `
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderImage = styled.img `
  width: 60px;
`

const HeaderTitle = styled.h1 `
  font-size: 46px;
  color: steelblue;
  margin-left: 20px;
`