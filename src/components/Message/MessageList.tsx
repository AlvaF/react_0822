import React from 'react';
import { FC } from 'react';
import { Messages } from '../../constants';

interface MessageListProps {
  messages: Messages;
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <ul>
      {messageList.map((message, index) => (
        <li key={index}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );
};