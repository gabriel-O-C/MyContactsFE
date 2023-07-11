import { useEffect, useState } from 'react';
import { toastManager } from '../../../utils/toast';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ text, type }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), text, type },
      ]);
    }

    toastManager.on('addtoast', handleAddToast);

    return () => {
      toastManager.removeListener('addtoast', handleAddToast);
    };
  });

  function removeToastMessage(id) {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          message={message}
          onRemoveMessage={removeToastMessage}
        />
      ))}
    </Container>
  );
}
