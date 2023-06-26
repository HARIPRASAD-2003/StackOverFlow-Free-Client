import React from 'react'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import CommentsMainBar from './CommentsMainBar'
import '../../App.css'

const CommentsPage = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <CommentsMainBar />
        {/* <RightSidebar /> */}
      </div>
    </div>
  )
}

export default CommentsPage;