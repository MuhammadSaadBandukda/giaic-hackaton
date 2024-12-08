import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Header(){
    return(
        <div className="header h-9  items-center flex justify-evenly">
            <div className="logo">
                <h1 className="font-sans text-lg font-bold">Hekto</h1>
            </div>
            <div className="navBar">
            <ul className="menu list-none flex gap-5">
                    <li>
                        <div className="elem flex items-center">
                            <h4 className="text">Home</h4>
                            <MdOutlineArrowDropDown />
                        </div>
                    </li>

                    <li>Pages</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="search flex items-center bg-white w-25 h-5 border border-gray-2000 border-solid">
                <input type="text"  className="bg-transparent "/>

                <CiSearch className="text-sm bg-pink-600 w-6 h-5 text-white"/>
            </div>
        </div>
    )
}