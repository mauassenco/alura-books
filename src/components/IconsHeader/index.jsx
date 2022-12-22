import profile from '../../images/perfil.svg'
import cart from '../../images/sacola.svg'
import styled from 'styled-components'

const AppSideNav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icons = [profile, cart]

const IconsHeader = () => {
    return (
        <AppSideNav>
            {icons.map((icon, index) => (
                <Icon key={index}>
                    <img src={icon} alt="" />
                </Icon>
            ))}
        </AppSideNav>
    )
}

export default IconsHeader