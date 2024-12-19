// import React, { useState } from "react";
// import { db } from "./firebase"; // Firebase ka configuration import karein
// import { collection, addDoc } from "firebase/firestore"; // Firestore functions
// import Swal from "sweetalert2"; // Alert ke liye SweetAlert

// export default function AdminPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     discountPercentage: "",
//     rating: "",
//     thumbnail: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault(); // Prevent page reload
//     setLoading(true);

//     try {
//       // Firestore me data add karna
//       const docRef = await addDoc(collection(db, "products"), {
//         ...formData,
//         price: parseFloat(formData.price), // Ensure price is number
//         discountPercentage: parseFloat(formData.discountPercentage),
//         rating: parseFloat(formData.rating),
//       });

//       Swal.fire({
//         title: "Success!",
//         text: "Product added successfully.",
//         icon: "success",
//         confirmButtonText: "OK",
//       });

//       // Form clear karna
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         discountPercentage: "",
//         rating: "",
//         thumbnail: "",
//       });
//     } catch (error) {
//       console.error("Error adding product: ", error);
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to add product. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     } finally {
//       setLoading(false); // Loading state ko reset karna
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
//       <form
//         onSubmit={handleFormSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//             Title
//           </label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             placeholder="Product Title"
//             value={formData.title}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="description"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             placeholder="Product Description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
//             Price
//           </label>
//           <input
//             id="price"
//             name="price"
//             type="number"
//             placeholder="Product Price"
//             value={formData.price}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="discountPercentage"
//           >
//             Discount Percentage
//           </label>
//           <input
//             id="discountPercentage"
//             name="discountPercentage"
//             type="number"
//             step="0.01"
//             placeholder="Discount Percentage"
//             value={formData.discountPercentage}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
//             Rating
//           </label>
//           <input
//             id="rating"
//             name="rating"
//             type="number"
//             step="0.1"
//             placeholder="Rating (out of 5)"
//             value={formData.rating}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="thumbnail"
//           >
//             Thumbnail URL
//           </label>
//           <input
//             id="thumbnail"
//             name="thumbnail"
//             type="url"
//             placeholder="Thumbnail URL"
//             value={formData.thumbnail}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             disabled={loading}
//           >
//             {loading ? "Adding..." : "Add Product"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { db } from "./firebase"; // Firebase imports
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"; // Firestore functions
// import Swal from "sweetalert2"; // For alerts
// import { useSelector } from "react-redux";

// export default function AdminPage() {
//   const [products, setProducts] = useState([]); // Store products
//   const [loading, setLoading] = useState(true); // Page loading state
//   const [loadingButton, setLoadingButton] = useState(false); // Button loading state
//   const [productData, setProductData] = useState({
//     name: "",
//     price: "",
//     discountPercentage: "",
//     thumbnail: "",
//     description: "",
//     minimumOrderQuantity: "", // New field for minimum order quantity
//   });
//   const [isEditing, setIsEditing] = useState(false); // Track editing mode
//   const [editProductId, setEditProductId] = useState(null); // ID of the product being edited

//   // Fetch products from Firestore
//   const fetchProducts = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "products"));
//       const productsArray = querySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setProducts(productsArray);
//     } catch (err) {
//       console.error("Error fetching products:", err.message);
//       Swal.fire("Error", "Failed to fetch products.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Add or Update product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate fields
//     if (
//       !productData.name ||
//       !productData.price ||
//       !productData.thumbnail ||
//       !productData.description ||
//       productData.description.length < 30 ||
//       !productData.minimumOrderQuantity
//     ) {
//       Swal.fire(
//         "Error",
//         "Please fill in all fields, and ensure the description is at least 30 characters long.",
//         "error"
//       );
//       return;
//     }

//     setLoadingButton(true); // Set button to loading state

//     try {
//       if (isEditing && editProductId) {
//         // Update product in Firestore
//         const productRef = doc(db, "products", editProductId);
//         await updateDoc(productRef, {
//           name: productData.name,
//           price: Number(productData.price),
//           discountPercentage: Number(productData.discountPercentage) || 0,
//           thumbnail: productData.thumbnail,
//           description: productData.description,
//           minimumOrderQuantity: Number(productData.minimumOrderQuantity), // Save new field
//         });
//         Swal.fire("Success", "Product updated successfully.", "success");
//       } else {
//         // Add new product to Firestore
//         await addDoc(collection(db, "products"), {
//           name: productData.name,
//           price: Number(productData.price),
//           discountPercentage: Number(productData.discountPercentage) || 0,
//           thumbnail: productData.thumbnail,
//           description: productData.description,
//           minimumOrderQuantity: Number(productData.minimumOrderQuantity), // Save new field
//         });
//         Swal.fire("Success", "Product added successfully.", "success");
//       }

//       // Reset form and state
//       setProductData({
//         name: "",
//         price: "",
//         discountPercentage: "",
//         thumbnail: "",
//         description: "",
//         minimumOrderQuantity: "", // Reset new field
//       });
//       setIsEditing(false);
//       setEditProductId(null);
//       fetchProducts(); // Refresh product list
//     } catch (err) {
//       console.error("Error saving product:", err.message);
//       Swal.fire("Error", "Failed to save product.", "error");
//     } finally {
//       setLoadingButton(false); // Reset button to normal state
//     }
//   };

//   // Delete a product
//   const deleteProduct = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to delete this product?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, "products", id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//         fetchProducts(); // Refresh product list
//       } catch (err) {
//         console.error("Error deleting product:", err.message);
//         Swal.fire("Error", "Failed to delete product.", "error");
//       }
//     }
//   };

//   // Edit a product
//   const editProduct = (product) => {
//     setIsEditing(true);
//     setEditProductId(product.id);
//     setProductData({
//       name: product.name,
//       price: product.price,
//       discountPercentage: product.discountPercentage || "",
//       thumbnail: product.thumbnail,
//       description: product.description || "",
//       minimumOrderQuantity: product.minimumOrderQuantity || "", // Load new field
//     });
//   };

//   const mode = useSelector((state) => state.mode.mode);

//   return (
    // <div className={`min-h-screen p-5 ${mode === "dark" ? "" : "bg-gray-100"}`}>
//       <h1 className="text-3xl font-bold text-center mb-5">Admin Page</h1>

//       {/* Add or Edit Product Form */}
//       <form
//         className={`max-w-xl mx-auto border border-gray-300 p-5 rounded shadow ${mode === "dark" ? "" : "bg-white"}`}
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-xl font-semibold mb-4">
//           {isEditing ? "Edit Product" : "Add Product"}
//         </h2>
//         <div className="mb-4">
//           <label className="block mb-1">Product Name</label>
//           <input
//             type="text"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.name}
//             onChange={(e) => setProductData({ ...productData, name: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Price</label>
//           <input
//             type="number"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.price}
//             onChange={(e) => setProductData({ ...productData, price: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Discount Percentage</label>
//           <input
//             type="number"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.discountPercentage}
//             onChange={(e) =>
//               setProductData({ ...productData, discountPercentage: e.target.value })
//             }
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Image URL</label>
//           <input
//             type="text"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.thumbnail}
//             onChange={(e) => setProductData({ ...productData, thumbnail: e.target.value })}
//           />
//         </div>
        // <div className="mb-4">
        //   <label className="block mb-1">Product Description</label>
        //   <textarea
        //     className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
        //     value={productData.description}
        //     onChange={(e) =>
        //       setProductData({ ...productData, description: e.target.value })
        //     }
        //   />
        //   {productData.description.length > 0 &&
        //     productData.description.length < 30 && (
        //       <p className="text-red-500 text-sm mt-1">
        //         Description must be at least 30 characters.
        //       </p>
        //     )}
        // </div>
//         <div className="mb-4">
//           <label className="block mb-1">Minimum Order Quantity</label>
//           <input
//             type="number"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.minimumOrderQuantity}
//             onChange={(e) =>
//               setProductData({ ...productData, minimumOrderQuantity: e.target.value })
//             }
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//           disabled={loadingButton}
//         >
//           {loadingButton ? "Processing..." : isEditing ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {/* Products List */}
//       <div className="mt-10 max-w-[1200px] mx-auto">
//         <h2 className="text-2xl font-semibold text-center mb-4">All Products</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {loading ? (
//             <p className="text-center">Loading products...</p>
//           ) : products.length === 0 ? (
//             <p className="text-center">No products found.</p>
//           ) : (
//             products.map((product) => (
//               <div
//                 key={product.id}
//                 className={`p-4 border border-gray-300 rounded shadow ${mode === "dark" ? "" : "bg-white"}`}
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.name}
//                   className="mx-auto h-[160px] bg-white object-cover rounded mb-2"
//                 />
//                 <h3 className="font-semibold text-lg">{product.name}</h3>
//                 <p className="text-sm text-gray-600">{product.description}</p>
//                 <p className="text-sm mt-1">
//                   Price: ${product.price}{" "}
//                   {product.discountPercentage > 0 && (
//                     <span className="text-green-500">(-{product.discountPercentage}%)</span>
//                   )}
//                 </p>
//                 <p className="text-sm mt-1">
//                   Minimum Order Quantity: {product.minimumOrderQuantity}
//                 </p>
//                 <div className="mt-4 flex justify-between">
//                   <button
//                     className="bg-yellow-500 text-white px-3 py-1 rounded"
//                     onClick={() => editProduct(product)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                     onClick={() => deleteProduct(product.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { db } from "./firebase"; // Import Firebase configuration
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import Swal from "sweetalert2";
// import { useSelector } from "react-redux";

