import { Title } from "../Title";
import styled from "styled-components"

export default function RecomendationCard({ cardTitle, bookTitle, bookDescription, bookImage }) {
    const Card = styled.div`
        /* align-items: center; */
        background-color: #FFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        margin: 20px auto;
        max-width: 600px;
        padding: 25px 20px;
        justify-content: space-around;
        width: 100%;  
    `

    const Button = styled.button`
        background-color: #EB9B00;
        color: #FFF;
        padding: 10px 0px;
        font-size: 16px;
        border: none;
        font-weight: 900;
        display: block;
        text-align: center;
        width: 150px;

        &:hover {
            cursor: pointer;
        }
    `

    const BookDescription = styled.p`
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
                line-clamp: 5; 
        -webkit-box-orient: vertical;
    `

    const BookTitle = styled.h4`
        color: #002F52;
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0;
    `

    const BookImage = styled.img`
        width: 150px;
    `

    return (
        <Card>
            <div>
                <Title
                    fontSize="26px"
                    color="#EB9B00"
                    alignment="left"
                    cardPadding="0">
                    {cardTitle}</Title>
                <BookTitle>{bookTitle}</BookTitle>
                <BookDescription>{bookDescription}</BookDescription>
            </div>
            <div>
                <BookImage src={bookImage} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}

