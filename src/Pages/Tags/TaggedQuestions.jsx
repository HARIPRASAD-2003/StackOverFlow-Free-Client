import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../../components/HomeMainbar/HomeMainbar.css'
import QuestionList from '../../components/HomeMainbar/QuestionList'
import { useSelector } from 'react-redux'
import { tagsList } from "../../components/Tags/Tag"

const TaggedQuestions = () => {
    // const { id } = useParams()
    // console.log("TagQuestions", id)
    // const { tag } = toString(id)
    const location = useLocation()
    console.log("LOcation:", location)
    const  tag  = location.pathname.split('/')[2]
    console.log("Tag:", tag)
    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionList.data, tag)
    // const QuestionsList = questionList.data.filter((question) => question.questionTags.includes(tag))
    // // console.log(questionsList)
    // const questionsList = QuestionsList.sort((a,b) => a.askedOn < b.askedOn ? 1 : -1)


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
          <h1> { tag } </h1>
        }
        <button onClick= {checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
      <h4>Description:</h4>
      {tagsList.filter((tags) => tags.TagName === tag).map(tag => (<p key={tag}>{tag.TagDesc}</p>))}
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.filter((question) => question.questionTags.includes(tag)).length} questions</p>
            {/* {questionsList.data.filter((question) => question.questionTags.includes(tag)).length === 0 && <h4>No Available Questions Under the tag <p className='tag'>{tag}</p></h4>} */}
            <QuestionList questionsList={questionsList.data.filter((question) => question.questionTags.includes(tag)).sort((a,b) => a.askedOn < b.askedOn ? 1 : -1)} />
          </>
        }
      </div>
    </div>
  )
}

export default TaggedQuestions