import styled from 'styled-components'
import LogoBlanc from '../../assets/LOGOBlanc.png'

const FooterLogo = styled.img`
justify-content: space-between;
`

const NavContainer = styled.nav`
justify-content: space-between;
`

function Footer () {
    return (
        <NavContainer>
            <FooterLogo src={LogoBlanc} />
            <span>2020 Kasa, All rights reserved</span>
        </NavContainer>

    )
}

export default Footer