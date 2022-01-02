import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import Aboutus from './screens/aboutus'
import Navbar from './components/Navbar';
import Homescreen from './screens/Honescreen';
import Cartscren from './screens/Cartscreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreens  from './screens/ordersScreen';

function App() {
  
  return (
    <div className="App">

      <Navbar />
      
    
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscren />} />
          <Route   path="/register" element={<RegisterScreen/>} />
          <Route   path="/login" element={<LoginScreen/>} />
          <Route   path="/order" element={<OrderScreens/>} />
          <Route   path="/aboutus" element={<Aboutus/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





// const express = require("express");
// const router = express.Router();

// const {
//   getProducts,
//   getAdminProducts,
//   newProduct,
//   getSingleProduct,
//   updateProduct,
//   deleteProduct,
//   createProductReview,
//   getProductReviews,
//   deleteReview,
// } = require("../controllers/productController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// router.route("/products").get(getProducts);
// router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
// router.route("/product/:id").get(getSingleProduct);
// router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);

// router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// router.route("/review").put(isAuthenticatedUser, createProductReview);
// router.route("/reviews").get(isAuthenticatedUser, getProductReviews);
// router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

// module.exports = router;