import propTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { FormGroup } from '..';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { ButtonContainer, Form } from './styles';
import useContactForm from './useContactForm';

/**
 *
 * @param {{buttonLabel: string, onSubmit: function}} param0
 */

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    handlePhoneChange,
    handleEmailChange,
    handleNameChange,
    handleSubmit,
    getErrorMessageByFieldName,
    setCategoryID,
    isFormValid,
    categories,
    isLoadingCategories,
    isSubmitting,
    name,
    email,
    phone,
    categoryID,
  } = useContactForm(onSubmit, ref);
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
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
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
