import { PageHeader } from '../../components';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar contato"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
