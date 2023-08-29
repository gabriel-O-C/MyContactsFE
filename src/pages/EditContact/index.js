import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, PageHeader } from '../../components';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function EditContact() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldsValues(contact);
        setIsLoading(false);
        setContactName(contact.name);
      } catch {
        toast({
          type: 'danger',
          text: 'Contato não encontrado',
        });
        // TODO implement a solution using react-router-dom
        // window.location.assign('/');
      }
    }
    loadContact();
  }, [id]);
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        onSubmit={() => { }}
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
