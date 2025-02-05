import React from 'react'
import ListProductsSidebar from '../components/ListProductsSidebar'
import LeftSidebar from '../components/LeftSidebar'
const ShopLeftSidebar = () => {
  return (
    <div className='flex justify-center'>
        <LeftSidebar/>
        <ListProductsSidebar/>
      
    </div>
  )
}

export default ShopLeftSidebar
