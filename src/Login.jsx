
// import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import SignUp from "./SignUp"

// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center  mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border  mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
//             <h1 className="flex justify-center text-xl font-bold leading-tight rounded tracking-tight text-black md:text-2xl dark:text-white">
//               Login
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="bg-gray-50  rounded block w-full p-2 border border-gray-300 focus:border-red-500 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
//                   placeholder="name@mail.com"
//                   required
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
//                     type={showPassword ? "text" : "password"} // Toggle between text and password
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 rounded block w-full p-2 border border-gray-300 focus:border-red-500 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
//                     required
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
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-black dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       required
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label
//                       htmlFor="remember"
//                       className="text-black dark:text-gray-300"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <Link
//                   href="#"
//                   className="text-sm hover:text-red-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-red-500 hover:bg-red-600 active:bg-myTheme font-medium rounded text-sm px-5 py-2.5 text-center"
//               >
//                 Login
//               </button>
//               <p className="text-sm font-light text-black dark:text-gray-400">
//                 Don’t have an account yet?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-medium text-black hover:text-red-500 text-primary-600 hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;




// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons
// import { auth } from "./firebase"; // Import your Firebase configuration
// import { signInWithEmailAndPassword } from "firebase/auth";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(""); // For error messages

//   const navigate = useNavigate(); // To redirect after login

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful!");
//       navigate("/"); // Redirect to home page or dashboard after successful login
//     } catch (err) {
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="flex justify-center text-xl font-bold leading-tight rounded tracking-tight text-black md:text-2xl dark:text-white">
//               Login
//             </h1>
//             {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )}
//             <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="bg-gray-50 rounded block w-full p-2 border border-gray-300 focus:border-red-500 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
//                   placeholder="name@mail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
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
//                     className="bg-gray-50 rounded block w-full p-2 border border-gray-300 focus:border-red-500 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
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
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-black dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label
//                       htmlFor="remember"
//                       className="text-black dark:text-gray-300"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <Link
//                   href="#"
//                   className="text-sm hover:text-red-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-red-500 hover:bg-red-600 active:bg-myTheme font-medium rounded text-sm px-5 py-2.5 text-center"
//               >
//                 Login
//               </button>
//               <p className="text-sm font-light text-black dark:text-gray-400">
//                 Don’t have an account yet?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-medium text-black hover:text-red-500 text-primary-600 hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;



//updated code with sweetALERT

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons
// import { auth } from "./firebase"; // Import your Firebase configuration
// // import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import Swal from "sweetalert2"; // Import SweetAlert2

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(""); // For error messages

//   const navigate = useNavigate(); // To redirect after login

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       Swal.fire({
//         title: "Login Successful",
//         text: "You have logged in successfully.",
//         icon: "success",
//         confirmButtonColor: "#3085d6",
//         confirmButtonText: "Okay",
//       }).then(() => {
//         navigate("/"); // Redirect to home page or dashboard after successful login
//       });
//     } catch (err) {
//       setError("Invalid email or password. Please try again.");
//       Swal.fire({
//         title: "Login Failed",
//         text: "Incorrect email or password. Please try again.",
//         icon: "error",
//         confirmButtonColor: "#d33",
//         confirmButtonText: "Try Again",
//       });
//     }
//   };

//   return (
//     <section className=" dark:bg-gray-900">
//       <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="flex justify-center text-xl font-bold leading-tight rounded tracking-tight text-black md:text-2xl dark:text-white">
//               Login
//             </h1>
//             {/* {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )} */}
//             <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="bg-gray-50 rounded block w-full p-2 border border-gray-300 focus:border-red-500 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
//                   placeholder="name@mail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
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
//                     className="bg-gray-50 rounded block w-full p-2 border border-gray-300 focus:border-red-500 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
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
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-black dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label
//                       htmlFor="remember"
//                       className="text-black dark:text-gray-300"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <Link
//                   href="#"
//                   className="text-sm hover:text-red-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-red-500 hover:bg-red-600 active:bg-myTheme font-medium rounded text-sm px-5 py-2.5 text-center"
//               >
//                 Login
//               </button>
//               <p className="text-sm font-light text-black dark:text-gray-400">
//                 Don’t have an account yet?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-medium text-black hover:text-red-500 text-primary-600 hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;




import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import Footer from "./Footer";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // Redirect to homepage if logged in
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Login Successful",
        icon: "success",
      }).then(() => {
        setLoading(false); // Stop loading
        navigate("/"); // Redirect to homepage
      });
    } catch (err) {
      setLoading(false); // Stop loading
      Swal.fire({
        title: "Login Failed",
        text: "Incorrect email or password.",
        icon: "error",
      });
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true); // Start loading
    try {
      await signInWithPopup(auth, provider);
      Swal.fire({
        title: "Login Successful with Google",
        icon: "success",
      }).then(() => {
        setLoading(false); // Stop loading
        navigate("/"); // Redirect to homepage
      });
    } catch (err) {
      setLoading(false); // Stop loading
      Swal.fire({
        title: "Google Login Failed",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 logindivparent">
        <div className="w-full bg-white rounded-lg shadow dark:border mt-8 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 logindiv">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 rounded block w-full p-2.5 border border-gray-300 text-sm"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="bg-gray-50 rounded block w-full p-2.5 border border-gray-300 text-sm"
                    value={password}
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2  text-gray-600 dark:text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-500 hover:bg-red-600 rounded text-sm px-5 py-2.5 text-center"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded text-sm px-5 py-2.5 text-center"
              disabled={loading} // Disable button when loading
            >
              Continue with Google
            </button>
            <div className="flex justify-between">
              <p className="text-sm font-light text-gray-500 signup px-3">
                Don’t have an account?{" "}
                <Link to="/signup" className="font-medium text-primary-600 hover:text-red-500 hover:underline ">
                  Sign up
                </Link>
              </p>
              <p className="px-3 text-gray-500 text-sm font-medium hover:underline hover:text-red-500 reset">
                <Link to="/forget-password">Reset it here</Link>
              </p>
              </div>  
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Login;


