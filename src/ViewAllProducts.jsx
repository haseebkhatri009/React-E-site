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



import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import loader from "./image/loaderimg.gif"


export default function ViewAllProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Track search term

  // Fetch data from dummy API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=80");
      setProducts(response.data.products);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleGoHome = () => {
    navigate("/"); 
  };

  // Filter products based on search term
  const filteredProducts = products?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="text-center text-4xl mt-3 font-mono max-w-[1200px] mx-auto">All Products</div>

      <div className="mt-8 flex justify-center  max-w-[1200px] mx-auto">
        <button
          className="bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600"
          onClick={handleGoHome}
        >
          Go Back to Home
        </button>
      </div>

      <div className="flex justify-center mt-5 f max-w-[1200px] mx-auto">
        <input
          className="border border-gray-300 p-2 focus:outline-none focus:border-red-500 w-[270px]"
          type="search"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
      </div>

      <div className="mt-10 max-w-[1200px] ml-auto mr-auto">
        {loading && <div className=" mt-[30px]"><img className="mx-auto  h-[100px]" src={loader} alt="" /></div> }

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="flex justify-around flex-wrap gap-6">
            {filteredProducts?.length > 0 ? (
               filteredProducts.slice(32, 80).map((product) => (
              // filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  discount={`-${(product.discountPercentage).toFixed(1)}%`}
                  img={product.thumbnail}
                  desc={product.title}
                  oldprice={`$${product.price}`}
                  newprice={`$${(
                    product.price - (product.price * (product.discountPercentage / 100))
                  ).toFixed(2)}`}
                  // (product.price * 100) / (100 - product.discountPercentage)
                  rating={product.rating}
                />
              ))
            ) : (
              <p className="text-center text-lg">No products found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
