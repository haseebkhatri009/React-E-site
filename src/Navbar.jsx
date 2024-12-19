// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import user from "./image/user.png"

// const Navbar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'About' },
//     { id: 3, text: 'Contact' },
//   ];
//   const isLoggedIn = false;

//   return (

//     <>
//     <div className=' flex justify-between items-center h-24  mx-auto px-4 '>
//       {/* Logo */}
//       <h1 className='w-full ml-[100px] text-3xl font-bold heading '>Exclusive</h1>

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex border  border-black mr-6'>
//         <input className=' border-black h-[38px] mt-4 hidden md-custom:flex' type="text" placeholder='What are you looking for?' />
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:underline  hover:text-red-500  m-2 cursor-pointer'
//           >
//             {item.text}
//           </li>

//         ))}
//         {!isLoggedIn ? <li className='p-4 hover:underline  hover:text-red-500  m-2 cursor-pointer '>Login</li> : null}
//       </ul>

//       <img className='h-6' src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" alt="" />

//       <img className='ml-4 h-6' src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" alt="" title="Click here to visit cart"/>
//       {!isLoggedIn ?  <img className='ml-4 mr-3' src={user} alt="" /> :  <img className='ml-4 mr-3 h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="" title="Click here to visit profile"/> }

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-white m-4'>Exclusive</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl  text-white  hover:text-red-500 cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//         {!isLoggedIn ? <li className='p-4 border-b rounded-xl  text-white  hover:text-red-500 cursor-pointer border-gray-600'>Login</li> : null}
//       </ul>
//     </div>
//     <hr />
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import user from "./image/user.png";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => setNav(!nav);

//   const navItems = [
//     { id: 1, text: 'Home', path: '/' },
//     { id: 2, text: 'About', path: '/about' },
//     { id: 3, text: 'Contact', path: '/contact' },
//   ];
//   const isLoggedIn = true;

//   return (
//     <>
//       <div className='flex justify-between items-center h-24 mx-auto px-4  border-black max-w-[1200px]'>
//         <h1 className='w-full ml-[100px] text-3xl font-bold heading'>Exclusive</h1>
//         <ul className='hidden md:flex  border-black mr-6'>
//           <input className='border-black h-[38px] mt-4 hidden md-custom:flex' type="text" placeholder='What are you looking for?' />
//           {navItems.map(item => (
//             <li key={item.id} className='p-4 hover:underline hover:text-red-500 m-2 cursor-pointer'>
//               <Link to={item.path}>{item.text}</Link>
//             </li>
//           ))}
//           {!isLoggedIn ? <li className='p-4 hover:underline hover:text-red-500 m-2 cursor-pointer'><Link to="/login">Login</Link></li> : null}
//         </ul>

//         <img className='h-6' src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" alt="" />
//         <img className='ml-4 h-6' src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" alt="" title="Click here to visit cart"/>
//         {!isLoggedIn ? <img className='ml-4 mr-3' src={user} alt="" /> : <img className='ml-4 mr-3 h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="" title="Click here to visit profile" /> }

//         <div onClick={handleNav} className='block md:hidden'>
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>

//         <ul className={nav ? 'z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
//           <h1 className='w-full text-3xl font-bold text-white m-4'>Exclusive</h1>
//           {navItems.map(item => (
//             <li key={item.id} className='p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600'>
//               <Link to={item.path} onClick={() => setNav(false)}>{item.text}</Link>
//             </li>
//           ))}
//           {!isLoggedIn ? <li className='p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600'><Link to="/login"  onClick={() => setNav(false)}>Login</Link></li> : null}
//         </ul>
//       </div>
//       <hr />
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link, useLocation } from 'react-router-dom';
// import user from "./image/user.png";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => setNav(!nav);

//   const location = useLocation(); // Hook to get current route
//   const currentPath = location.pathname; // Current path

