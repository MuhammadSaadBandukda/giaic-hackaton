import React from 'react'
import Image from 'next/image'
import prod1 from '@/public/shopgrid/image 9.png'
import prod2 from '@/public/shopgrid/image 1165.png'
import prod3 from '@/public/shopgrid/image 1173.png'
import prod4 from '@/public/shopgrid/10011 1.png'
import prod5 from '@/public/shopgrid/unnamed 1.png'
import prod6 from '@/public/shopgrid/1562173100-movado-connect-1562173094 2.png'
import prod7 from '@/public/shopgrid/purepng 1.png'
import prod8 from '@/public/shopgrid/image 1164.png'
import prod9 from '@/public/shopgrid/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png'
import prod10 from '@/public/shopgrid/cam 2.png'
import prod11 from '@/public/shopgrid/headphone.png'
import prod12 from '@/public/shopgrid/10011 1.png'

import { FiZoomIn } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa6'

const products = [
  {id:1,tittle:"Vel elit euismod",pic:prod1},
  {id:2,tittle:"Ultricies condimentum imperdiet",pic:prod2},
  {id:3,tittle:"Vitae suspendisse sed",pic:prod3},
  {id:4,tittle:"Sed at fermentum",pic:prod4},
  {id:5,tittle:"Fusce pellentesque at",pic:prod5},
  {id:6,tittle:"Vestibulum magna laoreet",pic:prod6},
  {id:7,tittle:"Sollicitudin amet orci",pic:prod7},
  {id:8,tittle:"Ultrices mauris sit",pic:prod8},
  {id:9,tittle:"Pellentesque condimentum ac",pic:prod9},
  {id:10,tittle:"Cras scelerisque velit",pic:prod10},
  {id:11,tittle:"Lectus vulputate faucibus",pic:prod11},
  {id:12,tittle:"Purus risus, ut",pic:prod12}

]
const GridProducts = () => {
  return (
    <div className='flex flex-col items-center min-h-80'>
      <div className="cards grid sm:grid-cols-4 h-auto gap-10 mt-2 mb-5">
          {products.map((product) => (
            <div key={product.id} className="card flex flex-col items-center justify-center p-2 bg-slate-100 rounded-sm h-60 w-56 relative hover:shadow-md transition-all ease-out">
              <div className="flex items-center justify-center hover:bg-gray-200 h-44 w-52 relative rounded-sm transition-all ease-in-out group">
                <Image  src={product.pic} alt='not found' className='object-cover'/>
                <div className="hidden group-hover:flex flex-col justify-around gap-2 absolute left-0 bottom-0 transition-all ease-in ">
                  <BsCart />
                  <FiZoomIn />
                  <FaRegHeart />
                </div>
              </div>
              <h1 className='text-base font-medium'>{product.tittle}</h1>
              <div className="colors flex w-11 h-3 gap-1">
                            <div className="elem rounded-full w-2 h-2 bg-yellow-600"></div>
                            <div className="elem rounded-full w-2 h-2 bg-red-500 "></div>
                            <div className="elem rounded-full w-2 h-2 bg-purple-800"></div>
              </div>
              <div className="flex items-center justify-between w-24">
                <h2 className='text-sm'>$26.00</h2>
                <h3 className="line-through text-pink-600 text-xs">$42.00</h3>
              </div>
            </div>
            
          ))} 
      </div>
      </div> 
  )
}

export default GridProducts
