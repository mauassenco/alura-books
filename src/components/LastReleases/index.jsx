import { books } from "../Search/dataSearch"
import { Title } from "../Title"
import styled from "styled-components"
import RecomendationCard from "../RecomendationCard"

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

    & img {
        width: 100%;
        height: 100%;
        max-width: 150px;
        max-height: 160px;
    }
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`

const ReleasesContainer = styled.div`
    gap: 30px;

    & p {
        height: 36px;
        overflow: hidden;
        max-width: 200px;
        text-align: center;
        font-weight: bold;
    }

    & img {
        box-shadow: 2px 2px 4px #000000;
    }
`



function LastReleases() {
    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }

    let randomBooks = []

    for (let i = 0; i <= 3; i++) {
        let item = getRandomItem(books)
        item.thumbnailUrl ? randomBooks.push(getRandomItem(books)) : i--;
    }

    let recomendationBook
    
    do{
        recomendationBook = getRandomItem(books)
    }while(!recomendationBook.shortDescription)
   

    return (
        <LastReleasesContainer>
            <Title
                color='#306387'
                fontSize="36px"                
            >Latest releases</Title>

            <NewBooksContainer>
                {randomBooks.map((book, index) => (
                    <ReleasesContainer>
                        <p key={index + 5}>{book.title}</p>
                        <img src={book.thumbnailUrl} key={index} alt={`Book ${book.title} cover`} />
                    </ReleasesContainer>
                    ))
                }
            </NewBooksContainer>

            <RecomendationCard 
                cardTitle = "You may like"
                bookTitle= {recomendationBook.title}
                bookDescription= { recomendationBook.shortDescription}
                bookImage = {recomendationBook.thumbnailUrl}
            />

        </LastReleasesContainer>

    )
}

export default LastReleases

