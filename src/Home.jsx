// import { useNavigate } from "react-router-dom";
// import mobile from "./image/mobileimg.png";
// import mobiledark1 from "./image/mobiledark1.jpeg";
// import Card from "./Card"
// import frame from "./image/frameimg.jpeg"
// import playstation1 from "./image/playstation1.png"
// import baji from "./image/bajiimg.png"
// import speakers from "./image/speaker.png"
// import perfume from "./image/perfumeimg.png"
// import loader from "./image/loaderimg.gif"
// import Footer from "./Footer"
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";

// import { CiMobile4 } from "react-icons/ci";
// import { SlScreenDesktop } from "react-icons/sl";
// import { BsSmartwatch } from "react-icons/bs";
// import { CiCamera } from "react-icons/ci";
// import { CiHeadphones } from "react-icons/ci";
// import { VscGame } from "react-icons/vsc";
// import { MdOutlineVerifiedUser } from "react-icons/md";
// import { TbTruckDelivery } from "react-icons/tb";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";

// export default function Home() {

//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true); // Add loading state
//     const [error, setError] = useState(false); // To track error state

//     const handleButtonClick = () => {
//       navigate("/view-all-products");
//     };
//     useEffect(() => {
//         // Fetch products from DummyJSON API
//         fetch("https://dummyjson.com/products?limit=16")
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error("Failed to fetch"); // Throw an error for non-2xx responses
//             }
//             return res.json();
//           })
//           .then((data) => {
//             if (data.products && data.products.length > 0) {
//               setProducts(data.products); // Save fetched data to state
//               setError(false); // No error
//             } else {
//               setError(true); // No products found
//             }
//           })
//           .catch(() => {
//             setError(true); // Handle fetch or response errors
//           })
//           .finally(() => {
//             setLoading(false); // Stop loading
//           });
//       }, []);
//         console.log(products);

//         const mode = useSelector((state) => state.mode.mode);

//     return (
//     <>
//         <div className="h-[344px] mt-10 max-w-[1200px] ml-auto mr-auto  border-black flex justify-between maindiv">
//             <div className={`h-[344px] w-[217px] border-r border-gray-300   sider`}>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Woman Fashion</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Men Fashion</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Electronics</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Home & Lifestyle</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Medicine</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Sports & Outdoor</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Baby & Toys</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Groceries & Pets</p>
//                 <p className="mb-4 hover:underline hover:text-red-500  cursor-pointer px-8">Health & Beauty</p>
//             </div>
//             {/* <div className="h-[344px]  border-red-600  mobile"><img className="mobile" src={mobile} alt="" /></div> */}
//             <div className="h-[344px] border-red-600 mobile mr-3">
//       <img
//         className="mobile h-[344px]"
//         src={mode === "dark" ?mobiledark1 :mobile  } // Conditional rendering
//         alt="Mode-based Image"
//       />
//     </div>
//         </div>

//          <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto  flashsalediv">
//              <div className="h-[103px] w-[211px]  border-black  flashsale">
//                  <div className="h-10 w-24  border-black flex">
//                      <div className="h-10 w-5 rounded-md bg-red-500"></div>
//                      <div className="text-red-500  font-bold ml-3 mt-2">Today</div>
//                  </div>
//                  <div className="mt-6 font-semibold text-4xl poppins">Flash Sales</div>
//              </div>
//          </div>

// <div className="mt-10 flex   mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
// {loading ? ( // Show loading message while fetching
//         // <p>Loading...</p>
//         <div className=" flex  max-w-[1200px]"><img className="h-[100px]" src={loader} alt="" /></div>
//       ) : error ? ( // Show error message if fetch fails or no products found
//         <p>No products found</p>
//       ) : (
//         products.slice(0, 4).map((product) => ( // Slice to limit to 4 cards
//             <Card
//                 key={product.id}
//                 id={product.id}
//                 discount={`-${Math.round(product.discountPercentage).toFixed(1)}%`}// Random discount
//                 img={product.thumbnail} // Product image
//                 desc={product.title} // Product title
//                 // newprice={`$${product.price - (product.price * (product.discountPercentage / 100)).toFixed(0)}`}
//                 newprice={`$${(
//                     product.price - (product.price * (product.discountPercentage / 100))
//                   ).toFixed(2)}`}
//                 oldprice={`$${product.price}`} // Original price
//                 rating={product.rating} // Product rating
//             />
//         ))
//     )}
//   </div>

