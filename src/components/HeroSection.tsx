import Image from "next/image";
import Banner from "@/public/promotional.jpg"
export default function HeroSection(){
    return(
        <div className="hero flex justify-around h-1/3 bg-black">
            <Image src={Banner} alt="??" className=" "/>
        </div>
    )
}