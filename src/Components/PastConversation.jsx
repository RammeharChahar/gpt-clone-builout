import React from 'react';
import './styles.css';
import Logo from '../icons/gpt-logo.png';
import ChatIcon from '../icons/new-chat-icon.png';
import { useNavigate } from "react-router-dom";

function PastConversation() {
  const navigate = useNavigate();
  return (
    <div className='sidebar_container'>
      <div className='side_top_container'>
        <img src={Logo} alt='' className='logo_image'/>
        <div className='newChat_container'>
            <p className='newChat_text'>New Chat</p>
            <img src={ChatIcon} alt='' className='newChat_icon' onClick={() => navigate('..')}/>
        </div>
      </div>
      <button className='pastChat_btn' onClick={() => navigate('allConversations')}>
        Past Conversation
      </button>
    </div>
  )
}

export default PastConversation;