//         <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
//             <button className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
//                 onClick={handleButtonClick}>
//                     View All Products
//             </button>
//         </div>

//         <hr className="mt-10"/>

//          <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
//              <div className="h-[103px] w-[379px]  border-black  flashsale category">
//                  <div className="h-10 w-[130px]  border-black flex categorydiv">
//                      <div className="h-10 w-5 rounded-md bg-red-500"></div>
//                      <div className="text-red-500  font-bold ml-3 mt-2">Categories</div>
//                  </div>
//                  <div className="mt-6 font-semibold text-4xl poppins browsebycategory">Browse By Category</div>
//              </div>
//          </div>
//          <div className="  max-w-[1200px] ml-auto mr-auto  mt-14 flex justify-around flex-wrap">
//              <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center"><CiMobile4 size={70} className="mx-auto mt-6 mb-2" style={{ strokeWidth: '0.5px' }}/><span className="text-[18px] text-gray-700 font-semibold">Phones</span></div>
//              <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center"><SlScreenDesktop size={65} className="mx-auto mt-6 mb-3   "/><span className="text-[18px] font-semibold text-gray-700">Computers</span></div>
//              <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center "><BsSmartwatch size={70}   className="mx-auto mt-6 mb-2"/><span className="text-[18px] font-semibold text-gray-700" >SmartWatch</span></div>
//              <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center"><CiCamera  size={70} className="mx-auto mt-6 mb-2" style={{ strokeWidth: '0.5px' }}/><span className="text-[18px] font-semibold text-gray-700" >Camera</span></div>
//              <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center"><CiHeadphones size={70} className="mx-auto mt-6 mb-2" style={{ strokeWidth: '0.5px' }}/><span className="text-[18px] font-semibold text-gray-700" >HeadPhones</span></div>
//              <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center"><VscGame size={70} className="mx-auto mt-6 mb-2"/><span className="text-[18px] font-semibold text-gray-700" >Gaming</span></div>

//         </div>

//          <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
//              <div className="h-[103px] w-[389px]  border-black  flashsale category">
//                  <div className="h-10 w-[130px]  border-black flex categorydiv">
//                      <div className="h-10 w-5 rounded-md bg-red-500"></div>
//                      <div className="text-red-500  font-bold ml-3 mt-2">This Month</div>
//                  </div>
//                  <div className="mt-6 font-semibold text-4xl poppins bestsellingproducts">Best Selling Products</div>
//              </div>
//         </div>

// <div className="mt-10 flex  mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
// {loading ? ( // Show loading message while fetching
//         <p>Loading...</p>
//       ) : error ? ( // Show error message if fetch fails or no products found
//         <p>Products Not Found</p>
//       ) : (
//         products.slice(4, 8).map((product) => ( // Slice to limit to 4 cards
//             <Card
//                 key={product.id}
//                 id={product.id}
//                 discount={`-${Math.round(product.discountPercentage).toFixed()}%`}// Random discount
//                 img={product.thumbnail} // Product image
//                 desc={product.title} // Product title
//                 // newprice={`$${product.price - (product.price * (product.discountPercentage / 100)).toFixed(0)}`}
//                 newprice={`$${(
//                     product.price - (product.price * (product.discountPercentage / 100))
//                   ).toFixed(2)}`}
//                 oldprice={`$${product.price}`} // Original price
//                 rating={product.rating} // Product rating
//             />
//         ))
//     )}
//   </div>

//          <div className="max-w-[1200px]  max-h-[520px] mt-6 overflow-hidden  ml-auto mr-auto ">
//              <img className="w-full " src={frame} alt="" />

//          </div>

//         <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
//             <div className="h-[103px] w-[389px]  border-black  flashsale category">
//                 <div className="h-10 w-[140px]  border-black flex categorydiv">
//                     <div className="h-10 w-5 rounded-md bg-red-500"></div>
//                     <div className="text-red-500  font-bold ml-3 mt-2">Our Products</div>
//                 </div>
//                 <div className="mt-6 font-semibold text-4xl poppins bestsellingproducts">Explore Our Products</div>
//             </div>
//          </div>
//          <div className="mt-10 flex  mb-5 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
//     {products.length > 0 ? (
//         products.slice(8, 16).map((product) => ( // Slice to limit to 4 cards
//             <Card
//                 key={product.id}
//                 id={product.id}
//                 discount={`-${(product.discountPercentage).toFixed(1)}%`} // Random discount
//                 img={product.thumbnail} // Product image
//                 desc={product.title} // Product title
//                 // newprice={`$${(product.price * 0.8).toFixed(2)}`}
//                 newprice={`$${(
//                     product.price - (product.price * (product.discountPercentage / 100))
//                   ).toFixed(2)}`}
//                 oldprice={`$${product.price}`} // Original price
//                 rating={product.rating} // Product rating
//             />
//         ))
//     ) : (
//         <p>Loading products...</p> // Loader message
//     )}
// </div>

