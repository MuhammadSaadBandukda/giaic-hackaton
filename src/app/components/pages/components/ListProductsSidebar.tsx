import Image from 'next/image'
import React from 'react'
import img1 from "@/public/shopleftsidebar/Rectangle1.png"
import img2 from "@/public/shopleftsidebar/Rectangle2.png"
import img3 from "@/public/shopleftsidebar/Rectangle3.png"
import img4 from "@/public/shopleftsidebar/Rectangle4.png"
import img5 from "@/public/shopleftsidebar/Rectangle5.png"
import img6 from "@/public/shopleftsidebar/Rectangle6.png"
import img7 from "@/public/shopleftsidebar/Rectangle7.png"
import { BsCart } from 'react-icons/bs'
import { FiZoomIn } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa6'
import { IoStar, IoStarHalf } from 'react-icons/io5'

const products = [
  {id:1,title:"Dictum morbi",pic:img1},
  {id:2,title:"Sodales sit",pic:img2},
  {id:3,title:"Nibh varius",pic:img3},
  {id:4,title:"Mauris quis",pic:img4},
  {id:5,title:"Morbi sagittis",pic:img5},
  {id:6,title:"Ultricies venenatis",pic:img6},
  {id:7,title:"Scelerisque dignissim",pic:img7}
]




const ListProductsSidebar = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      {products.map((product) => (
      <div key={product.id} className="grid grid-cols-3 gap-x-5 p-6">
        <Image src={product.pic} alt='not found' className='col-span-1 object-cover m-2'/>
        <div className="flex flex-col col-span-2 justify-between py-5">
          <div className="flex justify-start items-end gap-4 text-lg text-blue-950 font-bold">
            <h1>{product.title}</h1>
            <div className="colors flex w-11 h-4 gap-1">
              <div className="elem rounded-full w-[10px] h-[10px] bg-yellow-600"></div>
              <div className="elem rounded-full w-[10px] h-[10px] bg-red-500 "></div>
              <div className="elem rounded-full w-[10px] h-[10px] bg-purple-800"></div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-between w-24">
                  <h2 className='text-sm'>$26.00</h2>
                  <h3 className="line-through text-pink-600 text-xs">$52.00</h3>
            </div>
            <div className="flex text-yellow-300">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
          </div>          
          <p className='text-gray-400 w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
          <div className="flex justify-between w-44">
            <BsCart />
            <FaRegHeart />
            <FiZoomIn />
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default ListProductsSidebar
