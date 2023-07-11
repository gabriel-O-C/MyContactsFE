import PropTypes from 'prop-types';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import { Container } from './styles';

/**
 * @typedef {'default' | 'success' | 'danger'} ToastTypes
 * @param {{text: string, type: ToastTypes }} param0
 * @returns
 */
export function ToastMessage({
  message, onRemoveMessage,
}) {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }
  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
