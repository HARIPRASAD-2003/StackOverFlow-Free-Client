import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ProductsList from './ProductsList'

const ProductsPage = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2' style={{paddingTop: "70px"}}>
        <ProductsList/>
      </div>
    </div>
  )
}

export default ProductsPage
