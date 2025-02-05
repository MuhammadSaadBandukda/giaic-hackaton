import React from 'react'
import brand from '@/public/image 1174.png'
import Image from 'next/image'
const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center">

    <Image src={brand} alt='NOt found' className='scale-75'/>
    </div>
  )
}

export default Brands
