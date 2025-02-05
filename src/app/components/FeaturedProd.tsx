import Image from "next/image"
import chair1 from "@/public/image1168.png"
import chair2 from "@/public/image1169.png"
import chair3 from "@/public/image1170.png"
import chair4 from "@/public/image1171.png"
import { Button } from "./ui/button"
import { BsCart2 } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { FaSearchPlus } from "react-icons/fa"

const FeaturedProd = () => {
    const featuredProd = [
        {
            id:1,
            imagePath:chair1,
            tittle:"Cantilever Chair",
            code:"Code - Y523201",
            price:"$42.00"
        },
        {
            id:2,
            imagePath:chair2,
            tittle:"Cantilever Chair",
            code:"Code - Y523201",
            price:"$42.00"
        },
        {
            id:3,
            imagePath:chair3,
            tittle:"Cantilever Chair",
            code:"Code - Y523201",
            price:"$42.00"
        },
        {
            id:4,
            imagePath:chair4,
            tittle:"Cantilever Chair",
            code:"Code - Y523201",
            price:"$42.00"
        },

    ]
    return (
    <div className="feautured-products flex flex-col items-center justify-center h-80">
        <h1 className="text-4xl font-extrabold">Featured Products</h1>
        <div className="cards flex items-center justify-around h-auto gap-10 mb-2">
            {featuredProd.map((card)=> (
                <div key={card.id} className="feauturedCard h-60 w-44 bg-slate-200 relative flex flex-col justify-between rounded-sm hover:border-2 border-violet-600 hover:mt-10  group transition-all duration-50 ease-in-out">
                    <div className="icon text-violet-600 hidden group-hover:flex absolute z-10">
                        <div className="elem bg-violet-300 w-fit-40 rounded-full p-1">
                            <BsCart2 className=" text-violet-600 "/>
                        </div>
                        <div className="elem bg-violet-300 w-fit rounded-full p-1">
                            <CiHeart className=" text-violet-600 "/>
                        </div>
                        <div className="elem bg-violet-300 w-fit rounded-full p-1">
                            <FaSearchPlus className=" text-violet-600  "/>
                        </div>
                    </div>
                    
                    <div className="pic h-48 w-full group-hover:h-20 z-0{/*group-hover:w-full*/} flex items-center justify-center transition-all duration-300 ease-in-out">
                        <Image src={card.imagePath} alt="Not Found" className="object-cover"/>
                    </div>
                    <div className="button w-full flex justify-center">
                        <Button variant={"default"} className="bg-green-400 w-fit rounded-sm p-2 hidden absolute bottom-20 group-hover:inline ">view details</Button>
                    </div>
                    <div className="content h-20 bg-white group-hover:bg-violet-600 flex flex-col items-center justify-center rounded-sm group transition-all duration-50 ease-in-out">
                        <h1 className="text-pink-600 group-hover:text-white transition-all duration-300 ease-in-out">{card.tittle}</h1>
                        <div className="colors flex w-11 h-1 gap-1">
                            <div className="elem rounded-md w-3 h-full bg-sky-400"></div>
                            <div className="elem rounded-md w-3 h-full bg-pink-500"></div>
                            <div className="elem rounded-md w-3 h-full bg-purple-800"></div>
                        </div>
                        <h2 className="text-xs">{card.code}</h2>
                        <h2 className="text-xs">{card.price}</h2>

                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default FeaturedProd
