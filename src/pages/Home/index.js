import {
  Card, Container, Header, ListContainer, InputSearchContainer,
} from './styles';
import Arrow from '../../assets/images/icons/arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>nome</span>
            <img src={Arrow} alt="arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Chaves</strong>
              <small>instagram</small>
            </div>
            <span>gabriel@mail.com</span>
            <span>(45) 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/" alt="edit contacts page">
              <img src={Edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Chaves</strong>
              <small>instagram</small>
            </div>
            <span>gabriel@mail.com</span>
            <span>(45) 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/" alt="edit contacts page">
              <img src={Edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gabriel Chaves</strong>
              <small>instagram</small>
            </div>
            <span>gabriel@mail.com</span>
            <span>(45) 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/" alt="edit contacts page">
              <img src={Edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