//          <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
//              <button className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
//                 onClick={handleButtonClick}>
//                     View All Products
//             </button>
//         </div>

//          <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
//              <div className="h-[103px] w-[211px]  border-black  flashsale">
//                  <div className="h-10 w-[100px]   border-black flex">
//                      <div className="h-10 w-5 rounded-md bg-red-500"></div>
//                      <div className="text-red-500  font-bold ml-3 mt-2">Featured</div>
//                  </div>
//                  <div className="mt-6 font-semibold text-4xl poppins">New Arrival</div>
//              </div>
//          </div>

//          <div className="max-w-[1200px] mx-auto border-black  flex justify-between flex-wrap station mt-14">
//              <div className="h-full w-[550px] border-black playstation mb-4"><img src={playstation1} alt="" /></div>
//              <div className="h-full w-[550px] border-black bajiparent">
//                  <div className="  mb-4 baji "><img src={baji} alt="" /></div>
//                  <div className="  border-black flex justify-between flex-wrap centeroid">
//                      <div className=" border-black mb-4"><img src={speakers} alt="" /></div>
//                      <div className=" border-black "><img src={perfume} alt="" /></div>
//                  </div>
//              </div>
//          </div>

//          <div className=" mt-[140px] max-w-[1200px] mx-auto flex justify-around flex-wrap">
//              <div className="mb-7 w-[249px] h-[161px]  "> <div className="h-[58px] w-[58px] bg-black rounded-full text-white flex justify-center items-center mx-auto mt-2"><TbTruckDelivery size={40}/></div><span className="text-[20px] font-semibold flex justify-center mt-5">FREE AND FAST DELIVERY</span><span className="text-[15px] flex justify-center">Free delivery for all orders over $140</span></div>
//              <div className="mb-7 w-[249px] h-[161px]  "> <div className="h-[58px] w-[58px] bg-black rounded-full text-white flex justify-center items-center mx-auto mt-2"><CiHeadphones size={40}/></div><span className="text-[20px] font-semibold flex justify-center mt-5">24/7 CUSTOMER SERVICE</span><span className="text-[15px] flex justify-center">Friendly 24/7 customer support</span></div>
//              <div className="mb-7 w-[249px] h-[161px]  "> <div className="h-[58px] w-[58px] bg-black rounded-full text-white flex justify-center items-center mx-auto mt-2"><MdOutlineVerifiedUser  size={40}/></div><span className="text-[20px] font-semibold flex justify-center mt-5">MONEY BACK GUARANTEE</span><span className="text-[15px] flex justify-center">We return money within 30 days</span></div>

//          </div>

//          <Footer/>

//      </>
//      )
//  }

//firebase data code

