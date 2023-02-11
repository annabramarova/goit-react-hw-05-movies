import styled from "@emotion/styled"
import { NavLink} from 'react-router-dom';

export const Header = styled.header`
`

export const Nav = styled.nav`
display: flex;
gap: 30px;`

export const StyledLynk = styled(NavLink)`
padding: 20px 0;
font-size: 20px;
text-decoration: none;
color: black;


  &.active {
    color: red;
  }`