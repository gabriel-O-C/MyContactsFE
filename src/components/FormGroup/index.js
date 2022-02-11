import propTypes from 'prop-types';
import { Container } from './styles';

export default function FormGroup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormGroup.propTypes = {
  children: propTypes.node.isRequired,
};
