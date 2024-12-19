import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "./firebase"; // Firebase Firestore import
import { collection, getDocs } from "firebase/firestore";
import loader from "./image/loaderimg.gif";

import Swal from "sweetalert2"; // For showing any errors or messages

const SearchProduct = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query"); // Get the query from URL params

  useEffect(() => {
    // If search term is empty, redirect to homepage
    if (!searchTerm) {
      navigate("/"); // Redirect to homepage
      return;
    }

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const productsRef = collection(db, "products"); // Reference to your Firestore collection
        const querySnapshot = await getDocs(productsRef);

        if (querySnapshot.empty) {
          Swal.fire({
            title: "No results found",
            text: `No products found for "${searchTerm}"`,
            icon: "info",
          });
        }

        // Filter products by matching the search term (case-insensitive)
        const results = querySnapshot.docs
          .map((doc) => doc.data()) // Map each document to its data
          .filter(
            (product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive partial match
          );

        if (results.length === 0) {
          Swal.fire({
            title: "No results found",
            text: `No products found for "${searchTerm}"`,
            icon: "info",
          });
        }

        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results: ", error);
        Swal.fire({
          title: "Error",
          text: "There was an error fetching the search results.",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchTerm, navigate]); // Add navigate to the dependency array

  const handleSearchChange = (e) => {
    const query = e.target.value;
    if (query.trim() === "") {
      navigate("/"); // Redirect to homepage immediately when input is cleared
    } else {
      navigate(`/search?query=${query}`); // Update URL when input changes
    }
  };

  return (
    <div className="container mx-auto px-4 py-8  max-w-[1200px]">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <form className="flex items-center mb-4">
        <p className="text-[25px]">"{searchTerm}"</p>
      </form>
      {loading ? (
        // <p className="h-[100vh]"></p>
        <div className="h-[50vh] flex justify-center ">
          <img className="h-[100px] mt-3" src={loader} alt="" />
        </div>
      ) : (
        <>
          {searchResults.length > 0 ? (
            <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between">
              {searchResults.map((product, index) => (
                <div key={index} className="rounded-lg">
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
                      product.discountPercentage > 0
                        ? `$${product.price}`
                        : null
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
                </div>
              ))}
            </div>
          ) : (
            <p className="h-[50vh]">No products found for "{searchTerm}"</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchProduct;
