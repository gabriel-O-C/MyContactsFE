import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Header({ hasError, quantityOfcontacts, quantityOffilteredContacts }) {
  const alignment = hasError
    ? 'flex-end'
    : (quantityOfcontacts > 0
      ? 'space-between'
      : 'center');

  return (
    <Container justifyContent={alignment}>
      {!hasError && quantityOfcontacts > 0 && (
        <strong>
          {quantityOffilteredContacts}
          {quantityOffilteredContacts === 1 ? ' contato' : ' contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: propTypes.bool.isRequired,
  quantityOfcontacts: propTypes.number.isRequired,
  quantityOffilteredContacts: propTypes.number.isRequired,
};
