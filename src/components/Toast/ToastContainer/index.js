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

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          text={message.text}
          type={message.type}
          key={message.id}
        />
      ))}
    </Container>
  );
}
