// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { useEffect, useState } from "react";

// import Card from "./Card"
// import game from "./image/gameimg.png"
// import keyboard from "./image/keyboardimg.png"
// import tv from "./image/tvimg.png"
// import chair from "./image/chairimg.png"

// export default function ViewAllProducts() {
//     const navigate = useNavigate(); // For navigation

//     const handleGoHome = () => {
//       navigate("/"); // Redirect to Home page
//     };
//   return (
//     <>
//         <div className="text-center text-4xl mt-3 font-mono">All Products</div>

//         <div className="mt-8 flex justify-center">
//         <button
//           className="bg-red-500  text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600"
//           onClick={handleGoHome}
//         >
//           Go Back to Home
//         </button>
//       </div>

//         <div className="mt-10 flex  border-black max-w-[1200px] ml-auto mr-auto justify-around flex-wrap">
//             <Card discount="-50%" img={game} desc="HAVIT HV-G92 Gamepad" newprice="$120" oldprice="$160"rating="5"/>
//             <Card discount="-30%" img={keyboard} desc="AK-900 Wired Keyboard" newprice="$960" oldprice="$1160"rating="2"/>
//             <Card discount="-20%" img={tv} desc="IPS LCD Gaming Monitor" newprice="$370" oldprice="$400"rating="4"/>
//             <Card discount="-10%" img={chair} desc="S-Series Comfort Chair" newprice="$375" oldprice="$400"rating="5"/>
//             <Card discount="-50%" img={game} desc="HAVIT HV-G92 Gamepad" newprice="$120" oldprice="$160"rating="2.5"/>
//             <Card discount="-30%" img={keyboard} desc="AK-900 Wired Keyboard" newprice="$960" oldprice="$1160"rating="5"/>
//             <Card discount="-20%" img={tv} desc="IPS LCD Gaming Monitor" newprice="$370" oldprice="$400"rating="5"/>
//             <Card discount="-10%" img={chair} desc="S-Series Comfort Chair" newprice="$375" oldprice="$400"rating="3.5"/>
//             <Card discount="-50%" img={game} desc="HAVIT HV-G92 Gamepad" newprice="$120" oldprice="$160"rating="3"/>
//             <Card discount="-30%" img={keyboard} desc="AK-900 Wired Keyboard" newprice="$960" oldprice="$1160"rating="5"/>
//             <Card discount="-20%" img={tv} desc="IPS LCD Gaming Monitor" newprice="$370" oldprice="$400"rating="3"/>
//             <Card discount="-10%" img={chair} desc="S-Series Comfort Chair" newprice="$375" oldprice="$400"rating="5"/>
//         </div>           
//     </> 
//   )
// }




// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Card from "./Card";

// export default function ViewAllProducts() {
//   const navigate = useNavigate();   
//   const [products, setProducts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); 

//   // Fetch data from dummy API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/products?limit=32");
//       setProducts(response.data.products); 
//     } catch (err) {
//       setError("Failed to load products. Please try again later.");
//       console.error(err);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleGoHome = () => {
//     navigate("/"); 
//   };

//   return (
//     <>
//       <div className="text-center text-4xl mt-3 font-mono">All Products</div>

//       <div className="mt-8 flex justify-center">
//         <button
//           className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600"
//           onClick={handleGoHome}
//         >
//           Go Back to Home
//         </button>
//       </div>
//       <div className="flex justify-center mt-5">
//         <input className="border" type="search" />
//       </div>

//       <div className="mt-10 max-w-[1200px] ml-auto mr-auto">
//         {loading && <p className="text-center text-lg">Loading...</p>}

//         {error && <p className="text-center text-red-500">{error}</p>}

//         {!loading && !error && (
//           <div className="flex justify-around flex-wrap gap-6">
//             {products.map((product) => (
//               <Card
//                 key={product.id}
//                 discount={`-${Math.round(product.discountPercentage)}%`}
//                 img={product.thumbnail}
//                 desc={product.title}
//                   newprice={`$${product.price}`}
//                   oldprice={`$${((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}`}
//                   rating={product.rating}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Card from "./Card";
// import loader from "./image/loaderimg.gif"


// export default function ViewAllProducts() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState(""); // Track search term

//   // Fetch data from dummy API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/products?limit=80");
//       setProducts(response.data.products);
//     } catch (err) {
//       setError("Failed to load products. Please try again later.");
//       console.error(err);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleGoHome = () => {
//     navigate("/"); 
//   };

