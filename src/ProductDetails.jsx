  // // import { useParams } from "react-router-dom";

  // // export default function ProductDetail() {
  // //   const params = useParams();

  // //   console.log("product ", params);

  // //   return (
  // //     <div>
  // //       ProductDetail{' '}
  // //       {params.id}
  // //     </div>
  // //   );
  // // }


  // import loader from "./image/loaderimg.gif"
  // import { useNavigate } from "react-router-dom";
  // import { format } from "date-fns";


  // import { useParams } from "react-router-dom";
  // import { useState, useEffect } from "react";
  // export default function ProductDetail() {
  //   const navigate = useNavigate();
    
    
  //   const { id } = useParams(); // Extract product id from URL parameters
  //   const [product, setProduct] = useState(null); // State to store the product data
  //   const [loading, setLoading] = useState(true); // Loading state to show loading spinner or message
    
  //   useEffect(() => {
  //     // Fetch product details using the product ID from the URL
  //     const fetchProductDetails = async () => {
  //       try {
  //         const response = await fetch(`https://dummyjson.com/products/${id}`);
  //         const data = await response.json();
  //         setProduct(data); // Save the product data to state
  //         setLoading(false); // Set loading to false once data is fetched
  //       } catch (error) {
  //         console.error("Error fetching product data:", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchProductDetails();
  //   }, [id]); // Fetch data when the `id` changes
  //   const handleGoHome = () => {
  //     navigate("/"); 
  //   };

  //   // Show loading message or product details based on loading state
  //   if (loading) {
  //     // return <p className="text-center">Loading product details...</p>;
  //     return <div className="max-w-[1200px] mx-auto  mt-[135px]"><img className="mx-auto  h-[100px]" src={loader} alt="" /></div>
  //   }

  //   // If no product is found, display an error message
  //   if (!product) {
  //     return <p>Product not found!</p>;
  //   }
  //   const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));



  //   return (
  // <>
  //     <div className="product-detail-container border flex justify-around flex-wrap  max-w-[1200px] mx-auto mt-4">
  //       <div className="border">
  //         <img
  //         src={product.thumbnail}
  //         alt={product.title}
  //         className="product-image w-[500px] h-[500px] mt-4"
  //         />        
  //       </div>
      
  //       <div className="border max-w-[500px]">
  //         <h1 className="product-title text-4xl  font-bold">{product.title}</h1>
  //         <p className="product-description mt-4">{product.description}</p>
  //         <p className="product-price mt-2 text-red-500 font-semibold">
  //         Price: ${discountedPrice.toFixed(2)}
  //         </p>
  //         <p className="product-rating mt-1">Rating: {product.rating.toFixed(1)} / 5</p>
  //         <p>Warrenty {product.warrantyInformation}</p>
  //           <p className="product-brand mt-1">Brand: {product.brand}</p>
  //           <p className="product-category mt-1">Category: {product.category}</p>
  //           <p className="product-stock mt-1">Stock: {product.stock}</p>
  //           <p className="product-stock mt-1">Return Policy: {product.returnPolicy}</p>
  //       </div>
  //     </div>


  //           <p className="border product-stock mt-1 max-w-[1200px] mx-auto"><span className="font-bold text-2xl">UserReviews:</span> {product.reviews.map((review ,index)=>{
  //             return(
  //               <>   
  //               <p className="font-bold" key={index}>{review.reviewerName}</p>
  //               <p key={index}>{review.comment}</p>
  //               <p key={index}>{format(new Date(review.date), "MM/dd/yyyy")}</p>
  //               <p key={index}><span className="font-bold">Rating</span> {review.rating}/5</p>
  //               </>
  //             )
  //           })}</p>



  //       {/* <p>{`-${Math.round(product.discountPercentage)}%`}</p> */}
  // </>
  //   );
  // }


// import Footer from "./Footer"   
// import ReactStars from 'react-stars'
// import loader from "./image/loaderimg.gif";
// import { useNavigate } from "react-router-dom";
// import { format } from "date-fns";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function ProductDetail() {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Extract product id from URL parameters
//   const [product, setProduct] = useState(null); // State to store the product data
//   const [loading, setLoading] = useState(true); // Loading state to show loading spinner or message
//   const [counter, setCounter] = useState(0); // Counter state for Add/Subtract
//   const [minimumOrderQuantity, setMinimumOrderQuantity] = useState(1);

