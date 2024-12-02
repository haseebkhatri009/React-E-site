
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



import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import user from "./image/user.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const location = useLocation(); // Hook to get current route
  const currentPath = location.pathname; // Current path

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Contact', path: '/contact' },
  ];
  const isLoggedIn = false;

  return (
    <>
      <div className='flex justify-between items-center h-24 mx-auto px-4 border-black max-w-[1200px]'>
        <h1 className='w-full ml-[100px] text-3xl font-bold heading'>Exclusive</h1>
        <ul className='hidden md:flex border-black mr-6'>
          <input className='border-black h-[38px] mt-4 hidden md-custom:flex' type="text" placeholder='What are you looking for?' />
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 hover:underline hover:text-red-500 m-2 cursor-pointer ${
                currentPath === item.path ? 'text-red-500' : ''
              }`}
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
          {!isLoggedIn ? <li className='p-4 hover:underline hover:text-red-500 m-2 cursor-pointer'><Link to="/login">Login</Link></li> : null}
        </ul>

        <img className='h-6' src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png" alt="" />
        <img className='ml-4 h-6' src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" alt="" title="Click here to visit cart" />
        {!isLoggedIn ? (
          <img className='ml-4 mr-3' src={user} alt="" />
        ) : (
          <img className='ml-4 mr-3 h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="" title="Click here to visit profile" />
        )}

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? 'z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <h1 className='w-full text-3xl font-bold text-white m-4'>Exclusive</h1>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600 ${
                currentPath === item.path ? 'text-red-500' : ''
              }`}
            >
              <Link to={item.path} onClick={() => setNav(false)}>
                {item.text}
              </Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <li className='p-4 border-b rounded-xl text-white hover:text-red-500 cursor-pointer border-gray-600'>
              <Link to="/login" onClick={() => setNav(false)}>
                Login
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
