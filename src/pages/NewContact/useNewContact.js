import { useRef } from 'react';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);
  /**
   *
   * @param {{name: string, email: string, phone: string, categoryID: string}} contact
   */
  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });

      contactFormRef.current.resetFields();
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }
  return {
    handleSubmit,
    contactFormRef,
  };
}