// export default function AdminPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loadingButton, setLoadingButton] = useState(false);
//   const [productData, setProductData] = useState({
//     name: "",
//     price: "",
//     discountPercentage: "",
//     thumbnail: "",
//     description: "",
//     minimumOrderQuantity: "",
//     stock: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [nameError, setNameError] = useState("");

//   const mode = useSelector((state) => state.mode.mode);

//   // Fetch products from Firestore
//   const fetchProducts = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "products"));
//       const productsArray = querySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setProducts(productsArray);
//     } catch (err) {
//       console.error("Error fetching products:", err.message);
//       Swal.fire("Error", "Failed to fetch products.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Validate the product name length
//   const validateName = (name) => {
//     if (name.length < 5) {
//       setNameError("Minimum 5 characters required.");
//     } else if (name.length > 35) {
//       setNameError("Maximum 35 characters allowed.");
//     } else {
//       setNameError("");
//     }
//   };

//   // Add or Edit product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       !productData.name ||
//       !productData.price ||
//       !productData.thumbnail ||
//       !productData.description ||
//       productData.description.length < 30 ||
//       !productData.minimumOrderQuantity ||
//       !productData.stock ||
//       nameError
//     ) {
//       Swal.fire(
//         "Error",
//         "Please fill in all fields, and ensure the description is at least 30 characters long.",
//         "error"
//       );
//       return;
//     }

//     setLoadingButton(true);

//     try {
//       if (isEditing && editProductId) {
//         const productRef = doc(db, "products", editProductId);
//         await updateDoc(productRef, {
//           name: productData.name,
//           price: Number(productData.price),
//           discountPercentage: Number(productData.discountPercentage) || 0,
//           thumbnail: productData.thumbnail,
//           description: productData.description,
//           minimumOrderQuantity: Number(productData.minimumOrderQuantity),
//           stock: Number(productData.stock),
//         });
//         Swal.fire("Success", "Product updated successfully.", "success");
//       } else {
//         // Check for duplicate product name
//         const existingProduct = products.find(
//           (product) => product.name.toLowerCase() === productData.name.toLowerCase()
//         );
//         if (existingProduct) {
//           Swal.fire("Error", "Product with this name already exists.", "error");
//           setLoadingButton(false);
//           return;
//         }

//         await addDoc(collection(db, "products"), {
//           name: productData.name,
//           price: Number(productData.price),
//           discountPercentage: Number(productData.discountPercentage) || 0,
//           thumbnail: productData.thumbnail,
//           description: productData.description,
//           minimumOrderQuantity: Number(productData.minimumOrderQuantity),
//           stock: Number(productData.stock),
//         });
//         Swal.fire("Success", "Product added successfully.", "success");
//       }

