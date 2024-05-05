import React from 'react';
import PastConversation from './PastConversation';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  return (
    <div className='main_container'>
      <PastConversation />
      <Outlet />
    </div>
  )
}

export default MainContainer;