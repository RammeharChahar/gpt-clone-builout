import React from 'react';
import { useMyContext } from "./MyContext";
import Logo from "../icons/chatarea-logo.png";
import UserPic from "../icons/userPic.png";

function AllConversations() {
  
  const { allConversationData} = useMyContext();

  return (
    <div className='allConversation_container'>
        <p className='allConversation_heading'>Conversation History</p>
        <div className='allConversation_summary'>
        <p className='allConversation_heading_1'>Today’s Chats</p>
        <div className='allConversation_summary_container'>
        {allConversationData.map((item) => {
        if (item.isUser) {
          return (
            <div className="userChat_card-2">
              <div className="userChat_left">
                <img src={UserPic} alt="" className="userChat_pic" />
              </div>
              <div className="userChat_right">
                <p className="userChat_right_name">You</p>
                <p className="userChat_right_msg">{item.msg}</p>
                <p className="userChat_right_time">{item.time}</p>
              </div>
            </div>
          );
        }else if(!item.feedback){
            return (
                <div className="botAI_card-2">
                <div className="userChat_left">
                  <img src={Logo} alt="" className="userChat_pic" />
                </div>
                <div className="userChat_right">
                  <p className="userChat_right_name">Soul AI</p>
                  <p className="userChat_right_msg">
                    {item.msg}
                  </p>
                  <p className="userChat_right_time">{item.time}</p>
                </div>
              </div>
            )
        }else{
           return (
            <div className="feedback_container-2">
                <p className="feedback_text">FeedBack: <span className="feedback_text-2">{item.feedback}</span></p>
            </div>
           )
        }
        })}
        </div>
        </div>
    </div>
  )
}

export default AllConversations