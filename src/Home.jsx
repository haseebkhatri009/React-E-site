import { useNavigate } from "react-router-dom";
import mobile from "./image/mobileimg.png";
import Card from "./Card"
// import game from "./image/gameimg.png"
// import keyboard from "./image/keyboardimg.png"
// import tv from "./image/tvimg.png"
// import chair from "./image/chairimg.png"
import phone from "./image/phoneimg.png"
import computer from "./image/computerimg.png"
import smartwatch from "./image/smartwatchimg.png"
import camera from "./image/cameraimg.png"
import headphone from "./image/headphoneimg.png"
import gaming from "./image/gamingimg.png"
// import jacket from "./image/jacketimg.png"
// import purse from "./image/purseimg.png"
// import speaker from "./image/speakerimg.png"
// import bookshelf from "./image/bookshelfimg.png"
// import dogfood from "./image/dogfoodimg.png"
// import camera1 from "./image/camera.png"
// import laptop from "./image/laptopimg.png"
// import car from "./image/carimg.png"
// import shoes from "./image/shoesimg.png"
// import gamepad from "./image/gamepadimg.png"
// import leatherjacket from "./image/leatherjacketimg.png"
import frame from "./image/frameimg.jpeg"
// import playstation from "./image/playstation.png"
import playstation1 from "./image/playstation1.png"
import baji from "./image/bajiimg.png"
import speakers from "./image/speaker.png"
import perfume from "./image/perfumeimg.png"
import freedelivery from "./image/freedeliveryimg.png"
import customerservice from "./image/customerserviceimg.png"
import moneyback from "./image/moneybackimg.png"
import loader from "./image/loaderimg.gif"
import Footer from "./Footer"
import { useEffect, useState } from "react";
import axios from "axios";