//       setProductData({
//         name: "",
//         price: "",
//         discountPercentage: "",
//         thumbnail: "",
//         description: "",
//         minimumOrderQuantity: "",
//         stock: "",
//       });
//       setIsEditing(false);
//       setEditProductId(null);
//       fetchProducts();
//     } catch (err) {
//       console.error("Error saving product:", err.message);
//       Swal.fire("Error", "Failed to save product.", "error");
//     } finally {
//       setLoadingButton(false);
//     }
//   };

//   // Edit a product
//   const editProduct = (product) => {
//     setIsEditing(true);
//     setEditProductId(product.id);
//     setProductData({
//       name: product.name,
//       price: product.price,
//       discountPercentage: product.discountPercentage || "",
//       thumbnail: product.thumbnail,
//       description: product.description || "",
//       minimumOrderQuantity: product.minimumOrderQuantity || "",
//       stock: product.stock || "",
//     });

//     // Scroll to the top of the page
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Delete a product
//   const deleteProduct = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to delete this product?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, "products", id));
//         Swal.fire("Deleted!", "The product has been deleted.", "success");
//         fetchProducts();
//       } catch (err) {
//         console.error("Error deleting product:", err.message);
//         Swal.fire("Error", "Failed to delete product.", "error");
//       }
//     }
//   };

//   return (
//     <div className={`min-h-screen p-5 ${mode === "dark" ? "" : "bg-gray-100"}`}>
//       <h1 className="text-3xl font-bold text-center mb-5">Admin Page</h1>

//       <form
//         className={`max-w-xl mx-auto border border-gray-300 p-5 rounded shadow ${mode === "dark" ? "" : "bg-white"}`}
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-4">
//           <label className="block mb-1">Name</label>
//           <input
//             type="text"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.name}
//             onChange={(e) => {
//               setProductData({ ...productData, name: e.target.value });
//               validateName(e.target.value);
//             }}
//           />
//           {nameError && (
//             <p className="text-red-500 text-sm mt-1">{nameError}</p>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Price</label>
//           <input
//             type="number"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.price}
//             onChange={(e) => setProductData({ ...productData, price: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Discount</label>
//           <input
//             type="number"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.discountPercentage}
//             onChange={(e) => setProductData({ ...productData, discountPercentage: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Thumbnail</label>
//           <input
//             type="text"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.thumbnail}
//             onChange={(e) => setProductData({ ...productData, thumbnail: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Product Description</label>
//           <textarea
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.description}
//             onChange={(e) =>
//               setProductData({ ...productData, description: e.target.value })
//             }
//           />
//           {productData.description.length > 0 &&
//             productData.description.length < 30 && (
//               <p className="text-red-500 text-sm mt-1">
//                 Description must be at least 30 characters.
//               </p>
//             )}
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Minimum order</label>
//           <input
//             type="text"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.minimumOrderQuantity}
//             onChange={(e) => setProductData({ ...productData, minimumOrderQuantity: e.target.value })}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Stock</label>
//           <input
//             type="number"
//             className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
//             value={productData.stock}
//             onChange={(e) => setProductData({ ...productData, stock: e.target.value })}
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//           disabled={loadingButton}
//         >
//           {isEditing ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       <div className="mt-10">
//   {loading ? (
//     <p>Loading products...</p>
//   ) : (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => {
//         const discountedPrice = product.discountPercentage
//           ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
//           : product.price;

