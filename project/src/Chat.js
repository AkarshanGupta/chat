import React, { useState, useEffect } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import GifBoxIcon from '@mui/icons-material/GifBox';
// import InputIcon from '@mui/icons-material/Input';
import Message from './Message.js';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      const unsubscribe = db
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          const newMessages = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              timestamp: data.timestamp ? data.timestamp.toDate() : null,
              message: data.message,
              user: data.user,
            };
          });
          setMessages(newMessages);
        });
  
      return () => {
        unsubscribe();
      };
    }
  }, [channelId]);
  

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
      });

    setInput('');
  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />

      <div className='chat__messages'>
        {messages.map((message) => (
          <Message
            key={message.id}
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className='chat__input'>
        <AddCircleIcon fontSize='large' />
        <form onSubmit={sendMessage}>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button
            disabled={!channelId}
            className='chat__inputButton'
            type='submit'
            onClick={sendMessage}
          >
            SEND MESSAGE
          </button>
        </form>
        {/* <div className='chat__inputIcons'>
          <CardGiftcardIcon fontSize='large' />
          <GifBoxIcon fontSize='large' />
          <InputIcon fontSize='large' />
        </div> */}
      </div>
    </div>
  );
}

export default Chat;
