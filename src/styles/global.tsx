import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  :root{
    font-size: 16px;
  }

  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
  }
  
  body::-webkit-scrollbar {
  width: 12px;               
  }

  body::-webkit-scrollbar-track {
    background: orange;        
  }

  body::-webkit-scrollbar-thumb {
    background-color: blue;    
    border-radius: 20px;       
    border: 3px solid orange;  
  }


`;


export default GlobalStyles;