//   useEffect(() => {
//     // Fetch product details using the product ID from the URL
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data); // Save the product data to state
//         const minOrderQty = data.minimumOrderQuantity || 1; // Default to 1 if not provided
//         setMinimumOrderQuantity(minOrderQty);
//         setCounter(minOrderQty); // Set counter to minimum order quantity
//         setLoading(false); // Set loading to false once data is fetched
//         setCounter(data.minimumOrderQuantity || 1);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]); // Fetch data when the `id` changes

//   const handleGoHome = () => {
//     navigate("/");
//   };


//   if (loading) {
//     return (
//       <div className="max-w-[1200px] mx-auto mt-[135px] min-h-[100vh]">
//         <img className="mx-auto h-[100px]" src={loader} alt="" />
//       </div>
//     );
//   }

//   // If no product is found, display an error message
//   if (!product) {
//     return <p>Product not found!</p>;
//   }

//   const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));

//   return (
//     <>
//     <div className="border border-green-700 min-h-screen">
//       <div className="product-detail-container flex justify-around flex-wrap max-w-[1200px] mx-auto mt-8 " >
//         <div className=" bg-gray-100 flex items-center  detailimg">
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="product-image  h-[400px] mt-4 "
//           />
//         </div>

//         <div className=" max-w-[390px] px-4  ">
//           <h1 className="product-title text-[24px] font-bold">{product.title}</h1>
//           <ReactStars
//           count={5}
//           value={product.rating}
//           size={24}
//           color2={"#FFAD33"}
//           edit={false}
//           />
//           <p className="product-final-price  font-semibold text-[24px]">${discountedPrice.toFixed(2)}</p>

//           <p className="product-description mt-4">{product.description}</p>
//           <hr  className='border border-gray-300 mt-3'/>

         
//           {/* Counter Section */}
//           <div className="counter mt-4 ">
//           <button className="border border-gray-300 w-[41px] h-[44px]"
//           onClick={() =>
//             setCounter((prev) => (prev > minimumOrderQuantity ? prev - 1 : prev))
//           }>
//           -
//         </button>
//         <button  className="border-y border-gray-300 h-[44px] w-[80px] cursor-auto">{counter}</button>
//         <button className=" w-[41px] h-[44px] bg-red-500 text-white" onClick={() => setCounter((prev) => prev + 1)}>+</button>

//             {/* <p className="mt-2 font-bold">Counter: {counter}</p> */}
//             <p className="product-price mt-2 text-red-500 font-bold text-[20px]"> Price: ${(discountedPrice * counter).toFixed(2)}</p>
//           </div>

//           {/* <p className="product-rating mt-1"><span className='font-bold'>Rating:</span> {product.rating.toFixed(1)} / 5</p> */}
//           <p><span className='font-bold'>Warranty:</span> {product.warrantyInformation}</p>
//           <p className="product-brand "><span className='font-bold'>Shipping Information:</span> {product.shippingInformation}</p>
//           <p className="product-category "><span className='font-bold'>Category:</span> {product.category}</p>
//           <p className="product-stock "><span className='font-bold'>Stock:</span> {product.stock}</p>
//           <p className="product-stock "><span className='font-bold'>Return Policy:</span> {product.returnPolicy}</p>
//           <p className="product-description "><span className='font-bold'>Minimum Quantity</span>{product.minimumOrderQuantity}</p>


//         </div>
//       </div>

//       <hr className="border border-gray-300 mt-14 max-w-[1200px] mx-auto"/>


//     <div className=" max-w-[1200px] mx-auto mt-10 reviewparent">
//       <div className=" product-stock w-[300px] ml-4 px-4  reviewchild">
//         <span className="font-bold text-2xl">User Reviews:</span>
//         {product.reviews.map((review, index) => {
//           return (
//             <div key={index} className="mt-2">
//               <p className="font-bold">{index+1}<span>.</span> {review.reviewerName}</p>
//                             <p>
//                 <ReactStars
//                   count={5}
//                   value={review.rating}
//                   size={17}
//                   color2={"#FFAD33"}
//                   edit={false}
//                 />
//               </p>
//               <p>{review.comment}</p>
//               <p>{format(new Date(review.date), "MM/dd/yyyy")}</p>

