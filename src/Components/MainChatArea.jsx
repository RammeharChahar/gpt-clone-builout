import React, { useEffect, useState } from "react";
import Logo from "../icons/chatarea-logo.png";
import UserPic from "../icons/userPic.png";
import { useMyContext } from "./MyContext";
import resData from "./sampleData.json";
import ModalComponent from './ModalComponent';
import { useNavigate } from "react-router-dom";

function MainChatArea() {
  const { chatData, setChatData,feedback,setFeedback, allConversationData, setAllConversationData } =
    useMyContext();
  const [inputData, setInputData] = useState("");
  const currentTime = new Date();
  const formatMinutes = (minutes) => {
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  };
  const formattedTime = `${currentTime.getHours()}:${formatMinutes(
    currentTime.getMinutes()
  )}`;
  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() =>{
      if(feedback.length>0){
        let userFeedback = {
          feedback : feedback,
        }
        setAllConversationData((prevChatData) => [...prevChatData, ...chatData,userFeedback]);
        setFeedback('');
        setChatData([]);
      }
  },[feedback])


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = () => {
    const userQueryData = {
      isUser: true,
      msg: inputData,
      time: formattedTime,
    };

    const matchedResponse = resData.find((item) => item.question === inputData);

    const botResData = {
      isUser: false,
      msg: matchedResponse ? matchedResponse.response : "As an AI Language Model, I don’t have the details",
      time: formattedTime,
    };

    setChatData((prevChatData) => [...prevChatData, userQueryData, botResData]);

    setInputData("");
  };


  return (
    <div className="mainChat_container">
      <p className="mainChat_heading">Bot AI</p>
      {chatData.length > 0 ? (
        ""
      ) : (
        <>
          <div className="mainChat_middleArea">
            <p className="mainChat_text_1">How Can I Help You Today?</p>
            <img src={Logo} alt="" className="mainChat_middleArea_icon" />
          </div>
          <div className="suggestion_chat">
            <div className="chat_suggestion_container">
              <p className="chat_suggestion_heading">Hi, what is the weather</p>
              <p className="chat_suggestion_sec">
                Get immediate AI generated response
              </p>
            </div>
            <div className="chat_suggestion_container">
              <p className="chat_suggestion_heading">Hi, what is my location</p>
              <p className="chat_suggestion_sec">
                Get immediate AI generated response
              </p>
            </div>
            <div className="chat_suggestion_container">
              <p className="chat_suggestion_heading">
                Hi, what is the temperature
              </p>
              <p className="chat_suggestion_sec">
                Get immediate AI generated response
              </p>
            </div>
            <div className="chat_suggestion_container">
              <p className="chat_suggestion_heading">Hi, how are you</p>
              <p className="chat_suggestion_sec">
                Get immediate AI generated response
              </p>
            </div>
          </div>
        </>
      )}
      {chatData.length > 0
        ? <div className="chat_container">
        {chatData.map((item) => {
        if (item.isUser) {
          return (
            <div className="userChat_card">
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
        }else{
            return (
                <div className="botAI_card">
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
        }
      })}
      </div>
        : ""}
      <div className="chatInput_area">
        <input
          type="text"
          className="chatInput_area_inputbox"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="chatInput_area_btn" onClick={handleSubmit}>Ask</button>
        <button className="chatInput_area_btn" onClick={openModal}>Save</button>
        <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default MainChatArea;
