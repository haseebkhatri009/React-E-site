// // import React from "react";
// // import { Link } from "react-router-dom";

// // function Siginup() {
// //   return (

// //     <section className="bg-gray-50 dark:bg-black border">
// //       <div className="flex flex-col items-center border mx-auto md:h-screen lg:py-0">
// //         <div className="w-full bg-white rounded-lg shadow dark:border border mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

// //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8  border">
// //             <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
// //               Create an account
// //             </h1>
// //             <form className="space-y-4 md:space-y-6 " action="#">
// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block mb-2 text-sm font-medium text-black dark:text-white"
// //                 >
// //                   Your email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   id="email"
// //                   className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5  "
// //                   placeholder="name@company.com"
// //                   required=""
// //                 />
// //               </div>
// //               <div>
// //                 <label
// //                   htmlFor="password"
// //                   className="block mb-2 text-sm font-medium text-black dark:text-white"
// //                 >
// //                   Password
// //                 </label>
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   id="password"
// //                   placeholder="••••••••"
// //                   className="bg-gray-50 border border-gray-300 text-black text-sm rounded  block w-full p-2.5"
// //                   required=""
// //                 />
// //               </div>
// //               <div>
// //                 <label
// //                   htmlFor="confirm-password"
// //                   className="block mb-2 text-sm font-medium text-black dark:text-white"
// //                 >
// //                   Confirm password
// //                 </label>
// //                 <input
// //                   type="confirm-password"
// //                   name="confirm-password"
// //                   id="confirm-password"
// //                   placeholder="••••••••"
// //                   className="bg-gray-50 border border-gray-300 text-black text-sm    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded"
// //                   required=""
// //                 />
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full text-white bg-red-500 hover:bg-red-600 active:bg-myTheme  font-medium rounded text-sm px-5 py-2.5 text-center "
// //               >
// //                 Create an account
// //               </button>
// //               <p className="text-sm font-light flex justify-center text-black dark:text-gray-400">
// //                 Already have an account?{" "}
// //                 <Link
// //                   to="/login"
// //                   className="font-medium hover:text-red-500 text-primary-600 hover:underline dark:text-primary-500"
// //                 >
// //                   Login here
// //                 </Link>
// //               </p>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Siginup;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePassword = () => setShowPassword(!showPassword);
//   const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

//   return (
//     <section className="bg-gray-50  ">
//       <div className="flex flex-col items-center  mx-auto md:h-screen lg:py-0 ">
//         <div className="w-full bg-white rounded-lg shadow dark:border mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
//             <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
//               Create an account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-black dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5"
//                   placeholder="name@company.com"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-black dark:text-white"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5"
//                     required=""
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePassword}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
//                   >
//                     {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="confirm-password"
//                   className="block mb-2 text-sm font-medium text-black dark:text-white"
//                 >
//                   Confirm password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     name="confirm-password"
//                     id="confirm-password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-black text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded"
//                     required=""
//                   />
//                   <button
//                     type="button"
//                     onClick={toggleConfirmPassword}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
//                   >
//                     {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
//                   </button>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-red-500 hover:bg-red-600 active:bg-myTheme font-medium rounded text-sm px-5 py-2.5 text-center"
//               >
//                 Create an account
//               </button>
//               <p className="text-sm font-light flex justify-center text-black dark:text-gray-400">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="font-medium hover:text-red-500 text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Login here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Signup;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { auth } from "./firebase"; // Path to your firebase.js
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Footer from "./Footer";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  // Redirect if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // Redirect to homepage if user is logged in
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Passwords do not match!",
      });
      return;
    }

    setLoading(true); // Start loading
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false); // Stop loading
      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "Your account has been created successfully!",
      });
      navigate("/"); // Redirect to homepage after account creation
    } catch (err) {
      setLoading(false); // Stop loading
      if (err.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Email Already in Use",
          text: "The email address is already in use. Please try logging in or use a different email.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: err.message,
        });
      }
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 signupparentdiv ">
        <div className="w-full bg-white rounded-lg shadow dark:border mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 signupdiv">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
                  >
                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded text-sm px-5 py-2.5 text-center"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Creating account..." : "Create an account"} {/* Show loading text */}
              </button>
              <p className="text-sm flex justify-center font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium hover:text-red-500 text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Signup;




