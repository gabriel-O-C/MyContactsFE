import propTypes from 'prop-types';
import { Container } from './styles';

export function InputSearch({ handleChangeSearchTerm, value }) {
  return (
    <Container>
      <input
        onChange={handleChangeSearchTerm}
        type="text"
        placeholder="Pesquisar contato..."
        name="search"
        value={value}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  handleChangeSearchTerm: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
