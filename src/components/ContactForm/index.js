import propTypes from 'prop-types';
import React, {
  forwardRef, useEffect, useImperativeHandle, useState,
} from 'react';
import { FormGroup } from '..';
import UseErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { ButtonContainer, Form } from './styles';

/**
 *
 * @param {{buttonLabel: string, onSubmit: function}} param0
 */
// eslint-disable-next-line no-unused-vars
const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    errors, setError, getErrorMessageByFieldName, removeError,
  } = UseErrors();

  const isFormValid = name && errors.length === 0;

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryID,
    });

    setIsSubmitting(false);
  }

  useImperativeHandle(ref, () => ({
    /**
   * @param {import('../../services/ContactsService').ContactDto} contact
   */
    setFieldsValues: (contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(formatPhone(contact.phone) ?? '');
      setCategoryID(contact.category_id ?? '');
    },
  }), []);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();
        setCategories(categoriesList);
      } finally {
        setIsLoadingCategories(false);
      }
    }
    loadCategories();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'O email é inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }
  return (
    <Form onSubmit={handleSubmit} noValidate name="contact-form">
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
          name="name"
          autoComplete="on"
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          disabled={isSubmitting}
          name="email"
          autoComplete="on"

        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          disabled={isSubmitting}
          name="phone"
          autoComplete="on"
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryID}
          onChange={(event) => setCategoryID(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
          name="category"
        >
          <option value="sem categoria">Sem categoria</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default ContactForm;
