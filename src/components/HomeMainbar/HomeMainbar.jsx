import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const HomeMainbar = () => {
    const location = useLocation()
    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList)
    // const [questionsList, setquestionsList] = useState([])
    // setquestionsList(QuestionsList.data.sort((a,b) => a.askedOn < b.askedOn ? 1 : -1))
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const checkAuth = () => {
      if(User === null){
        alert("login or signup to ask a question")
        navigate("/Auth")
      }else{
        navigate("/AskQuestion")
      }
    }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick= {checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data.sort((a,b) => a.askedOn < b.askedOn ? 1 : -1)} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar