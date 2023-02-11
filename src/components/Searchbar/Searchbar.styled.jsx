import styled from "@emotion/styled";

export const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
 gap: 10px;
`
export const Input = styled.input`
padding: 5px 8px;
border-radius: 8px;
border: 1px solid black;
width: 100%;
min-width: 200px;
max-width: 300px;
outline: none;
background: #f4f4f4;
color: #000;
`

export const Button = styled.button`
cursor: pointer;
padding: 5px 8px;
min-width: 100px;
color: #000;
border-radius: 8px;
font-weight: bold;
background: #f4f4f4;
  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 4px rgba(0, 0, 0, 0.15);
     &:active{
    box-shadow:  inset 2px 2px 4px rgba(0, 0, 0, 0.15),
    inset -2px -2px 4px rgba(0, 0, 0, 0.15);}
`