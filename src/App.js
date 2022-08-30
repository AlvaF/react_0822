import { useState } from 'react';
import './App.css';
import { AddMessageForm } from './components/AddMessageForm/AddMessageForm';
import { MessageList } from './components/Message/MessageList';

export const App = () => {
  const [messageList, setMessageList] = useState([])

  return (
    <div className="App">
      <MessageList messageList={messageList} />
      <AddMessageForm messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
}

