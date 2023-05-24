import { useEffect, useState } from 'react';
import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { text, type } = event.detail;
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          text,
          type,
        },
      ]);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  });

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage text={message.text} type={message.type} key={message.id} />
      ))}

    </Container>
  );
}
