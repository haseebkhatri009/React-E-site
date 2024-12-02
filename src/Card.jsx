// import game from "./image/gameimg.png"
// import keyboard from "./image/keyboardimg.png"
// import tv from "./image/tvimg.png"
// import chair from "./image/chairimg.png"

import ReactStars from 'react-stars'
import { useNavigate } from "react-router-dom";


export default function card(Props) {

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/product/${Props.id}`); 
    };
  return (



    <div className="h-[350px] border border-transparent hover:border-red-200 w-[270px] mb-6">
    <div className="h-[250px] border-red-400 overflow-hidden relative bg-[#F5F5F5] group">    
        <div className="h-[26px] w-[60px] border-black rounded-md mt-3 ml-3 bg-red-500 text-white px-2">
            {Props.discount}
        </div>
        <div className="border-orange-700 w-[200px] m-auto">
            <img 
                className="border-black m-auto h-[150px] mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-110" 
                src={Props.img}  
                alt="" 
            />  
        </div>    
        <div onClick={handleViewDetails} className="h-[35px] border border-black bg-black text-white text-center cursor-pointer hover:text-red-500 absolute top-[215px] w-[270px] py-1">
            View Details
        </div>
    </div>
    <p className=" mt-4 font-semibold overflow-hidden truncate ">{Props.desc}</p>
    <p className="mt-[6px]">
        <span className="text-red-500 font-bold mr-3">{Props.newprice}</span> 
        <span className="text-gray-600 font-bold line-through">{Props.oldprice}</span>
    </p>
    <ReactStars
        count={5}
        value={Props.rating}
        size={24}
        color2={"#FFAD33"}
        edit={false}
    />
</div>

  )
}


    // <div className="h-[350px] w-[270px] mb-6">
    //     <div className="h-[250px]  border-red-400 overflow-hidden relative bg-[#F5F5F5]">    
    //         <div className="h-[26px] w-[55px]  border-black rounded-md mt-3 ml-3 bg-red-500 text-white px-2">{Props.discount}</div>
    //         <div className=" border-orange-700 w-[200px] m-auto">
    //             <img className=" border-black m-auto h-[150px]  mt-3 " src={Props.img}  alt="" />  
    //         </div>    
    //         <div className="h-[35px] border border-black bg-black text-white text-center cursor-pointer hover:text-red-500 absolute top-[215px] w-[270px] py-1">Add To Cart</div>
    //     </div>
    //     <p className=" border-black mt-4 font-semibold">{Props.desc}</p>
    //     <p className="mt-[6px]"><span className="text-red-500 font-bold mr-3">{Props.newprice}</span> <span className="text-gray-600 font-bold line-through ">{Props.oldprice}</span> </p>

    //     <ReactStars
    //       count={5}
    //       value={Props.rating}
    //       // value={2}
    //       size={24}
    //       // color1={"red"}
    //       color2={"#FFAD33"}
    //       edit={false}
    //     />
    // </div>