import React from 'react'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import CommunityMainBar from './CommunityMainBar'
import '../../App.css'

const Community = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <CommunityMainBar />
        {/* <RightSidebar /> */}
      </div>
    </div>
  )
}

export default Community;