import Image from 'next/image'
import React from 'react'
import blogPic1 from '@/public/JIUjvqe2ZHg.png'
import blogPic2 from '@/public/2dcYhvbHV-M.png'
import blogPic3 from '@/public/2d1cYhvbHV-M.png'
import { FaCalendarDays, FaPenNib } from 'react-icons/fa6'


const blogPics = [
    {id:1 , pic:blogPic1},
    {id:2 , pic:blogPic2},
    {id:3 , pic:blogPic3}
]

const LatestBlog = () => {
  return (
    <div className='flex flex-col items-center justify-center h-80'>
        <h1 className="text-4xl font-extrabold">Latest Blogs</h1>
        <div className="grid grid-cols-3 grid-rows-1 gap-6 mt-5 ">
            {blogPics.map((blogPic) => (
            <div key={blogPic.id} className="flex flex-col items-center justify-center rounded h-60 w-52 gap-2 group hover:shadow">
                <Image src={blogPic.pic} alt='Not Found' className=' bg-black object-fill h-32 w-full rounded'/>
                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center text-[11px] gap-1">
                        <FaPenNib className='text-pink-600'/>
                        <h1 className='text-blue-950'>Saber Ali</h1>
                    </div>
                    <div className="flex items-center text-[11px] gap-1">
                        <FaCalendarDays className='text-orange-400'/>
                        <h1>21 August,2020</h1>
                    </div>
                </div>
                <h1 className='text-sm font-medium text-blue-950 group-hover:text-pink-600 transition-all ease-in'>Top esssential Trends in 2021</h1>
                <p className='text-[10px] text-gray-700 text-center'>More off this less hello samlande lied much
                over tightly circa horse taped mightly</p>
                <h2 className='text-blue-950 text-xs underline group-hover:text-pink-600 transition-all ease-in'>Read More</h2>
            </div>

            ))}

        </div>

      
    </div>
  )
}

export default LatestBlog
