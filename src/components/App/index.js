import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/Global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import { Header } from '../index';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />

      </Container>
    </ThemeProvider>
  );
}

export default App;
