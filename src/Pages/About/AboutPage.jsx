import React from 'react'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import About from './About'
import '../../App.css'

const AboutPage = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar />
    <div className='home-container-2'>
      <About />
      {/* <RightSidebar /> */}
    </div>
  </div>
  )
}

export default AboutPage
