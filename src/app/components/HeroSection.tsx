import Lamp from "@/public/image 32.png"
import { Button } from "./ui/button"
import Image from "next/image"
import picture from "@/public/Group 129.png"
import sofa from "@/public/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
export default function HeroSection(){
    return(

<div className="hero relative flex bg-slate-200 h-96 w-full gap-24 justify-centerw">
        
    <div className="lampImg relative w-56  h-56 p-0 ">
        <Image        
        src={Lamp} 
        alt="Not found" 
        className="object-cover h-56 w-56 absolute m-0 left-36"
        />
    </div>
    <div className="tittle relative h-56 mt-24">
        <h6 className="text-pink-600 font-semibold text-sm">Best Furniture for your Castle</h6>
        <h1 className="text-4xl font-extrabold w-[450px]">New Furniture Collection Trends in 2020</h1>
        <p className="w-96 mt-7 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat, dolores odit culpa eum quasi modi itaque reprehenderit</p>
        <Button variant={"default"} className="rounded-sm h-8 w-28 absolute text-center bg-pink-600 text-white">Shop Now</Button>
    </div>

    <div className="product">
        <Image src={picture} alt="Not Found" className="w-96 h-96 z-0"/>
        <Image src={sofa} alt="Not Found" className="absolute w-80 h-80 z-10 top-10 right-15 "/>

    </div>

</div>
    )
}