//   // Filter products based on search term
//   const filteredProducts = products?.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="text-center text-4xl mt-3 font-mono max-w-[1200px] mx-auto">All Products</div>

//       <div className="mt-8 flex justify-center  max-w-[1200px] mx-auto">
//         <button
//           className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600"
//           onClick={handleGoHome}
//         >
//           Go Back to Home
//         </button>
//       </div>

//       <div className="flex justify-center mt-5 f max-w-[1200px] mx-auto">
//         <input
//           className="border border-gray-300 p-2 focus:outline-none focus:border-red-500 w-[270px]"
//           type="search"
//           placeholder="Search products"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
//         />
//       </div>

//       <div className="mt-10 max-w-[1200px] ml-auto mr-auto">
//         {loading && <div className=" mt-[30px]"><img className="mx-auto  h-[100px]" src={loader} alt="" /></div> }

//         {error && <p className="text-center text-red-500">{error}</p>}

//         {!loading && !error && (
//           <div className="flex justify-around flex-wrap gap-6">
//             {filteredProducts?.length > 0 ? (
//                filteredProducts.slice(32, 80).map((product) => (
//               // filteredProducts.map((product) => (
//                 <Card
//                   key={product.id}
//                   id={product.id}
//                   discount={`-${(product.discountPercentage).toFixed(1)}%`}
//                   img={product.thumbnail}
//                   desc={product.title}
//                   oldprice={`$${product.price}`}
//                   newprice={`$${(
//                     product.price - (product.price * (product.discountPercentage / 100))
//                   ).toFixed(2)}`}
//                   // (product.price * 100) / (100 - product.discountPercentage)
//                   rating={product.rating}
//                 />
//               ))
//             ) : (
//               <p className="text-center text-lg">No products found</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }




//updated code with sweetalert


// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Swal from "sweetalert2"; // Import SweetAlert
// import Card from "./Card";
// import loader from "./image/loaderimg.gif";

// export default function ViewAllProducts() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false); // Error as boolean
//   const [searchTerm, setSearchTerm] = useState(""); // Search term
//   const [searchResults, setSearchResults] = useState([]); // Store search results
//   const [hasErrorShown, setHasErrorShown] = useState(false); // Prevent multiple alerts

//   // Fetch data from API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/products?limit=80"); // API URL
//       if (response.data.products.length === 0) {
//         setError(true);
//         Swal.fire({
//           title: "No Products Found!",
//           text: "No products are available in the API response.",
//           icon: "error",
//           confirmButtonText: "Okay",
//         });
//       } else {
//         setProducts(response.data.products);
//         setError(false); // Reset error
//       }
//     } catch (err) {
//       if (!hasErrorShown) {
//         console.error("Error while fetching products:", err.message); 
//         Swal.fire({
//           title: "Error",
//           text: "Failed to fetch products from the API.",
//           icon: "error",
//           confirmButtonText: "Okay",
//         });
//         setError(true);
//         setHasErrorShown(true); // Prevent duplicate alerts
//       }
//     } finally {
//       setLoading(false); // Always stop loader
//     }
//   };

//   // Fetch products only once
//   useEffect(() => {
//     fetchProducts();
//   }, []); // Empty dependency array ensures it runs once

//   const handleGoHome = () => {
//     navigate("/");
//   };

//   // Handle search functionality
//   const handleSearch = (e) => {
//     e.preventDefault(); // Prevent page reload
//     const filtered = products?.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (filtered?.length > 0) {
//       setSearchResults(filtered); // Set results
//     } else {
//       setSearchResults([]); // No results
//       Swal.fire({
//         title: "No Products Found!",
//         text: "We couldn't find any products matching your search term.",
//         icon: "error",
//         confirmButtonText: "Okay",
//       });
//     }
//   };

//   return (
//     <>
//     <div className="min-h-[100vh] border border-blue-900">
//       <div className="text-center text-4xl mt-3 font-mono max-w-[1200px] mx-auto">All Products</div>

//       <div className="mt-8 flex justify-center max-w-[1200px] mx-auto">
//         <button
//           className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600"
//           onClick={handleGoHome}
//         >
//           Go Back to Home
//         </button>
//       </div>

