import logo from '../../assets/images/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} width={201} alt="My Contacts" />
    </Container>
  );
}
