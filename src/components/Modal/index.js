import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { Container, Footer, Overlay } from './styles';

export default function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  visible,
  isLoading,
}) {
  if (!visible) {
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <div className="modal-body">{children}</div>
        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
  visible: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  cancelLabel: propTypes.string,
  confirmLabel: propTypes.string,
  onCancel: propTypes.func.isRequired,
  onConfirm: propTypes.func.isRequired,
  isLoading: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Deletar',
  isLoading: false,
};
