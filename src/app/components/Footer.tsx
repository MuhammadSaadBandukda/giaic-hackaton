import { Button } from "./ui/button"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="">
      <div className="content1 bg-slate-300  h-80 grid grid-cols-5 p-12">
          <div className="info flex flex-col gap-4 items-start justify-start col-span-2">
            <div className="logo">
              <h1 className="font-sans text-5xl font-bold">Hekto</h1>
            </div>
            <div className="email flex items-center">
              <input type="email" className="bg-white h-9" placeholder={'Enter Email Address'}/>
              <Button variant="destructive" className="bg-pink-600 rounded-none p-3 w-28 text-white">Signup</Button>
            </div>
            <h1 className="text-gray-500 text-sm ">Contact Info</h1>
            <h1 className="text-gray-500 text-sm ">17 Princess Road, London, Greater London NW1 8JR, UK</h1>
          </div>
          <div className="flex flex-col  justify-center gap-3">
            <h1 className="text-blue-950 text-2xl text-start font-sans font-bold">Categories</h1>
            <ul className="text-start text-gray-500 flex flex-col gap-3">
              <li>Laptops And Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div className="flex flex-col  justify-center gap-3">
            <h1 className="text-blue-950 text-2xl text-start font-sans font-bold">Customer Care</h1>
            <ul className="text-start text-gray-500 flex flex-col gap-3">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="flex flex-col  justify-center gap-3">
            <h1 className="text-blue-950 text-2xl text-start font-sans font-bold">Pages</h1>
            <ul className="text-start text-gray-500 flex flex-col gap-3">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
      </div>
      <div className="content2 last-footer flex justify-evenly items-center bg-purple-200">
        <h1 className="text-gray-400">©Muhammad Saad - All Rights Reserved</h1>
        <div className="icons flex gap-2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer
