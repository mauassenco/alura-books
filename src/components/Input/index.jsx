
import styled from 'styled-components'

const Input = styled.input`
        background: transparent;
        border: 1px solid #FFF;
        padding: 20px 140px;
        border-radius: 50px;
        width: 20%;
        max-width: 200px;
        color: #FFF;
        font-size: 16px;
        margin-bottom: 10px;

        &::placeholder {
            color: #FFF;
            font-size: 16px;
            text-align: center;
            opacity: 0.5;
            font-style: italic;
        }
`

export default Input