import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import UseErrors from '../../hooks/useErrors';
import { ButtonContainer, Form } from './styles';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import CategoriesService from '../../services/CategoriesService';
import Input from '../Input';
import Select from '../Select';
import { FormGroup } from '..';
import Button from '../Button';
import Spinner from '../Spinner';

/**
 *
 * @param {{buttonLabel: string, onSubmit: function}} param0
 */

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(true);
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
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
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
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryID}
          onChange={(event) => setCategoryID(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
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
        <Button type="submit" disabled={!isFormValid || isSubmitting}>
          {!isSubmitting && buttonLabel}
          {isSubmitting && <Spinner size={16} />}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired,
};
