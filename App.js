import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function App() {
  const [messages, setMessages] = useState([]);
  const onSend = useCallback((messages = []) => {
      setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 4,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3, //message ids
        text: 'right?',
        createdAt: new Date(),
        user: {
        _id: 2, //user ids
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'I love SEA',
        createdAt: new Date(),
        user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  return (
    <GiftedChat
      placeholder="not typing"
      showUserAvatar ={true}
      renderUsernameOnMessage = {true}
      alwaysShowSend = {true}
      inverted = {true}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1, //current blue bubble user
        avatar: 'https://placeimg.com/140/140/any',
        name: 'phoenixs',
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
