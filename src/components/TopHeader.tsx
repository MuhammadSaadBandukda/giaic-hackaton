import { CgShoppingCart } from "react-icons/cg";
import { CiHeart, CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";


export default function TopHeader(){
    return(
        <div id="main" className="h-6 bg-violet-600 text-white flex items-center justify-evenly m-0 p-0">
            <div className="content1 flex items-center gap-5">
                <div className="mail flex items-center text-center gap-1">
                    <CiMail className="size-4"/> <h4 className="text-xs">mhhasanul@gmail.com</h4>
                </div>
                <div className="contact mail flex items-center text-center gap-1">
                    <FaPhoneVolume className="size-3"/> <h4 className="text-xs">(12345)67890</h4>
                </div>
            </div>
            <div className="content2">
                <ul className="menu list-none flex gap-5">
                    <li>
                        <div className="elem flex">
                            <h4 className="text-xs">English</h4>
                            <MdOutlineArrowDropDown />
                        </div>
                    </li>
                    <li>
                        <div className="elem flex">
                            <h4 className="text-xs">USD</h4>
                            <MdOutlineArrowDropDown />
                        </div>
                    </li>
                    <li>
                        <div className="elem flex">
                            <h4 className="text-xs">Login</h4>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00277 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z" fill="white"/>
                                <path d="M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z" fill="white"/>
                            </svg>

                        </div>
                    </li>
                    <li>
                        <div className="elem flex">
                            <h4 className="text-xs">Wishlist</h4>
                            <CiHeart/>
                        </div>
                    </li>
                    <li>
                        <div className="elem">
                        <CgShoppingCart/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
