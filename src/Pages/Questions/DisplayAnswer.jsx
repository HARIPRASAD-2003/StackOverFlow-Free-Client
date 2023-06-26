import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import moment from 'moment'
import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswer } from '../../actions/question'

const DisplayAnswer = ({question, handleShare}) => {

  const User = useSelector((state) => (state.currentUserReducer))
  const { id } = useParams()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.usersReducer)
  // const userAnswered = question ? users.find((user) => user._id === ans.userId)?.name : '';
  // const users = useSelector(state => state.usersReducer)
  // const userAnswered = users.filter((user) => user._id === question.userId)[0].name


  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
  }

  return (
    <div>
      {
        question.answer.map((ans) => (
            <div className="display-ans" key={ans._id}>
                <p>{ans.answerBody}</p>
                <div className="question-action-user">
                  <div>
                    <button type='button' onClick={handleShare}>Share</button>
                    {
                        User?.result?._id === ans?.userId && (
                            <button type='button' onClick = {() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                        )
                    }
                  </div>
                  <div>
                    {/* {console.log(ans)} */}
                    <p>answered {moment(ans.answerOn).fromNow()} </p>
                    <Link to={`/Users/${ans.userId}`} className='user-link' style={{color: '#0086d8'}}>
                        <Avatar backgroundColor="green" px='8px' py='5px' > { users?.find((user) => user._id === ans.userId)?.name.charAt(0).toUpperCase()} </Avatar>
                        <div>
                            {users?.find((user) => user._id === ans.userId)?.name}
                        </div>
                    </Link>
                  </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer
