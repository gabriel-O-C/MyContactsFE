import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useIsMounted from '../../hooks/useIsMounted';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useEditContact() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);
        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        }
      } catch {
        if (isMounted()) {
          toast({
            type: 'danger',
            text: 'Contato não encontrado',
          });
        }
        // TODO implement a solution using react-router-dom
        // window.location.assign('/');
      }
    }
    loadContact();
  }, [id, isMounted]);

  async function handleSubmit(contact) {
    try {
      const updatedContact = await ContactsService.updateContact(id, contact);

      setContactName(updatedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactFormRef,
    contactName,
    handleSubmit,
  };
}
