import React from 'react';
import './Message.css';
import { Avatar } from '@mui/material';

function Message({ timestamp, user, message }) {
  const formattedTimestamp = timestamp ? timestamp.toLocaleString() : '';

  return (
    <div className='message'>
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className='message__timestamp'>
            {formattedTimestamp}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}


export default Message;







