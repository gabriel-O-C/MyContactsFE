import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import Spinner from '../Spinner';

export default function Button({
  type, isLoading, disabled, children, danger,
  onClick,
}) {
  return (
    <StyledButton
      disabled={disabled || isLoading}
      type={type}
      danger={danger}
      onClick={onClick}
    >
      {isLoading ? <Spinner size={16} /> : children }
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
};
