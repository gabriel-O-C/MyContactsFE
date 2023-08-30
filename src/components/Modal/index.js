import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Container, Footer, Overlay } from './styles';
import Button from '../Button';

export default function Modal({
  danger, title, children, cancelLabel, confirmLabel,
  onCancel, onConfirm, visible,
}) {
  if (!visible) { return null; }
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <div className="modal-body">
          {children}
        </div>
        <Footer>
          <button type="button" className="cancel-button" onClick={onCancel}>
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
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
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Deletar',
};
