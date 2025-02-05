import React from 'react'
import bgPic from '@/public/Rectangle 102.png'
import Image from 'next/image'
import { Button } from './ui/button'
const Rectangle = () => {
  return (
    <div className="relative flex bg-slate-200 h-96 w-full gap-24 ">
        <Image src={bgPic} alt='not Found' className=' h-full w-full  object-fill'/>
        {/* <div className="flex flex-col absolute top-1/2 ">
            <h1 className='text-4xl font-bold w-[600px] text-center text-blue-950'>Get Leatest Update By Subscribe
            0ur Newslater</h1>
        </div> */}
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold w-[600px] text-center text-blue-950">
                Get Latest Update By Subscribing to Our Newsletter
            </h1>
            <Button variant={"default"} className="rounded-sm h-8 w-28 text-center text-white bg-pink-600 mt-3">Shop Now</Button>
        </div>  
    </div>
        
  )
}

export default Rectangle
