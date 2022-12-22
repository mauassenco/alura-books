import styled from 'styled-components'

const AppNav = styled.ul`
    display: flex;
    gap: 20px;
`

const AppNavItem = styled.li`
    /* min-width: 160px; */
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const navItens = ['Categories', 'My Bookshelf', 'Favorites']

const NavItems = () => {
    return (
        <AppNav>
            {navItens.map((item, index) => (
                <AppNavItem className='App-nav-item' key ={index}>
                    <p>{item}</p>
                </AppNavItem>
            ))}
        </AppNav>
    )
}

export default NavItems