import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  :root{
    font-size: 16px;
  }

  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Encode Sans Expanded',sans-serif;
    overflow-x: hidden;
  }
  
  body::-webkit-scrollbar {
  width: 5px;               
  }

  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.black.dark};        
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};    
    border-radius: 20px;       
  }


`;

export default GlobalStyles;
