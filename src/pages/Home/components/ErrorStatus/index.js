import propTypes from 'prop-types';
import sad from '../../../../assets/images/sad.svg';
import { Button } from '../../../../components';
import { Container } from './styles';

export function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="sad face" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
        <Button type="button" onClick={onTryAgain}>
          Tentar novamente!
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: propTypes.func.isRequired,
};
