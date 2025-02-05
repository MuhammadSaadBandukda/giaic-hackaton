import React from 'react'
import Selector from '../components/Selector'
import Brands from '../../Brands'
import ListProducts from '../components/ListProducts'

const ShopList = () => {
  return (
    <div className='flex flex-col gap-5'>
        <Selector/>
        <ListProducts/>
        <Brands/>
    </div>
  )
}

export default ShopList
