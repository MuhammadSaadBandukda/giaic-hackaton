import React from 'react'
import Image from 'next/image'
import shape from "@/public/Ellipse 63.png"
import sofa from "@/public/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
import { Button } from "./ui/button"

const HomeBanner = () => {
  return (
    <div className='relative flex bg-slate-200 h-96 w-auto gap-24 justify-center '>
        <div className="product shrink-0 flex items-center justify-center">
            <Image src={shape} alt="Not Found" className="w-96 h-96 "/>
            <Image src={sofa} alt="Not Found" className="absolute w-80 h-80 z-10 top-10 right-15 "/>
         </div>
        <div className="flex flex-col items-start justify-center">
            <h1 className='text-4xl font-bold w-[500px] text-blue-950'>Unique Features of Latest & Trending Products</h1>
            <ul className='list-disc w-[500px] text-lg'>
                <li className='text-red-600'><span className='text-gray-500'> All frames constructed with hardwood solids and laminates</span></li>
                <li className='text-blue-800'><span className='text-gray-500'> Reinforced with double wood dowels, glue, screw - nails corner 
                blocks and machine nails </span></li>
                <li className='text-teal-500'><span className='text-gray-500'> Arms, backs and seats are structurally reinforced</span></li>
            </ul>
            <div className="flex mt-9 items-center gap-4">
                <Button variant={"default"} className="rounded-sm h-8 w-28 text-center bg-pink-600 mt-3 text-white">Add to cart</Button>
                <div className='text-blue-950'>
                    <h3>B&B italian Sofa</h3>
                    <h3>$32.00</h3>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HomeBanner
