import propTypes from 'prop-types';
import { useState } from 'react';

import UseErrors from '../../hooks/useErrors';
import { ButtonContainer, Form } from './styles';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import Input from '../Input';
import Select from '../Select';
import { FormGroup } from '..';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const {
    errors,
    setError,
    getErrorMessageByFieldName,
    removeError,
  } = UseErrors();
  const isFormValid = (name && errors.length === 0);
  function handleSubmit(event) {
    event.preventDefault();
  }

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
    <Form
      onSubmit={handleSubmit}
      noValidate
    >
      <FormGroup
        error={getErrorMessageByFieldName('name')}
      >
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Categoria">Categoria</option>
          <option value="instagram">instagram</option>
          <option value="Discord">Discord</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
