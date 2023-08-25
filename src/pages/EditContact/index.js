import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, PageHeader } from '../../components';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function EditContact() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(1);
        console.log(contactData);
        setIsLoading(false);
      } catch {
        toast({
          type: 'danger',
          text: 'Contato não encontrado',
        });
        // TODO implement a solution using react-router-dom
        window.location.assign('/');
      }
    }
    loadContact();
  }, [id]);
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title="Editar contato"
      />
      <ContactForm
        onSubmit={() => {}}
        key={Math.random()}
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
