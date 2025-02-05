import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5'

const brands = [
    {id:1,name:"Coaster Furniture"},
    {id:2,name:"Fusion Dot High Fashion"},
    {id:3,name:"Unique Furnitture Restor"},
    {id:4,name:"Dream Furnitture Flipping"},
    {id:5,name:"Young Repurposed"},
    {id:6,name:"Green DIY furniture"},
]

const discounts = [
    {id:1,name:"20% Cashback"},
    {id:2,name:"5% Cashback Offer"},
    {id:3,name:"25% Discount Offer"}
]


const categories = [
    {id:1,name:"Prestashop"},
    {id:2,name:"Magento"},
    {id:3,name:"Bigcommerce"},
    {id:4,name:"osCommerce"},
    {id:5,name:"3dcart"},
    {id:6,name:"Bags"},
    {id:7,name:"Accessories"},
    {id:8,name:"Jewellery"},
    {id:9,name:"Watches"}
]

const prices = [
    {id:1,name:"$0.00 - $150.00"},
    {id:2,name:"$150.00 - $350.00"},
    {id:3,name:"$150.00 - $504.00"},
    {id:3,name:"$450.00 +"}
]



const LeftSidebar = () => {
  return (
    // <div className='flex flex-col w-1/3 items-center p-3 h-full'>
      <div className='flex flex-col  w-1/3 p-5 pl-20 items-start gap-24'>
        <div className="flex flex-col">
          <h1 className='underline text-purple-950 font-bold'>Product Brand</h1>
          {brands.map((brand) => (
          <div className="flex items-center gap-3" key={brand.id}>
              <Checkbox 
                  className="bg-purple-300 border-none data-[state=checked]:hover:bg-purple-900 data-[state=checked]:bg-purple-300  data-[state=checked]:text-purple-900 data-[state=checked]:hover:text-white"
              />
              <h1 className='text-purple-400 '>{brand.name}</h1>
          </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className='underline text-purple-950 font-bold'>Discount Offers</h1>
          {discounts.map((discount) => (
          <div className="flex items-center gap-3" key={discount.id}>
              <Checkbox 
                  className="bg-pink-300 border-none data-[state=checked]:hover:bg-pink-600 data-[state=checked]:bg-pink-300  data-[state=checked]:text-pink-600 data-[state=checked]:hover:text-white"
              />
              <h1 className='text-purple-400 '>{discount.name}</h1>
          </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className='underline text-purple-950 font-bold'>Rating Items</h1>

          <div className="flex items-center gap-3" >
              <Checkbox 
                  className="bg-yellow-300 border-none data-[state=checked]:hover:bg-yellow-600 data-[state=checked]:bg-yellow-300  data-[state=checked]:text-yellow-600 data-[state=checked]:hover:text-white"
              />
              <div className="flex text-yellow-300 items-center">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
                <h1 className='text-black text-sm'>(2341)</h1>
              </div>
              
          </div>
          <div className="flex items-center gap-3" >
              <Checkbox 
                  className="bg-yellow-300 border-none data-[state=checked]:hover:bg-yellow-600 data-[state=checked]:bg-yellow-300  data-[state=checked]:text-yellow-600 data-[state=checked]:hover:text-white"
              />
              <div className="flex text-yellow-300 items-center">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarOutline />
                <IoStarOutline />
                <h1 className='text-black text-sm'>(1726)</h1>
              </div>
              
          </div>
          <div className="flex items-center gap-3" >
              <Checkbox 
                  className="bg-yellow-300 border-none data-[state=checked]:hover:bg-yellow-600 data-[state=checked]:bg-yellow-300  data-[state=checked]:text-yellow-600 data-[state=checked]:hover:text-white"
              />
              <div className="flex text-yellow-300 items-center">
                <IoStar />
                <IoStar />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <h1 className='text-black text-sm'>(258)</h1>
              </div>
              
          </div>
          <div className="flex items-center gap-3" >
              <Checkbox 
                  className="bg-yellow-300 border-none data-[state=checked]:hover:bg-yellow-600 data-[state=checked]:bg-yellow-300  data-[state=checked]:text-yellow-600 data-[state=checked]:hover:text-white"
              />
              <div className="flex text-yellow-300 items-center">
                <IoStar />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <h1 className='text-black text-sm'>(25)</h1>
              </div>
              
          </div>

        </div>

        <div className="flex flex-col">
          <h1 className='underline text-purple-950 font-bold'>Categories</h1>
          {categories.map((category) => (
          <div className="flex items-center gap-3" key={category.id}>
              <Checkbox 
                  className="bg-pink-300 border-none data-[state=checked]:hover:bg-pink-600 data-[state=checked]:bg-pink-300  data-[state=checked]:text-pink-600 data-[state=checked]:hover:text-white"
              />
              <h1 className='text-purple-400 '>{category.name}</h1>
          </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className='underline text-purple-950 font-bold'>Price Filter</h1>
          {prices.map((price) => (
          <div className="flex items-center gap-3" key={price.id}>
              <Checkbox 
                  className="bg-pink-300 border-none data-[state=checked]:hover:bg-pink-600 data-[state=checked]:bg-pink-300  data-[state=checked]:text-pink-600 data-[state=checked]:hover:text-white"
              />
              <h1 className='text-purple-400 '>{price.name}</h1>
          </div>
          ))}
        </div>
        <div className="flex border">
          <input type="text" className='w-full'/>
          <CiSearch className='text-2xl text-gray-500'/>
        </div>
        <div className="flex flex-col">
        <h1 className='underline text-purple-950 font-bold'>Price Filter</h1>
        <div className="grid grid-cols-3 gap-2  ">
          <div className="flex items-center justify-start gap-1">
            <div className="elem rounded-full w-[10px] h-[10px] bg-blue-900"></div>
            <h1>Blue</h1>
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="elem rounded-full w-[10px] h-[10px] bg-orange-500"></div>
            <h1>Orange</h1>
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="elem rounded-full w-[10px] h-[10px] bg-orange-800"></div>
            <h1>Brown</h1>
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="elem rounded-full w-[10px] h-[10px] bg-green-500"></div>
            <h1>Green</h1>
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="elem rounded-full w-[10px] h-[10px] bg-purple-900"></div>
            <h1>Purple</h1>
          </div>
          <div className="flex items-center justify-start gap-1">
            <div className="elem rounded-full w-[10px] h-[10px] bg-sky-500"></div>
            <h1>Sky</h1>
          </div>
        </div>
        </div>

      </div>
    // </div>
  )
}

export default LeftSidebar
