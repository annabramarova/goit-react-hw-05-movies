import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Preview = styled.div`
display: flex;

@media screen and (max-width: 768px) {
flex-direction: column;}`

export const Img = styled.img`
display: block;
max-height: 400px;`

export const SideBar = styled.div`
@media screen and (min-width: 768px) {
margin-left:20px;
}`

export const Genres = styled.ul`
list-style: none;
display: flex;
padding: 0;
gap: 10px`

export const StyledLynk = styled(Link)`
display:block;
padding: 0;
font-size: 20px;
font-weight:600;
text-decoration: none;
color: black;

&:hover{
    color:red;
}`

export const Title = styled.h2`
margin: 0;
padding:0;`

export const Button = styled.button`
cursor: pointer;
padding: 5px 8px;
min-width: 100px;
color: #000;
border:none;
background-color: #fff;
`