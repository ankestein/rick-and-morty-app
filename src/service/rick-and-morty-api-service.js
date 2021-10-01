
export const fetchCharactersFirstPage = () => {
    return  (
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
    )
}


export const fetchCharactersPerPage = (pageNumber) => {
    return  (
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
            .then(response => response.json())
    )
}

/*
export const fetchCharactersPerPage = () => {
    return  (
        fetch(page)
            .then(response => response.json())
    )
}*/