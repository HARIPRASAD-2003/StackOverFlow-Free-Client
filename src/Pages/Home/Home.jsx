import React from 'react'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'


const Home = () => {
  const imageStyle = {
    backgroundImage: 'url("../../assets/home-background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2' style={imageStyle}>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home
