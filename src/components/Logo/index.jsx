import logo from '../../images/logo.svg'
import React from 'react'
import styled from 'styled-components'


const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;    
`

const LogoImage = styled.img`
    margin-right: 10px;

`
const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage
                className='logo__img'
                src={logo}
                alt="Coders Bookshelf logo" />
            <p><strong>Coders</strong> Bookshelf</p>
        </LogoContainer>
    )
}

export default Logo