/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line  */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import emptyBox from '../../assets/images/empty-box.svg';
import Arrow from '../../assets/images/icons/arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';
import sad from '../../assets/images/sad.svg';
import { Button, Loader, Modal } from '../../components';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './styles';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, sethasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      sethasError(false);
      setContacts(contactsList);
    } catch {
      sethasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }
  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  function handleTryAgain() {
    loadContacts();
  }
  function handleDeleteContact(contact) {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }
  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setContactBeingDeleted(null);
  }

  async function handleConfirmDeleteContact() {
    setIsLoadingDelete(true);
    try {
      await ContactsService.deleteContact(contactBeingDeleted.id);
      setContacts((prevState) => prevState.filter((contact) => (
        contact.id !== contactBeingDeleted.id
      )));
      toast({
        type: 'success',
        text: 'Contato excluído com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Não foi possível excluir o contato. Tente novamente mais tarde.',
      });
    } finally {
      handleCloseDeleteModal();
      setIsLoadingDelete(false);
    }
  }

  return (
    <Container>
      <Loader
        isLoading={isLoading}
      />
      <Modal
        danger
        title={`Você tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
        visible={isDeleteModalVisible}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        isLoading={isLoadingDelete}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
      {contacts.length > 0 && (
      <InputSearchContainer>
        <input
          onChange={handleChangeSearchTerm}
          type="text"
          placeholder="Pesquisar contato..."
          name="search"
        />
      </InputSearchContainer>
      )}

      <Header
        justifyContent={
        hasError
          ? 'flex-end'
          : (
            contacts.length > 0
              ? 'space-between'
              : 'center'
          )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>

            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>

        )}
        <Link to="/new">Novo contato</Link>
      </Header>
      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad face" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente!
            </Button>
          </div>
        </ErrorContainer>
      )}
      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="empty box" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão
                <span> ”Novo contato” </span>
                à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}
          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifier question" />
              <span>Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.</span>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>nome</span>
                <img src={Arrow} alt="arrow" />
              </button>

            </ListHeader>
          )}
            {filteredContacts.map((contact) => (
              <Card key={contact.id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>
                    {contact.category_name && (
                      <small>{contact.category_name}</small>
                    )}
                  </div>
                  <span>{contact.email}</span>
                  <span>{contact.phone}</span>
                </div>
                <div className="actions">
                  <Link to={`/edit/${contact.id}`} title="edit contacts page">
                    <img src={Edit} alt="edit" />
                  </Link>
                  <button type="button" onClick={() => handleDeleteContact(contact)}>
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </Card>
            ))}

        </>
      )}
    </Container>
  );
}
