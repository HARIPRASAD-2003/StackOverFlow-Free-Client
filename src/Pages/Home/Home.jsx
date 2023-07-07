import React from 'react'
// import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'
import HomePage from './HomePage'


const Home = () => {

  return (
    <div className='home-container-1' >
      <LeftSidebar />
      <div className='home-container-2' style={{width: "100%" , maxWidth: "100%"}}>
        {/* <HomeMainbar />
        <RightSidebar /> */}
        <HomePage/>
      </div>
    </div>
  )
}

export default Home
