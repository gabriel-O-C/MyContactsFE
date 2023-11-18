import propTypes from 'prop-types';
import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

export function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="magnifier question" />
      <span>
        Nenhum resultado foi encontrado para
        {' '}
        <strong>
          ”
          {searchTerm}
          ”
        </strong>
        .
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: propTypes.string.isRequired,
};