//   const navItems = [
//     { id: 1, text: 'Home', path: '/' },
//     { id: 2, text: 'About', path: '/about' },
//     { id: 3, text: 'Contact', path: '/contact' },
//   ];
//   const isLoggedIn = false;

// import React, { useState, useEffect } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link, useLocation } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "./firebase"; // Update the path if needed
// import user from "./image/user.png"; // Your default user image

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const [userImage, setUserImage] = useState(""); // Store user's image URL

//   const handleNav = () => setNav(!nav);

//   const location = useLocation(); // Hook to get the current route
//   const currentPath = location.pathname; // Current path

//   const navItems = [
//     { id: 1, text: "Home", path: "/" },
//     { id: 2, text: "About", path: "/about" },
//     { id: 3, text: "Contact", path: "/contact" },
//   ];

//   // Listen for Firebase auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true); // User is logged in
//         setUserImage(user.photoURL || userImage); // Set user profile image
//       } else {
//         setIsLoggedIn(false); // User is logged out
//         setUserImage(""); // Reset user image
//       }
//     });

//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [userImage]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Firebase logout
//       console.log("User signed out");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center h-24 mx-auto px-4 border-black max-w-[1200px]">
//         <h1 className="w-full ml-[100px] text-3xl font-bold heading">Exclusive</h1>

//         {/* Desktop Navigation Items */}
//         <ul className="hidden md:flex border-black mr-6">
//           <input className="border-black h-[38px] mt-4 hidden md-custom:flex" type="text" placeholder="What are you looking for?" />
//           {navItems.map((item) => (
//             <li
//               key={item.id}
//               className={`p-4 hover:underline hover:text-red-500 m-2 cursor-pointer ${currentPath === item.path ? "text-red-500" : ""}`}
//             >
//               <Link to={item.path}>{item.text}</Link>
//             </li>
//           ))}
//           {!isLoggedIn ? (
//             <li className="p-4 hover:underline hover:text-red-500 m-2 cursor-pointer">
//               <Link to="/login">Login</Link>
//             </li>
//           ) : (
//             <li className="p-4 hover:underline hover:text-red-500 m-2 cursor-pointer">
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           )}
//         </ul>

//         {/* User Profile or Login */}
//         <div className="flex items-center">
//           {isLoggedIn ? (
//             <img className="ml-4 h-8 cursor-pointer" src={userImage || "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"} alt="User Profile" title="Click here to visit profile" />
//           ) : (
//             <img className="ml-4 h-6" src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" alt="Heart Icon" />
//           )}
//           <img className="ml-4 h-6" src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" alt="Shopping Cart" title="Click here to visit cart" />
//         </div>

//         {/* Hamburger Menu */}
//         <div onClick={handleNav} className="block md:hidden">
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>

//         {/* Mobile Menu */}
//         <ul
//           className={
//             nav
//               ? "z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//               : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
//           }
//         >
//           <h1 className="w-full text-3xl font-bold text-white m-4">Exclusive</h1>
//           {navItems.map((item) => (
//             <li
//               key={item.id}
//               className={`p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600 ${currentPath === item.path ? "text-red-500" : ""}`}
//             >
//               <Link to={item.path} onClick={() => setNav(false)}>
//                 {item.text}
//               </Link>
//             </li>
//           ))}
//           {!isLoggedIn ? (
//             <li className="p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600">
//               <Link to="/login" onClick={() => setNav(false)}>
//                 Login
//               </Link>
//             </li>
//           ) : (
//             <li className="p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600">
//               <button onClick={() => { handleLogout(); setNav(false); }}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </div>
//       <hr />
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { PiShoppingCartThin } from "react-icons/pi";

// import { Link, useLocation } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "./firebase"; // Update the path if needed
// import Swal from "sweetalert2"; // Import SweetAlert2
// import user from "./image/user.png"; // Your default user image
// import { useDispatch, useSelector } from "react-redux";
// import { toggleMode } from "./redux/modeSlice";
// import { FaMoon } from "react-icons/fa";
// import { FiSun } from "react-icons/fi";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const [userImage, setUserImage] = useState(""); // Store user's image URL

