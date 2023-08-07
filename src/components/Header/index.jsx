import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/LOGO.png';

const HomeLogo = styled.img`
  height: 70px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: black;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">A Propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
