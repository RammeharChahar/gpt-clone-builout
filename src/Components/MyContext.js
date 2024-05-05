import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [chatData, setChatData] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [allConversationData, setAllConversationData] = useState([]);

  return (
    <MyContext.Provider value={{feedback, setFeedback, chatData,setChatData,allConversationData,setAllConversationData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
