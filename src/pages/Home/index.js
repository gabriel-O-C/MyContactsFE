/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line  */
import { Link } from 'react-router-dom';
import emptyBox from '../../assets/images/empty-box.svg';
import Arrow from '../../assets/images/icons/arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';
import { Loader, Modal } from '../../components';
import { Header } from './components/Header';
import { InputSearch } from './components/InputSearch';

import { ErrorStatus } from './components/ErrorStatus';
import {
  Card,
  Container,
  EmptyListContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './styles';
import useHome from './useHome';

export default function ContactsList() {
  const {
    contactBeingDeleted,
    contacts,
    filteredContacts,
    handleChangeSearchTerm,
    handleConfirmDeleteContact,
    handleDeleteContact,
    handleToggleOrderBy,
    handleTryAgain,
    hasError,
    isDeleteModalVisible,
    isLoading,
    isLoadingDelete,
    orderBy,
    handleCloseDeleteModal,
    searchTerm,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch
          handleChangeSearchTerm={handleChangeSearchTerm}
          value={searchTerm}
        />
      )}

      <Header
        quantityOfcontacts={contacts.length}
        quantityOffilteredContacts={filteredContacts.length}
        hasError={hasError}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="empty box" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <span> ”Novo contato” </span>à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}
          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifier question" />
              <span>
                Nenhum resultado foi encontrado para{' '}
                <strong>”{searchTerm}”</strong>.
              </span>
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
                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
              <div className="actions">
                <Link to={`/edit/${contact.id}`} title="edit contacts page">
                  <img src={Edit} alt="edit" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="delete" />
                </button>
              </div>
            </Card>
          ))}

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
        </>
      )}
    </Container>
  );
}
