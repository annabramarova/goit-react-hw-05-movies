import styled from "@emotion/styled";
import {Link} from 'react-router-dom'

export const List = styled.ul`
list-style: circle;
margin-left: 20px;
padding: 0;`

export const Movie = styled(Link)`
display: block;
text-decoration: none;
color: black;
padding: 5px;

&:hover {
    color: red;
    }
`