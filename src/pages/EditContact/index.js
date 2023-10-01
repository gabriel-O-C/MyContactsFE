import { Loader, PageHeader } from '../../components';
import ContactForm from '../../components/ContactForm';
import useEditContact from './useEditContact';

export default function EditContact() {
  const {
    contactFormRef, contactName, handleSubmit, isLoading,
  } = useEditContact();
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
