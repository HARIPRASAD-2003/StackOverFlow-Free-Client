// Chatbot.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';
import chatbotLogo from '../../assets/chatbotlogo.png';

const Chatbot = () => {
  const [selectedQuery, setSelectedQuery] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleQuerySelection = (e) => {
    setSelectedQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedQuery !== '') {
      getBotResponse(selectedQuery);
    }
  };

  
  const getBotResponse = (query) => {
    axios
      .post('https://stack-overflow-free-server-hp.onrender.com/ChatBot/post', { query })
      .then((res) => {
        setBotResponse(res.data);
        addToChatHistory({ userInput: selectedQuery, botResponse: res.data });
        setSelectedQuery('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToChatHistory = ({ userInput, botResponse }) => {
    const newMessage = [
      ...chatHistory,
      {
        user: userInput,
        bot: {
          text: botResponse,
          typing: false,
        },
      },
    ];
    setChatHistory(newMessage);
  };

  useEffect(() => {
    if (botResponse) {
      let typingDelay = 50; // Delay between each letter typing
      let eraseDelay = 50; // Delay between erasing the response
      let newMessage = '';
      let isTyping = true;

      const typeEffect = () => {
        if (!isTyping) return;
        if (newMessage === botResponse) {
          setTimeout(() => {
            isTyping = false;
            setChatHistory((prevHistory) => {
              const updatedHistory = [...prevHistory];
              updatedHistory[updatedHistory.length - 1].bot.typing = false;
              return updatedHistory;
            });
          }, eraseDelay);
          return;
        }

        newMessage = botResponse.slice(0, newMessage.length + 1);
        setChatHistory((prevHistory) => {
          const updatedHistory = [...prevHistory];
          updatedHistory[updatedHistory.length - 1].bot.text = newMessage;
          return updatedHistory;
        });

        setTimeout(typeEffect, typingDelay);
      };

      setChatHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        updatedHistory[updatedHistory.length - 1].bot.typing = true;
        return updatedHistory;
      });

      setTimeout(typeEffect, typingDelay + 500); // Initial delay before typing starts
    }
  }, [botResponse]);

  return (
    <div className="chatbot-container">
      <div className="header">
        <img src={chatbotLogo} alt="AI Chat Bot" className="chatbot-logo" />
        <h1 className="chatbot-title">Stack-Overflow Chat Bot</h1>
      </div>
      <div className="chatbot-window">
        {chatHistory.map((message, index) => (
          <div key={index}>
            <div className="user-message">{message.user}</div>
            <div className="bot-message">{message.bot.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          onChange={handleQuerySelection}
          value={selectedQuery}
          placeholder="Enter your query..."
          className="chatbot-input"
        />
        <button type="submit" disabled={selectedQuery === ''} className="send-button">
          Send
        </button>
      </form>
      {botResponse && !chatHistory[chatHistory.length - 1].bot.typing && (
        <div className="bot-response">
          <strong>Bot: </strong>
          {botResponse}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
