import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/Global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import { Header } from '../index';
import AppRoutes from '../../Routes/AppRoutes';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <AppRoutes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