//   const handleNav = () => setNav(!nav);

//   const location = useLocation(); // Hook to get the current route
//   const currentPath = location.pathname; // Current path

//   const navItems = [
//     { id: 1, text: "Home", path: "/" },
//     { id: 2, text: "About", path: "/about" },
//     { id: 3, text: "Contact", path: "/contact" },
//   ];

//   // Listen for Firebase auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true); // User is logged in
//         setUserImage(user.photoURL || userImage); // Set user profile image

//         // Show SweetAlert for successful login
//         // Swal.fire({
//         //   title: "Success!",
//         //   text: "You are logged in successfully",
//         //   icon: "success",
//         //   confirmButtonColor: "#3085d6",
//         //   confirmButtonText: "Okay",
//         // });
//       } else {
//         setIsLoggedIn(false);
//         setUserImage("");
//       }
//     });

//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [userImage]);

//   const handleLogout = async () => {
//     // Show SweetAlert confirmation before logging out
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you really want to logout?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, logout!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await signOut(auth); // Firebase logout
//         Swal.fire("Logged out!", "You have been logged out successfully.", "success");
//         console.log("User signed out");
//       } catch (error) {
//         Swal.fire("Error", "There was an error logging you out.", "error");
//         console.error("Logout error:", error);
//       }
//     }
//   };
//     const mode = useSelector((state) => state.mode.mode); // Redux state se current mode le rahe ho
//     const dispatch = useDispatch();

//     useEffect(() => {
//       if (mode === "dark") {
//         document.body.setAttribute("data-theme", "business"); // Dark mode theme
//       } else {
//         document.body.setAttribute("data-theme", "light"); // Light mode theme
//       }
//     }, [mode])
//   return (
//     <>

//     <div className="">
//       <div className="flex justify-between items-center h-24 mx-auto px-4  max-w-[1200px]">
//         <h1 className={`w-full ml-[100px] text-3xl font-bold heading `}>Exclusive</h1>

//         {/* Desktop Navigation Items */}
//         <ul className="hidden md:flex  navbarlist border-black mr-12 ">
//           <input className="border-black h-[38px] mt-4 hidden navbarinput md-custom:flex" type="text" placeholder="What are you looking for?" />
//           {navItems.map((item) => (
//             <li
//               key={item.id}
//               className={`p-4 hover:underline hover:text-red-500 m-2 cursor-pointer ${currentPath === item.path ? "text-red-500" : ""}`}
//             >
//               <Link to={item.path}>{item.text}</Link>
//             </li>
//           ))}
//           {!isLoggedIn ? (
//             <li className={`p-4 hover:underline hover:text-red-500 m-2 cursor-pointer ${
//               currentPath === "/login" ? "text-red-500" : ""
//             }`}>
//               <Link to="/login">Login</Link>
//             </li>
//           ) : (
//             <li className="p-4 hover:underline hover:text-red-500 m-2 cursor-pointer">
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           )}
//         </ul>

//         {/* User Profile or Login */}
//         <div className="flex items-center justify-between avatarparent min-w-[110px] ">

//         <button
//           onClick={() => dispatch(toggleMode())}
//           className=""
//         >
//           {mode === "dark" ? <FiSun size={24} className=""/> : <FaMoon size={24}/>
//           }
//         </button>

//         <PiShoppingCartThin size={27} style={{ strokeWidth: '15px' }}/>

//           {isLoggedIn ? (
//             <img className=" h-8 rounded-full cursor-pointer logouticon loginicon" src={userImage || "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"} alt="User Profile" title="Click here to visit profile" />
//           ) : (
//             <img className=" h-8 logouticon loginicon" src={user} alt="UserIcon" />
//           )}

//         </div>

//         {/* Hamburger Menu */}
//         <div onClick={handleNav} className="block md:hidden">
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>