export default function Home() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(false); // To track error state



    const handleButtonClick = () => {
      navigate("/view-all-products"); // Navigates to the View All Products page
    };

    // useEffect(() => {
    //     // Fetch products from DummyJSON API
    //     fetch("https://dummyjson.com/products?limit=16")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data.products); // Save fetched data to state
    //         })
    //         .catch((err) => console.error("Error fetching products:", err));
    // }, []);

    useEffect(() => {
        // Fetch products from DummyJSON API
        fetch("https://dummyjson.com/products?limit=16")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch"); // Throw an error for non-2xx responses
            }
            return res.json();
          })
          .then((data) => {
            if (data.products && data.products.length > 0) {
              setProducts(data.products); // Save fetched data to state
              setError(false); // No error
            } else {
              setError(true); // No products found
            }
          })
          .catch(() => {
            setError(true); // Handle fetch or response errors
          })
          .finally(() => {
            setLoading(false); // Stop loading
          });
      }, []);
        console.log(products);
        
    return (
    <>
        <div className="h-[344px] mt-10 max-w-[1200px] ml-auto mr-auto  border-black flex justify-between maindiv">
            <div className="h-[344px] w-[217px] border border-gray-200  sider">
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Woman Fashion</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Men Fashion</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Electronics</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Home & Lifestyle</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Medicine</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Sports & Outdoor</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Baby & Toys</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Groceries & Pets</p>
                <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Health & Beauty</p>
            </div>
            <div className="h-[344px]  border-red-600  mobile"><img className="mobile" src={mobile} alt="" /></div>
        </div>
        
         <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto  flashsalediv">
             <div className="h-[103px] w-[211px]  border-black  flashsale">
                 <div className="h-10 w-24  border-black flex">
                     <div className="h-10 w-5 rounded-md bg-red-500"></div>
                     <div className="text-red-500  font-bold ml-3 mt-2">Today</div>
                 </div>
                 <div className="mt-6 font-semibold text-4xl poppins">Flash Sales</div>
             </div>
         </div>

         {/* <div className="mt-10 flex  border-black max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
             <Card discount="-50%" img={game} desc="HAVIT HV-G92 Gamepad" newprice="$120" oldprice="$160" rating="5"/>
             <Card discount="-30%" img={keyboard} desc="AK-900 Wired Keyboard" newprice="$960" oldprice="$1160" rating="4"/>
             <Card discount="-20%" img={tv} desc="IPS LCD Gaming Monitor" newprice="$370" oldprice="$400" rating="5"/>
             <Card discount="-10%" img={chair} desc="S-Series Comfort Chair" newprice="$375" oldprice="$400" rating="4.5"/>
         </div> */}


            {/* Dynamic Product Cards Section */}
            {/* <div className="mt-10 flex border-black max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
                {products.length > 0 ? (
                     products.map((product) => (
                         <Card
                             key={product.id}
                             discount={`${Math.floor(Math.random() * 50) + 10}%`} // Random discount
                             img={product.thumbnail} // Product image
                             desc={product.title} // Product title
                             newprice={`$${(product.price * 0.8).toFixed(2)}`} // Example discounted price
                             oldprice={`$${product.price}`} // Original price
                             rating={product.rating} // Product rating
                         />
                     ))
                 ) : (
                     <p>Loading products...</p> // Loader message
                 )}
             </div> */}


<div className="mt-10 flex   mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
{loading ? ( // Show loading message while fetching
        // <p>Loading...</p>
        <div className=" flex  max-w-[1200px]"><img className="h-[100px]" src={loader} alt="" /></div>
      ) : error ? ( // Show error message if fetch fails or no products found
        <p>No products found</p>
      ) : (
        products.slice(0, 4).map((product) => ( // Slice to limit to 4 cards
            <Card
                key={product.id}
                id={product.id}
                discount={`-${Math.round(product.discountPercentage).toFixed(1)}%`}// Random discount
                img={product.thumbnail} // Product image
                desc={product.title} // Product title
                // newprice={`$${product.price - (product.price * (product.discountPercentage / 100)).toFixed(0)}`} 
                newprice={`$${(
                    product.price - (product.price * (product.discountPercentage / 100))
                  ).toFixed(2)}`} 
                oldprice={`$${product.price}`} // Original price
                rating={product.rating} // Product rating
            />
        ))
    )}
  </div>




        <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
            <button className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
                onClick={handleButtonClick}>
                    View All Products
            </button>
        </div>

        <hr className="mt-10"/>

         <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
             <div className="h-[103px] w-[379px]  border-black  flashsale category">
                 <div className="h-10 w-[130px]  border-black flex categorydiv">
                     <div className="h-10 w-5 rounded-md bg-red-500"></div>
                     <div className="text-red-500  font-bold ml-3 mt-2">Categories</div>
                 </div>
                 <div className="mt-6 font-semibold text-4xl poppins browsebycategory">Browse By Category</div>
             </div>
         </div>
         <div className="  max-w-[1200px] ml-auto mr-auto  mt-14 flex justify-around flex-wrap">
             <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3"><img src={phone} alt="" /></div>
             <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3"><img src={computer} alt="" /></div>
             <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3"><img src={smartwatch} alt="" /></div>
             <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3"><img src={camera} alt="" /></div>
             <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3"><img src={headphone} alt="" /></div>
            <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3"><img src={gaming} alt="" /></div>
        </div>

         <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
             <div className="h-[103px] w-[389px]  border-black  flashsale category">
                 <div className="h-10 w-[130px]  border-black flex categorydiv">
                     <div className="h-10 w-5 rounded-md bg-red-500"></div>
                     <div className="text-red-500  font-bold ml-3 mt-2">This Month</div>
                 </div>
                 <div className="mt-6 font-semibold text-4xl poppins bestsellingproducts">Best Selling Products</div>
             </div>
        </div>

         {/* <div className="mt-10 flex  max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
             <Card discount="-50%" img={jacket} desc="The north coat" newprice="$120" oldprice="$160" rating="5"/>
             <Card discount="-30%" img={purse} desc="Gucci duffle bag" newprice="$960" oldprice="$1160" rating="4.5"/>
             <Card discount="-20%" img={speaker} desc="RGB liquid CPU Cooler" newprice="$370" oldprice="$400" rating="4.5"/>
             <Card discount="-10%" img={bookshelf} desc="Small BookShelf" newprice="$375" oldprice="$400" rating="5" />
         </div> */}




<div className="mt-10 flex  mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
{loading ? ( // Show loading message while fetching
        <p>Loading...</p>
      ) : error ? ( // Show error message if fetch fails or no products found
        <p>Products Not Found</p>
      ) : (
        products.slice(4, 8).map((product) => ( // Slice to limit to 4 cards
            <Card
                key={product.id}
                id={product.id}
                discount={`-${Math.round(product.discountPercentage).toFixed()}%`}// Random discount
                img={product.thumbnail} // Product image
                desc={product.title} // Product title
                // newprice={`$${product.price - (product.price * (product.discountPercentage / 100)).toFixed(0)}`} 
                newprice={`$${(
                    product.price - (product.price * (product.discountPercentage / 100))
                  ).toFixed(2)}`} 
                oldprice={`$${product.price}`} // Original price
                rating={product.rating} // Product rating
            />
        ))
    )}
  </div>

         <div className="max-w-[1200px]  max-h-[520px] mt-6 overflow-hidden  ml-auto mr-auto ">
             <img className="w-full " src={frame} alt="" />
            
         </div>

        <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
            <div className="h-[103px] w-[389px]  border-black  flashsale category">
                <div className="h-10 w-[140px]  border-black flex categorydiv">
                    <div className="h-10 w-5 rounded-md bg-red-500"></div>
                    <div className="text-red-500  font-bold ml-3 mt-2">Our Products</div>
                </div>
                <div className="mt-6 font-semibold text-4xl poppins bestsellingproducts">Explore Our Products</div>
            </div>
         </div>

         {/* <div className="mt-[45px] flex  border-black max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
             <Card discount="-50%" img={dogfood} desc="Breed Dry Dog Food" newprice="$120" oldprice="$160" rating="3"/>
             <Card discount="-30%" img={camera1} desc="CANON EOS DSLR Camera" newprice="$960" oldprice="$1160"rating="4"/>
             <Card discount="-20%" img={laptop} desc="ASUS FHD Gaming Laptop" newprice="$370" oldprice="$400"rating="5"/>
             <Card discount="-10%" img={bookshelf} desc="Small BookShelf" newprice="$375" oldprice="$400"rating="4"/>
         </div>

         <div className="mt-10 flex  border-black max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
             <Card discount="-50%" img={car} desc="Kids Electric Car" newprice="$120" oldprice="$160"rating="5"/>
             <Card discount="-30%" img={shoes} desc="Jr. Zoom Soccer Cleats" newprice="$960" oldprice="$1160"rating="5"/>
             <Card discount="-20%" img={gamepad} desc="GP11 Shooter USB Gamepad" newprice="$370" oldprice="$400"rating="4.5"/>
             <Card discount="-10%" img={leatherjacket} desc="Quilted Satin Jacket" newprice="$375" oldprice="$400"rating="4.5"/>
         </div> */}
         <div className="mt-10 flex  mb-5 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
    {products.length > 0 ? (
        products.slice(8, 16).map((product) => ( // Slice to limit to 4 cards
            <Card
                key={product.id}
                id={product.id}
                discount={`-${(product.discountPercentage).toFixed(1)}%`} // Random discount
                img={product.thumbnail} // Product image
                desc={product.title} // Product title
                // newprice={`$${(product.price * 0.8).toFixed(2)}`}
                newprice={`$${(
                    product.price - (product.price * (product.discountPercentage / 100))
                  ).toFixed(2)}`} 
                oldprice={`$${product.price}`} // Original price
                rating={product.rating} // Product rating
            />
        ))
    ) : (
        <p>Loading products...</p> // Loader message
    )}
</div>

         <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
             <button className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
                onClick={handleButtonClick}>
                    View All Products
            </button>
        </div>

         <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
             <div className="h-[103px] w-[211px]  border-black  flashsale">
                 <div className="h-10 w-[100px]   border-black flex">
                     <div className="h-10 w-5 rounded-md bg-red-500"></div>
                     <div className="text-red-500  font-bold ml-3 mt-2">Featured</div>
                 </div>
                 <div className="mt-6 font-semibold text-4xl poppins">New Arrival</div>
             </div>
         </div>

         <div className="max-w-[1200px] mx-auto border-black  flex justify-between flex-wrap station mt-14">
             <div className="h-full w-[550px] border-black playstation mb-4"><img src={playstation1} alt="" /></div>
             <div className="h-full w-[550px] border-black bajiparent">
                 <div className="  mb-4 baji "><img src={baji} alt="" /></div>
                 <div className="  border-black flex justify-between flex-wrap centeroid">
                     <div className=" border-black mb-4"><img src={speakers} alt="" /></div>
                     <div className=" border-black "><img src={perfume} alt="" /></div>
                 </div>
             </div>
         </div>

         <div className=" mt-[140px] max-w-[1200px] mx-auto flex justify-around flex-wrap">
             <div className="mb-7"><img src={freedelivery} alt="" /></div>
             <div className="mb-7"><img src={customerservice} alt="" /></div>
             <div className="mb-7"><img src={moneyback} alt="" /></div>
         </div>

        
         <Footer/>

     </>
     )
 }






// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import mobile from "./image/mobileimg.png";
// import Footer from "./Footer";
// import Card from "./Card";

// export default function Home() {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]); // State to hold API data

//     const handleButtonClick = () => {
//         navigate("/view-all-products"); // Navigate to the View All Products page
//     };

    // useEffect(() => {
    //     // Fetch products from DummyJSON API
    //     fetch("https://dummyjson.com/products?limit=10")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data.products); // Save fetched data to state
    //         })
    //         .catch((err) => console.error("Error fetching products:", err));
    // }, []);

//     return (
//         <>
//             {/* Sidebar and Mobile Image Section */}
//             <div className="h-[344px] mt-10 max-w-[1200px] ml-auto mr-auto border-black flex justify-between maindiv">
//                 <div className="h-[344px] w-[217px] border border-gray-200 sider">
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Woman Fashion</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Men Fashion</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Electronics</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Home & Lifestyle</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Medicine</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Sports & Outdoor</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Baby & Toys</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Groceries & Pets</p>
//                     <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">Health & Beauty</p>
//                 </div>
//                 <div className="h-[344px] border-red-600 mobile">
//                     <img className="mobile" src={mobile} alt="Mobile" />
//                 </div>
//             </div>

//             {/* Flash Sales Section */}
//             <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto border-black flashsalediv">
//                 <div className="h-[103px] w-[211px] border-black flashsale">
//                     <div className="h-10 w-24 border-black flex">
//                         <div className="h-10 w-5 rounded-md bg-red-500"></div>
//                         <div className="text-red-500 font-bold ml-3 mt-2">Today</div>
//                     </div>
//                     <div className="mt-6 font-semibold text-4xl poppins">Flash Sales</div>
//                 </div>
//             </div>