import { useNavigate } from "react-router-dom";
import mobile from "./image/mobileimg.png";
import mobiledark1 from "./image/mobiledark1.jpeg";
import Card from "./Card";
import frame from "./image/frameimg.jpeg";
import playstation1 from "./image/playstation1.png";
import baji from "./image/bajiimg.png";
import speakers from "./image/speaker.png";
import perfume from "./image/perfumeimg.png";
import loader from "./image/loaderimg.gif";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CiMobile4 } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { VscGame } from "react-icons/vsc";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { db } from "./firebase"; // Ensure you are correctly initializing Firebase
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleButtonClick = () => {
    navigate("/view-all-products");
  };

  useEffect(() => {
    // Fetch products from Firebase Firestore
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (productsData.length > 0) {
          setProducts(productsData);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const mode = useSelector((state) => state.mode.mode);

  return (
    <>
      <div className="h-[344px] mt-10 max-w-[1200px] ml-auto mr-auto border-black flex justify-between maindiv">
        <div className={`h-[344px] w-[217px] border-r border-gray-300 sider`}>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Woman Fashion
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Men Fashion
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Electronics
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Home & Lifestyle
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Medicine
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Sports & Outdoor
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Baby & Toys
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Groceries & Pets
          </p>
          <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
            Health & Beauty
          </p>
        </div>
        <div className="h-[344px] border-red-600 mobile mr-3">
          <img
            className="mobile h-[344px]"
            src={mode === "dark" ? mobiledark1 : mobile}
            alt="Mode-based Image"
          />
        </div>
      </div>

      <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto flashsalediv">
        <div className="h-[103px] w-[211px] border-black flashsale">
          <div className="h-10 w-24 border-black flex">
            <div className="h-10 w-5 rounded-md bg-red-500"></div>
            <div className="text-red-500 font-bold ml-3 mt-2">Today</div>
          </div>
          <div className="mt-6 font-semibold text-4xl poppins">Flash Sales</div>
        </div>
      </div>

      <div className="mt-10 flex mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap ">
        {loading ? (
          <div className="flex max-w-[1200px] h-[350px]  mb-6">
            <img className="h-[100px] my-auto" src={loader} alt="" />
          </div>
        ) : error ? (
          <div className="h-[350px] mb-6 flex items-center">
            <p className="">No products found</p>
          </div>
        ) : (
          products.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              id={product.id}
              discount={
                product.discountPercentage > 0
                  ? `-${product.discountPercentage?.toFixed(1)}%`
                  : null
              }
              img={product.thumbnail}
              desc={product.name}
              oldprice={
                product.discountPercentage > 0 ? `$${product.price}` : null
              }
              newprice={
                product.discountPercentage > 0
                  ? `$${(
                      product.price -
                      product.price * (product.discountPercentage / 100)
                    ).toFixed(2)}`
                  : `$${product.price}` // Show original price if no discount
              }
              rating={product.rating}
            />
          ))
        )}
      </div>

      <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
        <button
          className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
          onClick={handleButtonClick}
        >
          View All Products
        </button>
      </div>

      <hr className="mt-10" />

      {/* Other sections remain unchanged */}
      <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
        <div className="h-[103px] w-[379px]  border-black  flashsale category">
          <div className="h-10 w-[130px]  border-black flex categorydiv">
            <div className="h-10 w-5 rounded-md bg-red-500"></div>
            <div className="text-red-500  font-bold ml-3 mt-2">Categories</div>
          </div>
          <div className="mt-6 font-semibold text-4xl poppins browsebycategory">
            Browse By Category
          </div>
        </div>
      </div>
      <div className="  max-w-[1200px] ml-auto mr-auto  mt-14 flex justify-around flex-wrap">
        <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center">
          <CiMobile4
            size={70}
            className="mx-auto mt-6 mb-2"
            style={{ strokeWidth: "0.5px" }}
          />
          <span className="text-[18px] text-gray-700 font-semibold">
            Phones
          </span>
        </div>
        <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center">
          <SlScreenDesktop size={65} className="mx-auto mt-6 mb-3   " />
          <span className="text-[18px] font-semibold text-gray-700">
            Computers
          </span>
        </div>
        <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center ">
          <BsSmartwatch size={70} className="mx-auto mt-6 mb-2" />
          <span className="text-[18px] font-semibold text-gray-700">
            SmartWatch
          </span>
        </div>
        <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center">
          <CiCamera
            size={70}
            className="mx-auto mt-6 mb-2"
            style={{ strokeWidth: "0.5px" }}
          />
          <span className="text-[18px] font-semibold text-gray-700">
            Camera
          </span>
        </div>
        <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center">
          <CiHeadphones
            size={70}
            className="mx-auto mt-6 mb-2"
            style={{ strokeWidth: "0.5px" }}
          />
          <span className="text-[18px] font-semibold text-gray-700">
            HeadPhones
          </span>
        </div>
        <div className="h-[145px] w-[170px] border border-gray-300 cursor-pointer hover:border-red-500 mb-3 text-center">
          <VscGame size={70} className="mx-auto mt-6 mb-2" />
          <span className="text-[18px] font-semibold text-gray-700">
            Gaming
          </span>
        </div>
      </div>

      <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
        <div className="h-[103px] w-[389px]  border-black  flashsale category">
          <div className="h-10 w-[130px]  border-black flex categorydiv">
            <div className="h-10 w-5 rounded-md bg-red-500"></div>
            <div className="text-red-500  font-bold ml-3 mt-2">This Month</div>
          </div>
          <div className="mt-6 font-semibold text-4xl poppins bestsellingproducts">
            Best Selling Products
          </div>
        </div>
      </div>

      <div className="mt-10 flex  mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
        {loading ? (
          <div className="flex max-w-[1200px] h-[350px] mb-6">
            <img className="h-[100px] my-auto" src={loader} alt="" />
          </div>
        ) : error ? ( // Show error message if fetch fails or no products found
          <div className="h-[350px] mb-6  flex items-center">
            <p className="">No products found</p>
          </div>
        ) : (
          products.slice(4, 8).map(
            (
              product // Slice to limit to 4 cards
            ) => (
              <Card
                key={product.id}
                id={product.id}
                discount={
                  product.discountPercentage > 0
                    ? `-${product.discountPercentage?.toFixed(1)}%`
                    : null
                }
                img={product.thumbnail}
                desc={product.name}
                oldprice={
                  product.discountPercentage > 0 ? `$${product.price}` : null
                }
                newprice={
                  product.discountPercentage > 0
                    ? `$${(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}`
                    : `$${product.price}` // Show original price if no discount
                }
                rating={product.rating}
              />
            )
          )
        )}
      </div>

      <div className="max-w-[1200px]  max-h-[520px] mt-6 overflow-hidden  ml-auto mr-auto ">
        <img className="w-full p-2" src={frame} alt="" />
      </div>

      <div className="mt-16 h-[103px] max-w-[1200px] ml-auto mr-auto  border-black flashsalediv">
        <div className="h-[103px] w-[389px]  border-black  flashsale category">
          <div className="h-10 w-[140px]  border-black flex categorydiv">
            <div className="h-10 w-5 rounded-md bg-red-500"></div>
            <div className="text-red-500  font-bold ml-3 mt-2">
              Our Products
            </div>
          </div>
          <div className="mt-6 font-semibold text-4xl poppins bestsellingproducts">
            Explore Our Products
          </div>
        </div>
      </div>
      <div className="mt-10 flex  mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
        {loading ? (
          <div className="flex max-w-[1200px] h-[350px] mb-6">
            <img className="h-[100px] my-auto" src={loader} alt="" />
          </div>
        ) : error ? ( // Show error message if fetch fails or no products found
          <div className="h-[350px] mb-6  flex items-center">
            <p className="">No products found</p>
          </div>
        ) : (
          products.slice(8, 12).map(
            (
              product // Slice to limit to 4 cards
            ) => (
              <Card
                key={product.id}
                id={product.id}
                discount={
                  product.discountPercentage > 0
                    ? `-${product.discountPercentage?.toFixed(1)}%`
                    : null
                }
                img={product.thumbnail}
                desc={product.name}
                oldprice={
                  product.discountPercentage > 0 ? `$${product.price}` : null
                }
                newprice={
                  product.discountPercentage > 0
                    ? `$${(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}`
                    : `$${product.price}` // Show original price if no discount
                }
                rating={product.rating}
              />
            )
          )
        )}
      </div>
      <div className="flex justify-center max-w-[1200px] mr-auto ml-auto border-black">
        <button
          className="h-[56px] w-[234px] border-black bg-red-500 text-white font-medium px-12 py-4 cursor-pointer hover:bg-red-600"
          onClick={handleButtonClick}
        >
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
        <div className="h-full w-[550px] border-black playstation mb-4">
          <img src={playstation1} alt="" />
        </div>
        <div className="h-full w-[550px] border-black bajiparent">
          <div className="  mb-4 baji ">
            <img src={baji} alt="" />
          </div>
          <div className="  border-black flex justify-between flex-wrap centeroid">
            <div className=" border-black mb-4">
              <img src={speakers} alt="" />
            </div>
            <div className=" border-black ">
              <img src={perfume} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[140px] max-w-[1200px] mx-auto flex justify-around flex-wrap">
        <div className="mb-7 w-[249px] h-[161px]  ">
          {" "}
          <div className="h-[58px] w-[58px] bg-black rounded-full text-white flex justify-center items-center mx-auto mt-2">
            <TbTruckDelivery size={40} />
          </div>
          <span className="text-[20px] font-semibold flex justify-center mt-5">
            FREE AND FAST DELIVERY
          </span>
          <span className="text-[15px] flex justify-center">
            Free delivery for all orders over $140
          </span>
        </div>
        <div className="mb-7 w-[249px] h-[161px]  ">
          {" "}
          <div className="h-[58px] w-[58px] bg-black rounded-full text-white flex justify-center items-center mx-auto mt-2">
            <CiHeadphones size={40} />
          </div>
          <span className="text-[20px] font-semibold flex justify-center mt-5">
            24/7 CUSTOMER SERVICE
          </span>
          <span className="text-[15px] flex justify-center">
            Friendly 24/7 customer support
          </span>
        </div>
        <div className="mb-7 w-[249px] h-[161px]  ">
          {" "}
          <div className="h-[58px] w-[58px] bg-black rounded-full text-white flex justify-center items-center mx-auto mt-2">
            <MdOutlineVerifiedUser size={40} />
          </div>
          <span className="text-[20px] font-semibold flex justify-center mt-5">
            MONEY BACK GUARANTEE
          </span>
          <span className="text-[15px] flex justify-center">
            We return money within 30 days
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}

//  import { useNavigate } from "react-router-dom";
//  import mobile from "./image/mobileimg.png";
//  import mobiledark1 from "./image/mobiledark1.jpeg";
//  import Card from "./Card";
//  import loader from "./image/loaderimg.gif";
//  import { useEffect, useState } from "react";
//  import { useSelector } from "react-redux";
//  import { db } from "./firebase"; // Import Firebase config
//  import { collection, query, limit, getDocs } from "firebase/firestore";

//  export default function Home() {
//    const navigate = useNavigate();
//    const [products, setProducts] = useState([]);
//    const [loading, setLoading] = useState(true); // Add loading state
//    const [error, setError] = useState(false); // To track error state

//    const mode = useSelector((state) => state.mode.mode);

//    const fetchProductsFromFirebase = async () => {
//      setLoading(true);
//      try {
//        const productsRef = collection(db, "products"); // Firebase collection
//        const q = query(productsRef, limit(4)); // Fetch only 4 products
//        const querySnapshot = await getDocs(q);

//        const productsArray = querySnapshot.docs.map((doc) => ({
//          ...doc.data(),
//          id: doc.id,
//        }));

//        setProducts(productsArray); // Save fetched products
//        setError(false); // Reset error state
//      } catch (err) {
//        console.error("Error fetching products:", err.message);
//        setError(true); // Set error state
//      } finally {
//        setLoading(false); // Stop loading
//      }
//    };

//    useEffect(() => {
//      fetchProductsFromFirebase(); // Fetch products on component mount
//    }, []);

//    return (
//      <>
//        <div className="h-[344px] mt-10 max-w-[1200px] ml-auto mr-auto border-black flex justify-between maindiv">
//          <div className="h-[344px] w-[217px] border-r border-gray-300 sider">
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Woman Fashion
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Men Fashion
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Electronics
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Home & Lifestyle
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Medicine
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Sports & Outdoor
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Baby & Toys
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Groceries & Pets
//            </p>
//            <p className="mb-4 hover:underline hover:text-red-500 cursor-pointer px-8">
//              Health & Beauty
//            </p>
//          </div>
//          <div className="h-[344px] border-red-600 mobile mr-3">
//            <img
//              className="mobile h-[344px]"
//              src={mode === "dark" ? mobiledark1 : mobile} // Conditional rendering
//              alt="Mode-based Image"
//            />
//          </div>
//        </div>

//        <div className="mt-36 h-[103px] max-w-[1200px] ml-auto mr-auto flashsalediv">
//          <div className="h-[103px] w-[211px] border-black flashsale">
//            <div className="h-10 w-24 border-black flex">
//              <div className="h-10 w-5 rounded-md bg-red-500"></div>
//              <div className="text-red-500 font-bold ml-3 mt-2">Today</div>
//            </div>
//            <div className="mt-6 font-semibold text-4xl poppins">Flash Sales</div>
//          </div>
//        </div>

//        <div className="mt-10 flex mb-4 max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
//          {loading ? (
//            <div className="flex max-w-[1200px]">
//              <img className="h-[100px]" src={loader} alt="Loading..." />
//            </div>
//          ) : error ? (
//            <p>No products found</p>
//          ) : (
//            products.map((product) => (
//              <Card
//                key={product.id}
//                id={product.id}
//                discount={
//                  product.discountPercentage
//                    ? `-${product.discountPercentage.toFixed(1)}%`
//                    : null
//                }
//                img={product.thumbnail} // Firebase field for image
//                desc={product.name} // Firebase field for product name
//                newprice={`$${(
//                  product.price -
//                  product.price * (product.discountPercentage / 100)
//                ).toFixed(2)}`}
//                oldprice={`$${product.price}`}
//                rating={product.rating}
//              />
//            ))
//          )}
//        </div>
//      </>
//    );
//  }

//03319918200

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
