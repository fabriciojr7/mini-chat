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

  /* Scrollbar styling for Webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: transparent; /* Makes the track transparent */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #262627; /* Same as background */
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #3a3a3b; /* Slightly lighter on hover */
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: #262627 transparent;
  }
`
