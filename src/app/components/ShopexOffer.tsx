import React from 'react'
import Truck from '@/public/free-delivery 1.png'
import CashBack from '@/public/cashback 1.png'
import Premium from '@/public/premium-quality 1.png'
import Hour from '@/public/24-hours-support 1.png'
import Image from 'next/image'

const pics = [
    {id:1,pic:Truck,Desc:"Free Delivery"},
    {id:2,pic:CashBack,Desc:"Cash Back"},
    {id:3,pic:Premium,Desc:"Premium Product"},
    {id:4,pic:Hour,Desc:"24/7 Hours"}
]




const ShopexOffer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-80 mt-44 relative'>
        <h1 className="text-4xl font-extrabold">What Shopex Offers!</h1>
        <div className="grid sm:grid-cols-4 gap-3 mt-4">
                {pics.map((pic) => (
                    <div key={pic.id} className="flex flex-col items-center justify-center bg-slate-100 w-60 h-60 hover:shadow-inner">
                    <Image src={pic.pic} alt='not Found' className='w-16 h-16'/>
                    <h2 className='text-blue-950 text-sm font-bold'>{pic.Desc}</h2>
                    <p className='text-gray-400 text-center font-semibold text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ut necessitatibus in.</p>
                    </div>
                ))}
                
        </div>
    </div>
  )
}

export default ShopexOffer