//             {/* Dynamic Product Cards Section */}
//             <div className="mt-10 flex border-black max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <Card
//                             key={product.id}
//                             discount={`${Math.floor(Math.random() * 50) + 10}%`} // Random discount
//                             img={product.thumbnail} // Product image
//                             desc={product.title} // Product title
//                             newprice={`$${(product.price * 0.8).toFixed(2)}`} // Example discounted price
//                             oldprice={`$${product.price}`} // Original price
//                             rating={product.rating} // Product rating
//                         />
//                     ))
//                 ) : (
//                     <p>Loading products...</p> // Loader message
//                 )}
//             </div>

//             {/* View All Products Button */}
//             <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
//                 <button
//                     className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
//                     onClick={handleButtonClick}
//                 >
//                     View All Products
//                 </button>
//             </div>

//             {/* Additional Image Section */}
//             <div className="mt-[140px] max-w-[1200px] mx-auto flex justify-around flex-wrap">
//                 <div className="mb-7">
//                     <img src="./image/freedeliveryimg.png" alt="Free Delivery" />
//                 </div>
//                 <div className="mb-7">
//                     <img src="./image/customerserviceimg.png" alt="Customer Service" />
//                 </div>
//                 <div className="mb-7">
//                     <img src="./image/moneybackimg.png" alt="Money Back" />
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </>
//     );
// }
