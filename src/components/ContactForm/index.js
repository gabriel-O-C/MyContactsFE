import propTypes from 'prop-types';
import { FormGroup } from '..';
import Input from '../Input';
import Select from '../Select';
import { ButtonContainer, Form } from './styles';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select value="123">
          <option>instagram</option>
          <option>instagram</option>
          <option>instagram</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button
          type="submit"
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
