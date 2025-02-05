import React from 'react'
import Image from 'next/image'
import chair1 from '@/public/image1171.png'
import chair2 from '@/public/image 1170.png'
import chair3 from '@/public/image 31.png'
import chair4 from '@/public/image 32 (1).png'
import ghari from '@/public/image 1162.png'
import tape from '@/public/image 1161.png'
import OldChair1 from '@/public/image 30.png'
import OldChair2 from '@/public/image 28.png'
import OldChair3 from '@/public/image 19.png'



const chairs = [
  {id:1,pic:chair1},
  {id:2,pic:chair2},
  {id:3,pic:chair3},
  {id:4,pic:chair4}
]

const oldChairs = [
  {id:1,pic:OldChair1},
  {id:2,pic:OldChair2},
  {id:3,pic:OldChair3}
]
const TrendingProducts = () => {
  return (
    <div className='flex flex-col items-center min-h-80'>
      <h1 className="text-4xl font-extrabold">Trending Products</h1>
      <div className="cards grid sm:grid-cols-4 h-auto gap-10 mt-2 mb-5">
          {chairs.map((chair) => (
            <div key={chair.id} className="card flex flex-col items-center justify-center p-2 bg-slate-100 rounded-sm h-60 w-48 relative hover:shadow-md transition-all ease-out">
              <div className="flex items-center justify-center bg-gray-200 h-44 w-44 rounded-sm">
                <Image  src={chair.pic} alt='not found' className='object-cover'/>
              </div>
              <h1 className='text-base font-medium'>Cantilever chair</h1>
              <div className="flex items-center justify-between w-24">
                <h2 className='text-sm'>$26.00</h2>
                <h3 className="line-through text-gray-400 text-xs">$42.00</h3>
              </div>
            </div>
            
          ))} 
      </div>
      <div className="grid grid-cols-3 gap-4">        
        <div className="flex flex-col items-center justify-center w-72 h-56 bg-pink-200 hover:shadow ">
          <div className="flex flex-col items-start justify-center h-full w-full p-4 ">
            <h1 className='font-bold'>23% off in all products</h1>
            <h2 className='underline text-pink-600'>Shop Now</h2>
          </div>
          <div className="flex justify-end items-center w-full">
              <Image src={ghari} alt='not found' className='object-cover w-32 h-32'/>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-center w-72 h-56 bg-slate-300 hover:shadow">
          <div className="flex flex-col items-start justify-center h-full w-full p-4 ">
            <h1 className='font-bold'>23% off in all products</h1>
            <h2 className='underline text-pink-600'>View Collections</h2>
          </div>
          <div className="flex justify-end items-center w-full p-3">
              <Image src={tape} alt='not found' className='object-cover w-fit h-fit right-3  flex-shrink-0'/>
          </div>


        </div>
        <div className='grid grid-rows-3 gap-1'>
          {oldChairs.map((oldChair) => (
          <div key={oldChair.id} className="flex gap-4 h-20 hover:shadow-md shadow-inner">
            <div className="flex items-center justify-center h-16 w-16 bg-slate-50">
              <Image  src={oldChair.pic} alt='not found'/>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className='font-medium text-sm'>Executive Seat chair</h1>
              <h2 className='line-through text-sm'>$32.00</h2>
            </div>
          </div>            
          ))}
          </div>
      </div>
    </div> 
  )
}

export default TrendingProducts
