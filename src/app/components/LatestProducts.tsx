'use client'
import Image from 'next/image';
import React from 'react'
import { useState } from "react";
import chair1 from "@/public/image 1166.png"
import chair2 from "@/public/image 15.png"
import chair3 from "@/public/image 1168 (2).png"
import chair4 from "@/public/image 23.png"
import chair5 from "@/public/image 32 (1).png"
import chair6 from "@/public/image 3.png"

const chairs = [
  { id: 1, image: chair1 },
  { id: 2, image: chair2 },
  { id: 3, image: chair3 },
  { id: 4, image: chair4 },
  { id: 5, image: chair5 },
  { id: 6, image: chair6 }
];




const LatestProducts = () => {
  const [selected, setSelected] = useState("New Arrival");
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];


  return (
    <div className='latestProducts flex flex-col items-center justify-center h-80 mt-52'>
          <h1 className="text-4xl font-extrabold">Latest Products</h1>

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
      <div className="grid sm:grid-cols-3 gap-y-4">
          {/* <div className="flex flex-col bg-slate-50">
            
            <div className="flex w-60 h-60 items-center justify-center bg-slate-300 p-6">
              <Image src={chair1} alt="Not Found" className="object-cover" />
            </div>
            <div className="flex justify-between">
              <h2 className='sm:text-xs'>Comfort Handy Craft</h2>
              <h3 className='sm:text-xs'>$42.00 <span className='text-pink-600 line-through'>$65.00</span></h3>
            </div>
          </div> */}
          {chairs.map((chair) => (
        <div key={chair.id} className="flex flex-col bg-slate-50 p-4 hover:shadow-2xl">
          <div className="flex w-60 h-60 items-center justify-center bg-slate-300 p-6">
            <Image src={chair.image} alt="Not Found" className="object-cover" />
          </div>
          <div className="flex justify-between mt-2">
            <h2 className="sm:text-xs">Comfort Handy Craft</h2>
            <h3 className="sm:text-xs">
              $42.00 <span className="text-pink-600 line-through">$65.00</span>
            </h3>
          </div>
        </div>
      ))}


      </div>
    </div>
  )
}

export default LatestProducts
