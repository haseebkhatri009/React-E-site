import { Link } from "react-router-dom";

import { VscSend } from "react-icons/vsc";
import qrcode from "./image/qrcodeimg.png"
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="max-w-[1400px] mx-auto">
        <div className="border min-h-[450px] mx-auto flex justify-around flex-wrap pt-[70px] bg-black mt-[140px] footer">
            <div className="h-[188px] border mb-8 text-white exclusive">
                <h1 className="mb-3 text-2xl font-bold ">Exclusive</h1>
                <h2 className="mb-3 font-medium text-[20px]">Subscribe</h2>
                <h3>Get 10% off your first order</h3>
                <div className="h-[46px] w-[217px] mt-3 rounded-lg pl-6 border border-white flex">
                    <input className="bg-black focus:outline-none  w-[120px]" type="text" placeholder="Enter your email" />
                    <VscSend className="text-red-700 h-6 w-6 ml-8 my-auto cursor-pointer"/>
                </div>
            </div>
            <div className=" h-[180px] w-[250px] mb-8 text-white support">
                <h1 className="text-[20px] mb-3 font-medium">Support</h1>
                <h2 className="mb-3">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h2>
                <h3 className="mb-3">exclusive@gmail.com</h3>
                <h4>+88015-88888-9999</h4>
            </div>
            <div className="border h-[236px] mb-8 text-white account">
                <h1 className="text-[20px] mb-5 font-medium">Account</h1>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer">My Account</p>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer"> <Link to="/login">Login / Register</Link></p>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer">Cart</p>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer">Wishlist</p>
                <p className="hover:text-red-500 hover:underline cursor-pointer"><Link to="/view-all-products">Shop</Link></p>
            </div> 
            <div className="h-[196px] border mb-8 text-white quick">
                <h1 className="text-[20px] font-medium mb-5 ">Quick Link</h1>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer">Privacy Policy</p>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer">Terms of Use</p>
                <p className="mb-3 hover:text-red-500 hover:underline cursor-pointer">FAQ</p>
                <p className="hover:text-red-500 hover:underline cursor-pointer"><Link to="/contact">Contact</Link></p>
            </div>
            <div className=" border-white h-[210px] mb-8 text-white download w-[200px]">
                <h1 className="text-[20px] mb-5 font-medium">Download App</h1>
                <p className="text-[12px] mb-2">Save $3 with App New User Only</p>
                <img src={qrcode} alt="" />
                <div className="mt-1 flex justify-around  w-full border-white">
                    <FaFacebookF className="text-2xl hover:text-red-500 cursor-pointer"/>
                    <FiTwitter className="text-2xl hover:text-red-500 cursor-pointer"/>
                    <FaInstagram className="text-2xl hover:text-red-500 cursor-pointer"/> 
                    <FaLinkedin className="text-2xl hover:text-red-500 cursor-pointer"/>
                </div>
            </div>
        </div>

        <div className="flex justify-center text-gray-500 bg-black">
            <FaRegCopyright className="mt-[5px] mr-2"/>
            <p>Copyright Haseeb Khatri. All right reserved</p>
        </div>
    </div>
  )
}
