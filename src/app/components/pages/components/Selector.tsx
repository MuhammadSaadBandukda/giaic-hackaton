import React from 'react'
import { BiGridSmall } from 'react-icons/bi';
import { FaList } from 'react-icons/fa6';

const Selector = () => {
  return (
    <div className="flex items-center justify-evenly">
        <div className="flex flex-col">
        <h1 className='text-blue-950 text-lg font-medium'>Ecommerce Acceories & Fashion item</h1>
        <p className='text-gray-400 text-[10px]'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex items-center justify-evenly text-sm w-1/2 text-blue-950">
            <div className="flex items-center justify-center">
                <h1>Per Page: </h1>
                <input type="number" defaultValue={'12'} className='w-10 h-6 ml-2 border text-center flex items-center border-gray-300 text-gray-500' />
            </div>
            <div className="flex items-center justify-center">
                <h1>Sort By: </h1>
                <select name="sortby" className='text-gray-400 border'>
                <option value="Best Match">Best Match</option>
                <option value="price low to high">Price Low to High</option>
                <option value="price high to low">Price High to Low</option>
                </select>
            </div>
            <div className="flex items-center justify-center">
                <h1>View:</h1>
                <BiGridSmall className='w-7 h-7'/>
                <FaList />
                <input type="text"  className='w-20 h-6 ml-2 border flex items-center border-gray-300 text-gray-500' />
            </div>

        </div>
  </div>

  )
}

export default Selector
