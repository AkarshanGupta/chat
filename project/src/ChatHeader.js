import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import SearchIcon from '@mui/icons-material/Search';
// import HelpIcon from '@mui/icons-material/Help';

function ChatHeader({channelName}) {



  return (
    <div className='chatHeader'>
      {/* <h2>i am the chat screen</h2> */}

      <div className="chatHeader__left">
       <h3>
        <span className='chatHeader__hash'>#</span>
        {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
         <NotificationsIcon/>
        <EditLocationAltIcon/>
        <PeopleAltIcon/>
     
        {/* <div className="chatHeader__search">
            <input placeholder="Search" />
            <SearchIcon />
            <HelpIcon />
        </div> */}
      </div>
    </div>
  )
}

export default ChatHeader