//         return (
//           <div
//             key={product.id}
//             className={`border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 ${
//               mode === "dark" ? "bg-gray-700 text-white" : "bg-white"
//             }`}
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.name}
//               className="w-full h-48 object-contain rounded-md mb-4  bg-white"
//             />
//             <h2 className="text-lg font-bold mb-2">{product.name}</h2>
//             <p className="text-sm  mb-2">Stock: {product.stock}</p>
//             <p className="text-sm  mb-2">
//               Discount: {product.discountPercentage || 0}%
//             </p>
//             <p className="text-lg font-semibold mb-4">
//               Price: ${discountedPrice}{" "}
//               {(
//                 <span className="line-through text-gray-500">
//                   {product.discountPercentage === 0 ? "" : `$${product.price}`}
//                 </span>
//               )}
//             </p>
//             <div className="flex justify-between">
//               <button
//                 onClick={() => editProduct(product)}
//                 className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteProduct(product.id)}
//                 className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   )}
// </div>


//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { db } from "./firebase"; // Import Firebase configuration
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axios from "axios"; // Import Axios

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    discountPercentage: "",
    thumbnail: null, // Initialize as null
    description: "",
    minimumOrderQuantity: "",
    stock: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [nameError, setNameError] = useState("");

  const mode = useSelector((state) => state.mode.mode);

  // Fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsArray);
    } catch (err) {
      console.error("Error fetching products:", err.message);
      Swal.fire("Error", "Failed to fetch products.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Validate the product name length
  const validateName = (name) => {
    if (name.length < 5) {
      setNameError("Minimum 5 characters required.");
    } else if (name.length > 35) {
      setNameError("Maximum 35 characters allowed.");
    } else {
      setNameError("");
    }
  };

  // Upload image to ImgBB and get the URL
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("https://api.imgbb.com/1/upload?key=2d4ef1386c551c0c734cfcbe65d1bb82", formData);
      return response.data.data.url; // Return the image URL
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire("Error", "Failed to upload image.", "error");
      return null;
    }
  };

  // Add or Edit product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !productData.name ||
      !productData.price ||
      !productData.thumbnail ||
      !productData.description ||
      productData.description.length < 30 ||
      !productData.minimumOrderQuantity ||
      !productData.stock ||
      nameError
    ) {
      Swal.fire(
        "Error",
        "Please fill in all fields, and ensure the description is at least 30 characters long.",
        "error"
      );
      return;
    }

    setLoadingButton(true);

    try {
      // If thumbnail is a file, upload it
      if (productData.thumbnail && typeof productData.thumbnail === "object") {
        const imageUrl = await uploadImage(productData.thumbnail);
        if (!imageUrl) return; // If upload fails, exit
        productData.thumbnail = imageUrl; // Set the thumbnail to the uploaded image URL
      }

      if (isEditing && editProductId) {
        const productRef = doc(db, "products", editProductId);
        await updateDoc(productRef, {
          name: productData.name,
          price: Number(productData.price),
          discountPercentage: Number(productData.discountPercentage) || 0,
 thumbnail: productData.thumbnail,
          description: productData.description,
          minimumOrderQuantity: Number(productData.minimumOrderQuantity),
          stock: Number(productData.stock),
        });
        Swal.fire("Success", "Product updated successfully.", "success");
      } else {
        // Check for duplicate product name
        const existingProduct = products.find(
          (product) => typeof product.name === 'string' && product.name.toLowerCase() === productData.name.toLowerCase()
        );
        if (existingProduct) {
          Swal.fire("Error", "Product with this name already exists.", "error");
          setLoadingButton(false);
          return;
        }

        await addDoc(collection(db, "products"), {
          name: productData.name,
          price: Number(productData.price),
          discountPercentage: Number(productData.discountPercentage) || 0,
          thumbnail: productData.thumbnail,
          description: productData.description,
          minimumOrderQuantity: Number(productData.minimumOrderQuantity),
          stock: Number(productData.stock),
        });
        Swal.fire("Success", "Product added successfully.", "success");
      }

      setProductData({
        name: "",
        price: "",
        discountPercentage: "",
        thumbnail: null, // Reset to null
        description: "",
        minimumOrderQuantity: "",
        stock: "",
      });
      setIsEditing(false);
      setEditProductId(null);
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err.message);
      Swal.fire("Error", "Failed to save product.", "error");
    } finally {
      setLoadingButton(false);
    }
  };

  // Edit a product
  const editProduct = (product) => {
    setIsEditing(true);
    setEditProductId(product.id);
    setProductData({
      name: product.name,
      price: product.price,
      discountPercentage: product.discountPercentage || "",
      thumbnail: product.thumbnail,
      description: product.description || "",
      minimumOrderQuantity: product.minimumOrderQuantity || "",
      stock: product.stock || "",
    });

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete a product
  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "products", id));
        Swal.fire("Deleted!", "The product has been deleted.", "success");
        fetchProducts();
      } catch (err) {
        console.error("Error deleting product:", err.message);
        Swal.fire("Error", "Failed to delete product.", "error");
      }
    }
  };

  return (
    <div className={`${mode === "dark" ? "" : "bg-gray-100"} max-w-[1400px] mx-auto`}>
    <div className={`min-h-screen p-5  max-w-[1200px] mx-auto`}>
      <h1 className="text-3xl font-bold text-center mb-5">Admin Page</h1>

      <form
        className={`max-w-xl mx-auto border border-gray-300 p-5 rounded shadow ${mode === "dark" ? "" : "bg-white"}`}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            value={productData.name}
            onChange={(e) => {
              setProductData({ ...productData, name: e.target.value });
              validateName(e.target.value);
            }}
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price</label>
          <input
            type="number"
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Discount</label>
          <input
            type="number"
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            value={productData.discountPercentage}
            onChange={(e) => setProductData({ ...productData, discountPercentage: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            onChange={(e) => setProductData({ ...productData, thumbnail: e.target.files[0] })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Product Description</label>
          <textarea
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
          />
          {productData.description.length > 0 &&
            productData.description.length < 30 && (
              <p className="text-red-500 text-sm mt-1">
                Description must be at least 30 characters.
              </p>
            )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Minimum order</label>
          <input
            type="text"
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            value={productData.minimumOrderQuantity}
            onChange={(e) => setProductData({ ...productData, minimumOrderQuantity: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Stock</label>
          <input
            type="number"
            className={`w-full border p-2 rounded text-black ${mode === "dark" ? "bg-gray-300" : ""}`}
            value={productData.stock}
            onChange={(e) => setProductData({ ...productData, stock: e.target.value })}
          />
        </div>
        <div className=" flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 "
            disabled={loadingButton}
          >
            {loadingButton ? "Processing..." : isEditing ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>

      <div className="mt-10">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const discountedPrice = product.discountPercentage
                ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
                : product.price;

              return (
                <div
                  key={product.id}
                  className={`border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 ${
                    mode === "dark" ? "bg-gray-700 text-white" : "bg-white"
                  }`}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-md mb-4 bg-white "
                  />
                  <h2 className="text-lg font-bold mb-2  h-16 break-words">{product.name}</h2>
                  <p className="text-sm mb-2">Stock: {product.stock}</p>
                  <p className="text-sm mb-2">
                    Discount: {product.discountPercentage || 0}%
                  </p>
                  <p className="text-lg font-semibold mb-4">
                    Price: ${discountedPrice}{" "}
                    {(
                      <span className="line-through text-gray-500">
                        {product.discountPercentage === 0 ? "" : `$${product.price}`}
                      </span>
                    )}
                  </p>
                  <div className="flex justify-between ">
                    <button
                      onClick={() => editProduct(product)}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                    
                  </div>
                  <p className="text-sm font-bold  text-center "> {index + 1}</p>

                </div>
                
  );
            })}
          </div>
        )}
      </div>
    </div>
    </div>
  );
} 






