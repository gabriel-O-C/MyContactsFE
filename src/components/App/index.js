import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/Global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import { Header } from '../index';
import AppRoutes from '../../Routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
