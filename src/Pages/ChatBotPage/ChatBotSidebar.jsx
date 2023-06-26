import React from 'react';
import './Chatbot.css';

const ChatbotSidebar = () => {
  return (
    <div className="chatbot-sidebar">
      <h2 className="sidebar-title">Chat Bot</h2>
      <p className="sidebar-description">
        Welcome to our AI Chat Bot prototype! Our chat bot is designed to assist you with your programming queries. If you
        can't find the answer you're looking for, feel free to post your questions on the Questions page. Our experts will
        do their best to provide you with answers as soon as possible.
      </p>
      <div className="sidebar-note">
        <p>
          <strong>Note:</strong> This is a prototype version, so the available answers might be limited. Your feedback is
          valuable in helping us improve the chat bot.
        </p>
      </div>
      <div className="sidebar-contact">
        <p>
          If you have any questions or need further assistance, please contact our support team at{' '}
          <a href="mailto:StackOverFlow-hp@outlook.com">StackOverFlow-hp@outlook.com</a>.
        </p>
      </div>
      <div className="sidebar-feedback">
        <p>
          We would love to hear your feedback and suggestions! Please share your thoughts with us through the feedback form
          on our website.
        </p>
      </div>
      <div className="sidebar-disclaimer">
        <p>
          <strong>Disclaimer:</strong> The information provided by the chat bot is for educational purposes only and should
          not be considered professional advice. Always consult with a qualified professional for specific programming
          concerns.
        </p>
      </div>
    </div>
  );
};

export default ChatbotSidebar;
