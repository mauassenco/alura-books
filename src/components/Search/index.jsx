import Input from "../Input"
import styled from 'styled-components'
import { useState } from "react"
import { books } from "./dataSearch"

const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    /* height: 270px; */
    width: 100%;

    & img{
        width: 100%;
        height: 100%;
        max-width: 150px;
        max-height: 160px;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 30px;

    & p {
        height: 36px;
        max-width: 200px;
        text-align: center;
        font-weight: bold;
    }

    & img {
        box-shadow: 8px 8px 10px #000 ;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <SearchContainer>
            <Title>Do you know where to start?</Title>
            <SubTitle>Find your book on our bookshelf</SubTitle>
            <Input type="text" placeholder="Find your next book"
                onBlur={
                    e => {
                        const searchedBooks = e.target.value
                        if(searchedBooks.length !== 0){
                            const searchResult = books.filter(
                                book => book.title.toLowerCase().includes(searchedBooks.toLowerCase())
                            )
                            setSearchedBooks(searchResult)
                        }else{
                            setSearchedBooks([])
                        }
                       
                    }
                }
            />
            <ResultContainer>
            {searchedBooks.map((book, index) => (
                <div key={index}>
                    <p>{book.title}</p>
                    <img src={book.thumbnailUrl} alt={`Book ${book.title} cover`} />
                </div>
                )
            )}
            </ResultContainer>

        </SearchContainer>
    )
}

export default Search

