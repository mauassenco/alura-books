import Logo from '../Logo';
import NavItems from '../NavItens';
import IconsHeader from '../IconsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-around;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <NavItems />
            <IconsHeader />
        </HeaderContainer>
    )
}

export default Header