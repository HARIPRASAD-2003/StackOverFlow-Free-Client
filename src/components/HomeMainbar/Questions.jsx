import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div style={{display: 'flex'}}>
        <div className="display-votes-ans">
            <p>{question.upVote.length - question.downVote.length}</p>
            <p>votes</p>
        </div>
        <div className="display-votes-ans">
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${question._id}`} className='tags-display' style={{color: 'blue'}}>{question.questionTitle}</Link>
            <div className='display-tags-time'>
                <div className='display-tags'>
                    {
                        question.questionTags.map((tag) => (
                            <Link to={`/tag/${tag}`} className='tags-display' key={tag}><p  >{tag}</p></Link>
                        ))
                    }
                </div>
                <p className='display-time'>
                    asked {moment(question.askedOn).fromNow()} by {question.userPosted}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Questions
