import React from 'react'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UserPostMainBar from './userPostMainBar'
import '../../App.css'

const UserPost = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <UserPostMainBar />
        {/* <RightSidebar /> */}
      </div>
    </div>
  )
}

export default UserPost;