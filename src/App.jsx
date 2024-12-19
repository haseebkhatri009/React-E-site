// import Banner from './Banner'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Navbar from './Navbar'

// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';

// // import Card from './Card/card'
// import './index.css'
// function App() {

//   const isLoggedIn = false;
//   return (
//     <>
//       <Banner/>
//       <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>

//       {/* <Navbar/> */}
//       {/* <Card/> */}
//     </>
//   )
// }

// export default App




// import Banner from './Banner';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';
// import ViewAllProducts from "./ViewAllProducts";
// import ProductDetail from './ProductDetails';
// import Signup from './Signup';
// import './index.css';

// function App() {
//   const isLoggedIn = false;
  

//   // Custom Protected Route Component
//   const ProtectedRoute = ({ element }) => {
//     return isLoggedIn ? element : <Navigate to="/login" replace />;
//   };

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Adjust the path if needed
import Banner from "./Banner";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import ViewAllProducts from "./ViewAllProducts";
import ProductDetail from "./ProductDetails";
import AdminPage from "./AdminPage";
import Signup from "./Signup";
import Example from "./Example";
import ForgetPassword from "./ForgetPassword.jsx";
import "./index.css";
import SearchProduct from "./SearchProduct"; // Import the search page




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check Firebase authentication state on app load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Custom Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" replace />;
  };
  // const mode = useSelector((state) => state.mode.mode); 
  // const dispatch = useDispatch();
  return (
    <>
    
      <Banner />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Use ProtectedRoute to protect the Contact route */}
          <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/view-all-products" element={<ViewAllProducts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/product/:id" element={<ProductDetail />} /> 
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="/search" element={<SearchProduct />} />



        </Routes>
      </Router>
      
    </>
  );
}

export default App;
