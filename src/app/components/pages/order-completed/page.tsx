import Image from 'next/image'
import React from 'react'
import clock from '@/public/ordercompleted/clock 1.png'
import checkList from '@/public/ordercompleted/checklist 1.png'
import Tick from "@/public/ordercompleted/Group 232.png"
import { Button } from '../../ui/button'
const OrderCompleted = () => {
  return (
    <div className='flex items-center justify-center w-full h-96 relative'>
        <Image src={clock} alt='not found' className='absolute top-0 scale-75 left-48'/>
        <div className="flex flex-col justify-center items-center gap-6 w-full">
            <Image src={Tick} alt='not Found'/>
            <h1 className="text-2xl text-blue-950 text-center">Your Order Is Completed! </h1>
            <p className="text-sm text-gray-400 text-center w-2/5">
                Thank you for your order! Your order is being processed and will be completed within 3-6
                hours. You will receive an email confirmation when your order is completed.
            </p>
            <Button variant={"default"} className="rounded-sm h-8 w-36 text-center bg-pink-600 text-white">Continue Shopping</Button>

        </div>
        <Image src={checkList} alt='not found' className='absolute bottom-0 scale-75 right-48'/>
    </div>
  )
}

export default OrderCompleted
