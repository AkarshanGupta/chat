import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel.js';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Avatar } from '@mui/material';
// import MicIcon from '@mui/icons-material/Mic';
// import HeadsetIcon from '@mui/icons-material/Headset';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth, db } from './firebase';

function Sidebar() {
  const user = useSelector(selectUser);
  const [Channels, setChannels] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('channels').onSnapshot(snapshot => {
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data()
        }))
      );
    });

    // Unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');
    if (channelName) {
      db.collection('channels').add({
        channelName: channelName
      });
    }
  };

  return (
    <div className="sidebar">
      {/* Sidebar content */}
      <div className="sidebar__top">
        <h3>Fichat</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar__addchannel" />
        </div>
        <div className="sidebar__channelsList">
          {Channels.map(({ id, channel }) => (
            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
          ))}
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon className="sidebar_voiceicon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice connected</h3>
          <p>Stream</p>
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileinfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        {/* <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
