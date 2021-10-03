import styled from "styled-components/macro";


export default function Navigation({pageNumber, numberOfPages, setPageNumber, setInput}) {

    const turnForward = () => {
        if (pageNumber < numberOfPages) {
            setPageNumber(pageNumber + 1)
        }
    }

    const turnBack = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    const handleInput = event => {
        const newInput = event.target.value
        setInput(newInput)
    }

    return (
        <NavigationContent>
            <Page>{`Page ${pageNumber}`}</Page>
            <Button onClick={turnBack}>Previous Page</Button>
            <Button onClick={turnForward}>Next Page</Button>
            <Input type="text" onChange={handleInput} placeholder="Filter characters on page"/>
        </NavigationContent>
    )

}

const NavigationContent = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  `

const Page = styled.div `
  margin: 0 10px;
  color: steelblue;
  font-weight: bold;
  `

const Button = styled.button `
  background: lightsteelblue;
  margin: 0 10px;
  `

const Input = styled.input `
  margin: 0 10px;
`