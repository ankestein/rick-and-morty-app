export const fetchNumberOfPages = () => {
    return (
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(json => json.info.pages)
    )
}


export const fetchCharactersPerPage = (pageNumber) => {
    return (
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Failed to load characters from API")
                }
            })
    )
}

/*
export const fetchCharactersPerPage = () => {
    return  (
        fetch(page)
            .then(response => response.json())
    )
}*/