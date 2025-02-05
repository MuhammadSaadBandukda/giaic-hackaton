'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import img1 from '@/public/productdetails/Rectangle1.png'
import img2 from '@/public/productdetails/Rectangle2.png'
import img3 from '@/public/productdetails/Rectangle3.png'
import img4 from '@/public/productdetails/Rectangle4.png'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { FaFacebook, FaHeart, FaInstagram } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
import model1 from '@/public/productdetails/model1.png'
import model2 from '@/public/productdetails/model2.png'
import model3 from '@/public/productdetails/model3.png'
import model4 from '@/public/productdetails/model4.png'

const models = [
    {id:1,price:'$43.00',title:'Mens Fashion Wear',pic:model1},
    {id:2,price:'$67.00',title:'Women’s Fashion',pic:model2},
    {id:3,price:'$67.00',title:'Wolx Dummy Fashion',pic:model3},
    {id:4,price:'$51.00',title:'Top Wall Digital Clock',pic:model4}
]

const PlaywoodArmChair = () => {
    const [textColor, settextColor] = useState('bg-transparent'); // Default background color
    
      // Function to handle the click event
      const handleClick = () => {
        settextColor(textColor === 'bg-transparent' ? 'text-pink-500' : 'bg-transparent'); // Toggle background color between white and blue
    };

    const [selected, setSelected] = useState("Description");
    const categories = ["Description", "Additional Info", "Reviews", "Video"];
    
  return (
        <div className="w-full flex flex-col justify-between gap-56 items-center min-h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex w-3/4 max-w-5xl m-5">
        
                {/* Left Side - Thumbnails */}
                <div className="flex flex-col space-y-2">
                    <Image src={img1} alt="Thumb 1" className="w-28 h-28 rounded-lg object-cover cursor-pointer" />
                    <Image src={img3} alt="Thumb 2" className="w-28 h-28 rounded-lg object-cover cursor-pointer" />
                    <Image src={img4} alt="Thumb 3" className="w-28 h-28 rounded-lg object-cover cursor-pointer" />
                </div>

                {/* Center - Main Image */}
                <div className="flex-1 mx-6">
                    <Image src={img2} alt="Main Product" className="w-[90%] h-full rounded-lg object-fill" />
                </div>
                {/* Right Side - Product Details */}
                <div className=" w-1/2">
                    <h2 className="text-2xl font-bold text-blue-900">Playwood Arm Chair</h2>
                    
                    {/* Rating */}
                    <div className="flex items-center mt-2">
                                    <div className="flex text-yellow-300">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    </div>
                        
                        <span className="text-sm text-gray-500 ml-2">(22)</span>
                    </div>

                    {/* Price */}
                    <div className="mt-3">
                        <span className="text-xl font-semibold text-gray-700">$32.00</span>
                        <span className="text-lg text-red-500 line-through ml-2">$32.00</span>
                    </div>
                    <p className='text-sm font-medium'>Color</p>

                    {/* Description */}
                    <p className="text-gray-500 mt-3 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center  gap-2">
                        <h1>Add to Cart</h1>
                        <FaHeart className= {` cursor-pointer ${textColor} `} onClick={handleClick}/>

                    </div>
                    

                    {/* Categories, Tags & Share */}
                    <div className="mt-5 text-gray-500">
                        <p><strong>Categories:</strong> Furniture</p>
                        <p><strong>Tags:</strong> Chair, Wood</p>
                        <div className="flex items-center gap-5">
                            <p><strong>Share:</strong> </p>
                            <div className="flex gap-1">
                                <FaFacebook />
                                <FaInstagram/>
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full bg-purple-100 h-[400px] items-center justify-center gap-12">                
                <ul className="flex gap-12">
                    {categories.map((category) => (
                    <li
                        key={category}
                        className={`cursor-pointer ${selected === category ? " underline" : ""} text-blue-950 font-semibold`}
                        onClick={() => setSelected(category)}
                    >
                        {category}
                    </li>
                    ))}
                </ul>

                <div className="flex flex-col px-[122px] gap-4">
                    <h1 className='text-blue-950 text-lg font-bold'>Varius tempor.</h1>
                    <p className='text-gray-400'>
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-blue-950 text-lg font-bold'>More details</h1>
                    <div className="flex flex-col">
                            <div className="flex gap-2 text-gray-400 items-center">
                                <GoArrowRight />
                                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </div>
                            <div className="flex gap-2 text-gray-400 items-center">
                                <GoArrowRight />
                                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </div>
                            <div className="flex gap-2 text-gray-400 items-center">
                                <GoArrowRight />
                                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </div>
                            <div className="flex gap-2 text-gray-400 items-center">
                                <GoArrowRight />
                                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </div>
                            <div className="flex gap-2 text-gray-400 items-center">
                                <GoArrowRight />
                                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </div>
                            <div className="flex gap-2 text-gray-400 items-center">
                                <GoArrowRight />
                                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </div>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col gap-5">
                <h1 className='text-4xl font-bold'>Related Products</h1>
                <div className="grid grid-cols-4 gap-5">
                    {models.map((model) => (
                    <div key={model.id} className="flex flex-col">
                        <Image src={model.pic} alt='not Found' className='w-52 h-88 object-cover'/>
                        <div className="flex justify-between">
                            <h1 className='font-semibold text-blue-950 text-xs'>{model.title}</h1>
                            <div className="flex text-yellow-300">
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </div>
                            
                        </div>
                        <h2 className='text-xs'>{model.price}</h2>
                    </div>

                    ))}
                </div>
            </div>

        </div>
    )
}


export default PlaywoodArmChair
