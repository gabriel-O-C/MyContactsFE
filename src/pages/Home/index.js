/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line  */
import { Loader, Modal } from '../../components';
import ContactsList from './components/ContactsList';
import { EmptyList } from './components/EmptyList';
import { ErrorStatus } from './components/ErrorStatus';
import { Header } from './components/Header';
import { InputSearch } from './components/InputSearch';
import { SearchNotFound } from './components/SearchNotFound';

import { Container } from './styles';
import useHome from './useHome';

export default function Home() {
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
          {contacts.length < 1 && !isLoading && <EmptyList />}
          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFound searchTerm={searchTerm} />
          )}

          <ContactsList
            filteredContacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
            onToggleOrderBy={handleToggleOrderBy}
            orderBy={orderBy}
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
        </>
      )}
    </Container>
  );
}
