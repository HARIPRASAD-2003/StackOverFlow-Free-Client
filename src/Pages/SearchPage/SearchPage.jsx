import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import SearchMainBar from './SearchMainBar'

const SearchPage = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='question-details-page'>
        <SearchMainBar />
        {/* <RightSidebar /> */}
      </div>
    </div>
  )
}

export default SearchPage