//       <form
//         className="flex justify-center mt-5 max-w-[1200px] mx-auto"
//         onSubmit={handleSearch} // Trigger search on form submit
//       >
//         <input
//           className="border border-gray-300 p-2 focus:outline-none focus:border-red-500 w-[270px]"
//           type="search"
//           placeholder="Search products"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update search term
//         />
//         <button
//           type="submit"
//           className="ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Search
//         </button>
//       </form>

//       <div className="mt-10 max-w-[1200px] ml-auto mr-auto">
//         {loading && (
//           <div className="mt-[30px]">
//             <img className="mx-auto h-[100px]" src={loader} alt="Loading..." />
//           </div>
//         )}

//         {error && !hasErrorShown && <p className="text-center text-red-500">Failed to load products. Please try again later.</p>}

//         {!loading && !error && (
//           <div className="flex justify-around flex-wrap gap-6">
//             {searchResults?.length > 0 ? (
//               searchResults.map((product) => (
//                 <Card
//                   key={product.id}
//                   id={product.id}
//                   discount={`-${product.discountPercentage.toFixed(1)}%`}
//                   img={product.thumbnail}
//                   desc={product.title}
//                   oldprice={`$${product.price}`}
//                   newprice={`$${(
//                     product.price -
//                     product.price * (product.discountPercentage / 100)
//                   ).toFixed(2)}`}
//                   rating={product.rating}
//                 />
//               ))
//             ) : (
//               products?.map((product) => (
//                 <Card
//                   key={product.id}
//                   id={product.id}
//                   discount={`-${product.discountPercentage.toFixed(1)}%`}
//                   img={product.thumbnail}
//                   desc={product.title}
//                   oldprice={`$${product.price}`}
//                   newprice={`$${(
//                     product.price -
//                     product.price * (product.discountPercentage / 100)
//                   ).toFixed(2)}`}
//                   rating={product.rating}
//                 />
//               ))
//             )}
//           </div>
//         )}
//       </div>
//       </div>  
//     </>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Card from "./Card";
import loader from "./image/loaderimg.gif";

export default function ViewAllProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null); // Holds all products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [searchResults, setSearchResults] = useState([]); // Filtered search results
  const [hasErrorShown, setHasErrorShown] = useState(false); // Prevent showing error multiple times

  // Fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = [];
      querySnapshot.forEach((doc) => {
        productsArray.push({ ...doc.data(), id: doc.id });
      });
      console.log("Fetched Products:", productsArray);
      setProducts(productsArray);
      setError(false);
    } catch (err) {
      if (!hasErrorShown) {
        console.error("Error fetching products:", err.message);
        Swal.fire({
          title: "Error",
          text: "Failed to fetch products from Firebase.",
          icon: "error",
          confirmButtonText: "Okay",
        });
        setError(true);
        setHasErrorShown(true);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle navigation back to home
  const handleGoHome = () => {
    navigate("/");
  };

  // Handle search input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Reset search results if the input is cleared
    if (value.trim() === "") {
      setSearchResults([]);
    }
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      // Reset search results if input is empty
      setSearchResults([]);
      return;
    }

    const filtered = products?.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered?.length > 0) {
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
      Swal.fire({
        title: "No Products Found!",
        text: "We couldn't find any products matching your search term.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="min-h-[100vh] ">
      <div className="text-center text-4xl mt-3 font-mono max-w-[1200px] mx-auto">
        All Products
      </div>

      <div className="mt-8 flex justify-center max-w-[1200px] mx-auto">
        <button
          className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600"
          onClick={handleGoHome}
        >
          Go Back to Home
        </button>
      </div>

      <form
        className="flex justify-center mt-5 max-w-[1200px] mx-auto"
        onSubmit={handleSearch}
      >
        <input
          className="border border-gray-300 p-2 focus:outline-none focus:border-red-500 w-[270px]"
          type="search"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="mt-10 max-w-[1200px] ml-auto mr-auto">
        {loading && (
          <div className="mt-[30px]">
            <img className="mx-auto h-[100px]" src={loader} alt="Loading..." />
          </div>
        )}

        {error && !hasErrorShown && (
          <p className="text-center text-red-500">
            Failed to load products. Please try again later.
          </p>
        )}

        {!loading && !error && (
          <div className="flex justify-around flex-wrap gap-6">
            {(searchResults?.length > 0 ? searchResults : products)?.map(
              (product) => (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
