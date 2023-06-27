import React from 'react'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import '../../App.css'
import Chatbot from './ChatBot'
import './Chatbot.css'
// import ChatBotSidebar from './ChatBotSidebar'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const ChatBotpage = () => {

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <Chatbot />
        {/* <ChatBotSidebar/> */}
      </div>
    </div>
  )
}

export default ChatBotpage
