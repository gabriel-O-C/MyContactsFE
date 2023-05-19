import React from 'react';
import { PageHeader } from '../../components';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  /**
   *
   * @param {{name: string, email: string, phone: string, categoryID: string}} formData
   */
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryID,
      };

      const response = await ContactsService.createContact(contact);
      console.log({ response });
    } catch {
      alert('Ocorreu um erro ao cadastrar o usuário!');
    }
  }
  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
