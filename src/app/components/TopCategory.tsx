import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import miniChair1 from '@/public/image 20.png'
import miniChair2 from '@/public/image 1168.png'
import miniChair3 from '@/public/image 1171.png'

const miniChairs = [
  {id:1,pic:miniChair1},
  {id:2,pic:miniChair2},
  {id:3,pic:miniChair3},
  {id:4,pic:miniChair1}
]

const TopCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80 mt-10">
        <h1 className="text-4xl font-extrabold">Top Categories</h1>
        <div className="grid grid-cols-4 grid-rows-1 gap-6 mt-5">
            {miniChairs.map((miniChair) => (
            <div key={miniChair.id} className="flex flex-col items-center justify-center">

              <div className="rounded-full relative bg-purple-800 ">
                <div className="relative rounded-full h-52 w-52 flex flex-col items-center justify-center bg-slate-200  transition-transform duration-300 ease-out hover:-translate-y-2 hover:translate-x-2 group">
                  <Image src={miniChair.pic} alt="Not found" className="scale-75     transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:translate-x-2" />
                  <Button variant="default" className="absolute bottom-4 bg-green-500 rounded-sm h-6 w-24 text-center text-white hover:text-black">
                    View Shop
                  </Button>
                </div>
              </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className='font-medium'>Mini LCW Chair</h1>
                  <h2 className='text-sm'>$56.00</h2>
                </div>
            </div>
            ))}


        </div>
    </div>
  )
}

export default TopCategory
