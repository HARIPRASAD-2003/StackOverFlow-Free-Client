import React from 'react'

import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TaggedQuestions from './TaggedQuestions'
import '../../App.css'

const TagQuestions = () => {



  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <TaggedQuestions />
        <RightSidebar />
      </div>
    </div>
  )
}

export default TagQuestions
