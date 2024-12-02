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


import Banner from './Banner';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import ViewAllProducts from "./ViewAllProducts";
import ProductDetail from './ProductDetails';
import './index.css';

function App() {
  const isLoggedIn = false;
  

  // Custom Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" replace />;
  };

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
          <Route path="/view-all-products" element={<ViewAllProducts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Product detail route */}
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
