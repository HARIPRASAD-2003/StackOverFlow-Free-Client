import React from 'react'
import FeedbackForm from './FeedBackForm'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

const FeeBackPage = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar />
    <div className='home-container-2'>
      <FeedbackForm />
    </div>
  </div>
  )
}

export default FeeBackPage
