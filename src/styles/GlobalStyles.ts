import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body{
    background: #262627;
    color: #d8d8d9;
  }

  button{
    cursor: pointer;
    font-size: 1rem;
    color: #d8d8d9;
  }
`