//         {/* Mobile Menu */}
//         <ul
//           className={
//             nav
//               ? "z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//               : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
//           }
//         >
//           <h1 className="w-full text-3xl font-bold text-white m-4">Exclusive</h1>
//           {navItems.map((item) => (
//             <li
//               key={item.id}
//               className={`p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600 ${currentPath === item.path ? "text-red-500" : ""}`}
//             >
//               <Link to={item.path} onClick={() => setNav(false)}>
//                 {item.text}
//               </Link>
//             </li>
//           ))}
//           {!isLoggedIn ? (
//             <li className="p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600">
//               <Link to="/login" onClick={() => setNav(false)}>
//                 Login
//               </Link>
//             </li>
//           ) : (
//             <li className="p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600">
//               <button onClick={() => { handleLogout(); setNav(false); }}>Logout</button>
//             </li>
//           )}
//        </ul>
//       </div>
//       <hr />
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Swal from "sweetalert2";
import user from "./image/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "./redux/modeSlice";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleNav = () => setNav(!nav);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserImage(user.photoURL || "");
      } else {
        setIsLoggedIn(false);
        setUserImage("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        Swal.fire(
          "Logged out!",
          "You have been logged out successfully.",
          "success"
        );
      } catch (error) {
        Swal.fire("Error", "There was an error logging you out.", "error");
        console.error("Logout error:", error);
      }
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query); // Update the search term state

    // If the input is cleared, redirect to homepage immediately
    if (query.trim() === "") {
      navigate("/"); // Redirect to home page
    }
  };

  // Handle form submission (Enter key press)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (searchTerm.trim() !== "") {
      // If the input is not empty, navigate to the search page
      navigate(`/search?query=${searchTerm}`);
    }
  };
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      mode === "dark" ? "business" : "light"
    );
  }, [mode]);

  return (
    <div>
      <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1200px]">
        <h1 className={`w-full ml-[20px] text-3xl font-bold heading`}>
          Exclusive
        </h1>

        {/* Desktop Navigation Items */}
        <ul className="hidden md:flex navbarlist border-black mr-12">
          <form onSubmit={handleSearchSubmit} className="  navbarform">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden h-[40px] mt-4">
              <input
                className="h-[38px]  navbarinput md-custom:flex   focus:outline-none"
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={handleSearchChange}
              />

              <button type="submit" className="ml-3 mt-1">
                <CiSearch size={25} />
              </button>
            </div>
          </form>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 hover:underline hover:text-red-500 m-2 cursor-pointer ${
                currentPath === item.path ? "text-red-500" : ""
              }`}
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <li
              className={`p-4 hover:underline hover:text-red-500 m-2 cursor-pointer ${
                currentPath === "/login" ? "text-red-500" : ""
              }`}
            >
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li className="p-4 hover:underline hover:text-red-500 m-2 cursor-pointer">
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>

        {/* User Profile or Login */}
        <div className="flex items-center justify-between avatarparent min-w-[110px] ">
          <button onClick={() => dispatch(toggleMode())}>
            {mode === "dark" ? <FiSun size={24} /> : <FaMoon size={24} />}
          </button>
          <PiShoppingCartThin size={27} style={{ strokeWidth: "15px" }} />
          {isLoggedIn ? (
            <img
              className="h-8 rounded-full cursor-pointer logouticon loginicon"
              src={
                userImage ||
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
              }
              alt="User Profile"
              title="Click here to visit profile"
            />
          ) : (
            <img
              className="h-8 logouticon loginicon"
              src={user}
              alt="User Icon"
            />
          )}
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            nav
              ? "z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-white m-4">
            Exclusive
          </h1>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600 ${
                currentPath === item.path ? "text-red-500" : ""
              }`}
            >
              <Link to={item.path} onClick={() => setNav(false)}>
                {item.text}
              </Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <li className="p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600">
              <Link to="/login" onClick={() => setNav(false)}>
                Login
              </Link>
            </li>
          ) : (
            <li className="p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600">
              <button
                onClick={() => {
                  handleLogout();
                  setNav(false);
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
