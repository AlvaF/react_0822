import { Container, Grid, List, ListItem } from '@mui/material';
import React from 'react';
import { useState, useEffect, FC, useCallback } from 'react';
import { AddMessageForm } from './components/AddMessageForm/AddMessageForm';
import { MessageList } from './components/Message/MessageList';

import { AUTHOR, Chats, Message, Messages } from './constants'

export const App: FC = () => {
  const [messageList, setMessages] = useState<Messages>([]);

  const addMessage = useCallback((newMessage: Message) => {
    setMessages((prevMesages) => [...prevMesages, newMessage]);
  }, []);
  const [chats] = useState<Chats>([
    { name: 'item', id: 1 },
    { name: 'item2', id: 2 },
    { name: 'item2', id: 3 },
  ]);

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.BOT,
          value: 'Im BOT',
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [messageList, addMessage]);

  return (
    <Container maxWidth="md">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <List>
                {chats.map((item) => {
                  return (
                    <ListItem key={item.id}>
                      {item.id + ':'} {item.name}
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={6}>
              <addMessage addMessage={addMessage} author={name} />
              <MessageList messageList={messages} />
            </Grid>
          </Grid>
        </Container>
  );
};

