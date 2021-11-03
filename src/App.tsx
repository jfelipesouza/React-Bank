import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './pages/routes';
import GlobalStyles from './styles/global';
import { theme } from './styles/themes/default';

const App:React.FC = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  )
}

export default App;