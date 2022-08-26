import { useState } from 'react';
import './App.css';
import { Message } from './components/Message/Message';

export const App = () => {
  const [message, setMessage] = useState('Hello from props!')
  return (
    <div className="App">
      <Message message={message} />
    </div>
  );
}

