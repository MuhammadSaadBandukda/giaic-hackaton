'use client'
import React, { useState } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import Shape from '@/public/Ellipse 64.png'
import sofa from '@/public/tortuga-01-b 1.png'
import { IoMdCheckmark } from 'react-icons/io';


const DiscountItem = () => {

const [selected, setSelected] = useState("New Arrival");
    
const categories = ["Plastic Chair",'Wooden Chair','Sofa Collection'] 
    return (
    <div className='flex flex-col items-center justify-center h-80 mt-12'>
        <h1 className="text-4xl font-extrabold">Discount Item</h1>
        <ul className="flex gap-12">
            {categories.map((category) => (
            <li
            key={category}
            className={`cursor-pointer ${selected === category ? "text-pink-600 underline" : ""}`}
            onClick={() => setSelected(category)}
            >
            {category}
            </li>
            ))}
        </ul>


        <div className='relative flex bg-slate-200 h-fit w-full gap-24 justify-center mt-3'>
            <div className="flex flex-col items-start justify-center">
                <h1 className='text-4xl font-bold w-[500px] text-blue-950'>20% Discount Of All Products</h1>
                <h2 className='text-pink-600 text-2xl'>Eams Sofa Compact</h2>
                <p className='text-gray-300 text-lg w-[508px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <ul className=' w-[500px] text-sm grid grid-cols-2 grid-rows-2 '>
                    <li className='flex items-start justify-between w-48'><IoMdCheckmark className='text-lg'/>Material expose like metals</li>
                    <li className='flex items-start justify-between w-56'><IoMdCheckmark className='text-lg'/>Clear lines and geomatric figures</li>
                    <li className='flex items-start justify-between w-[165px]'><IoMdCheckmark className='text-lg'/>Simple neutral colours.</li>
                    <li className='flex items-start justify-between w-48'><IoMdCheckmark className='text-lg'/>Material expose like metals</li>
                </ul>
                <div className="flex mt-9 items-center gap-4">
                    <Button variant={"default"} className="rounded-sm h-9 w-32 text-white text-center bg-pink-600 mt-3">Shop Now</Button>
                </div>
            </div>
            <div className="product shrink-0 flex items-center justify-center relative">
                <Image src={Shape} alt="Not Found" className="w-80 h-80 "/>
                <Image src={sofa} alt="Not Found" className="absolute w-72 h-72 z-10 right-15"/>
            </div>
            

      
        </div>




    </div>
  )
}

export default DiscountItem
