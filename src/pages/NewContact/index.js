import React from 'react';
import { PageHeader } from '../../components';
import ContactForm from '../../components/ContactForm';
import useNewContact from './useNewContact';

export default function NewContact() {
  const { contactFormRef, handleSubmit } = useNewContact();
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
