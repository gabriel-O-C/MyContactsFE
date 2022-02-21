import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Card, Container, Header, ListContainer, InputSearchContainer,
} from './styles';
import Arrow from '../../assets/images/icons/arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>nome</span>
            <img src={Arrow} alt="arrow" />
          </button>
        </header>
        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && (
                <small>instagram</small>
                )}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${contact.id}`} alt="edit contacts page">
                <img src={Edit} alt="edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="delete" />
              </button>
            </div>
          </Card>
        ))}

      </ListContainer>
    </Container>
  );
}
