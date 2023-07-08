import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Products.css';
import chatbotlogo from '../../assets/chatbotlogo.png';
import communityLogo from '../../assets/communityLogo.png';
import { useSelector } from 'react-redux';
// import { setVerified } from '../../actions/currentUser';


const ProductsList = () => {

    var currentUser = useSelector((state) => (state.currentUserReducer))
    const users = useSelector((state) => state.usersReducer)
    var User = users.filter((user) => user._id === currentUser?.result._id)
    const navigate = useNavigate()
    var userVerification = JSON.parse(localStorage.getItem("Verified"))
    // console.log("userVerification", userVerification)

  const checkAuth = () => {
    if(User.length === 0){
      alert("login or signup to ask a question")
      navigate("/Auth")
    }else if(userVerification?.status === "VERIFIED"){
      navigate("/ChatBot")
    }else{
      navigate("/Verify-email")
    }
  }

  return (
    <div className="ProductsPage">
    <h1 className="PageTitle">Our Products</h1>
    <div className="ProductList">
      <div className="ProductItem" onClick={checkAuth} style={{ cursor: 'pointer' }}>
        <img src={chatbotlogo} alt="AI Chat Bot" className="ProductImage" />
        <div className="ProductContent">
          <h3 className="ProductName">Tech Marvel Chat Bot</h3>
          <p className="ProductDescription">
            Introducing our AI Chatbot feature for Tech Marvel! Our advanced chatbot is designed specifically to assist
            you with all your programming queries. With its powerful artificial intelligence capabilities, our chatbot
            can provide accurate and helpful answers to a wide range of programming-related questions.
          </p>
        </div>
      </div>
      <Link to="/community" className="ProductLink">
        <div className="ProductItem">
          <img src={communityLogo} alt="Tech Marvel Community" className="ProductImage" />
          <div className="ProductContent">
            <h3 className="ProductName">Tech Marvel Community</h3>
            <p className="ProductDescription">
              The community page encourages open communication and collaboration among its members. Users can interact
              with each other through comments, offering feedback, suggestions, and alternative approaches. It fosters
              a supportive environment where programmers can seek guidance, share insights, and inspire others with
              their accomplishments.
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  );
};

export default ProductsList;