//             </div>
//           );
//         })}
//       </div>
//     </div>  

//       <Footer/>
//       </div>    

//     </>
//   );
// }
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import loader from "./image/loaderimg.gif";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function ProductDetails() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(0); // Counter state

  const fetchProductDetails = async () => {
    try {
      const docRef = doc(db, "products", id); // Firebase doc reference
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const productData = docSnap.data();
        setProduct(productData); // Set product data
        // Set default counter value based on minimumOrderQuantity or default to 1
        setQuantity(productData.minimumOrderQuantity || 1); // Default to 1 if no minimum order quantity
      } else {
        console.error("No such product found!");
        setError(true);
      }
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError(true);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    // Check if minimumOrderQuantity is defined, otherwise set to 1
    const minOrderQuantity = product.minimumOrderQuantity || 1;

    if (quantity > minOrderQuantity) {
      setQuantity((prev) => prev - 1);
    } else {
      Swal.fire({
        icon: "info",
        title: "Minimum Order Quantity",
        text: `The minimum order quantity is ${minOrderQuantity}.`,
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Details Not Found",
        text: "Product details not found. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  }, [error]);

  if (loading) {
    return (
      <div className="mt-[190px] h-[100vh]">
        <img className="mx-auto h-[100px]" src={loader} alt="" />
      </div>
    );
  }

  if (error) {
    return null; // Avoid rendering text since SweetAlert will handle this case
  }

  // Calculate total price
  const totalPrice =  (product.price -product.price * (product.discountPercentage / 100)) * quantity;

  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-around flex-wrap mt-3 min-h-[75vh]">
          <div className="w-[400px] max-h-[400px] detailimg my-auto p-2 overflow-hidden ">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="border border-gray-300 product-image rounded-lg h-[380px] bg-white "
            />
          </div>

          <div className="max-w-[400px] min-w-[300px]  flex items-center p-2">
            <div className="border border-gray-300 rounded-lg h-[380px] min-w-[300px] p-10 mx-auto">
            <h1 className="text-3xl font-bold mb-1 break-words">
              {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h1>

              {/* <p className="text-[25px] mb-2"> ${product.price}</p> */}
            <div className="flex">
              <p className="mr-3 text-xl font-bold">{
                product.discountPercentage > 0
                  ? `$${(
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}`
                : `$${product.price}` // Show original price if no discount
                }
              </p>
              <p className="line-through text-gray-500 text-xl">{
                product.discountPercentage > 0 ? `$${product.price}` : null
              }</p>
              </div>

              <hr className="border border-gray-300 mb-2" />
              {/* <div className="border">{product.description}</div> */}
              <p className="text-lg">
                <span className="font-bold"> Stock:</span>{" "}
                <span
                  className={`text-[16px] px-2 rounded ${
                    product.stock < 5
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {product.stock}
                </span>
                {product.stock < 5 && (
                  <span className="text-red-500 text-sm ml-2">Low Stock</span>
                )}
              </p>
              <p className="text-sm mt-1">
                <span className="font-bold">Minimum Order Quantity:</span> {product.minimumOrderQuantity}
              </p>

              <div className="mt-4  flex">
                <div className="flex items-center justify-between border rounded-md w-[159px] border-gray-300 overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    className=" px-3 py-1 text-2xl  border-r border-gray-300"
                  >
                    -
                  </button>
                  <div className=" w-full py-1 text-center">
                    <span className="text-xl font-bold">{quantity}</span>
                  </div>
                  <button
                    onClick={incrementQuantity}
                    className="bg-red-500 text-white px-3 py-1 h-full text-xl "
                  >
                    +
                  </button>
                </div>
                <div className="w-[130px] h-[45px]   leading-[1.3] ml-2"> 
                  <p className=" font-bold text-[18px]">Total Price:</p>
                  <p className=" text-red-500 font-bold">${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <div className=" mt-2">
                  <button className="rounded hover:bg-red-600 poppins bg-red-500 text-white px-7 py-1 text-[18px] ">Add to Cart</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px]  mt-3 mx-auto">
      <h1 className="text-center text-4xl">Product Description</h1>
      <div className="  flex justify-center mt-2"><h1 className="border border-gray-500 rounded-lg   max-w-[600px] ">{product.description}</h1>
      </div>

      </div>
    </>
  );
}
