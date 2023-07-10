import React from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import upvote from '../../assets/sort-up.svg';
import downvote from '../../assets/sort-down.svg';
import './Questions.css';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteQuestion, postAnswer, voteQuestion } from '../../actions/question';
import moment from 'moment';
import copy from 'copy-to-clipboard';

const QuestionDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const url = 'https://techmarvel.netlify.app';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionsList = useSelector((state) => state.questionsReducer);
  const User = useSelector((state) => state.currentUserReducer);
  const quest = questionsList.data?.find((question) => question._id === id);
  const users = useSelector((state) => state.usersReducer);
  const userPosted = quest ? users.find((user) => user._id === quest.userId)?.name : '';
  const [Answer, setAnswer] = useState('');

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert('Login or Signup to answer a question');
      navigate('/Auth');
    } else {
      if (Answer === '') {
        alert('Enter an answer before submitting');
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
        setAnswer('');
      }
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  const checkAuth =() => {
    if (User === null) {
      alert('Login or Signup to ask a question');
      navigate('/Auth');
    } else {
      navigate("/AskQuestion");
    }
  }

  const handleShare = () => {
    copy(url + location.pathname);
    alert('Copied url: ' + url + location.pathname);
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User?.result?._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', User?.result?._id));
  };

  return (
    <div className='question-details-page' style={{ width: '100%' }}>
      {quest ? (
        <>
          <section className='question-details-container'>
            <h1>{quest.questionTitle}</h1>
            <div className='question-details-container-2'>
              <div className='question-votes'>
                <img src={upvote} alt='upvote' className='votes-icon' width='18' onClick={handleUpVote} />
                <p>{quest.upVote.length - quest.downVote.length}</p>
                <img src={downvote} alt='downvote' className='votes-icon' width='18' onClick={handleDownVote} />
              </div>
              <div style={{ width: '100%' }}>
                <p className='question-body'>{quest.questionBody}</p>
                <div className='question-details-tags' style={{ display: 'flex', justifyContent: 'left' }}>
                  {quest.questionTags.map((tag) => (
                    <p key={tag}>
                      <Link to={`/tag/${tag}`} style={{ textDecoration: 'none' }} className='ans-tags'>
                        {tag}
                      </Link>
                    </p>
                  ))}
                </div>
                <div className='question-action-user'>
                  <div>
                    <button type='button' onClick={handleShare}>
                      Share
                    </button>
                    {User?.result?._id === quest?.userId && <button type='button' onClick={handleDelete}>Delete</button>}
                  </div>
                  <div>
                    <p>asked {moment(quest.askedOn).fromNow()}</p>
                    <Link to={`/Users/${quest.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                      <Avatar backgroundColor='orange' px='8px' py='5px'>
                        {userPosted?.charAt(0).toUpperCase()}{' '}
                      </Avatar>
                      <div>{userPosted}</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {quest.noOfAnswers !== 0 && (
            <section>
              <h3>{quest.noOfAnswers} Answers</h3>
              <DisplayAnswer key={quest._id} question={quest} handleShare={handleShare} />
            </section>
          )}
          <section className='post-ans-container'>
            <h3>Your Answer</h3>
            <form onSubmit={(e) => handlePostAns(e, quest.answer.length)}>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                onChange={(e) => setAnswer(e.target.value)}
                value={Answer}
                placeholder='Provide your Answer here....'
              ></textarea>
              <br />
              <input type='submit' className='post-ans-btn' value='Post Your Answer' />
            </form>
            <p>
              Browse other Question tagged
              {quest.questionTags.map((tag) => (
                <Link to={`/tag/${tag}`} key={tag} className='ans-tags'>
                  {' '}
                  {tag}{' '}
                </Link>
              ))}{' '}
              or
              <p onClick={checkAuth} style={{ textDecoration: 'none', color: '#009dff' }}>
                {' '}
                Ask Your Own Question.
              </p>
            </p>
          </section>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default QuestionDetails;
