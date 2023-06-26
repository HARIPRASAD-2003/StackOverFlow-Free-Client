import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
// import { useSelector } from 'react-redux'
// import { useLocation, useParams } from 'react-router-dom'

const DisplayQuestions = () => {





  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <QuestionDetails />
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplayQuestions
