import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages components
import Dashboard from "./pagescomponents/Dashboard";
import MyProfile from "./pagescomponents/Profile/MyProfile";
import Logout from "./pagescomponents/Login/Logout";
import Login from "./pagescomponents/Login/Login";
import User from "./pagescomponents/usercomponents/User";
import UserProfile from "./pagescomponents/usercomponents/UserProfile";
import OrderProduct from "./pagescomponents/OrderProduct/OrderProduct";
import AddProductForm from "./pagescomponents/Product/AddProductForm";
import Products from "./pagescomponents/Product/Product";
import ProductView from "./pagescomponents/Product/ProductView";
import Payment from "./pagescomponents/payments/Payments";
import CategoriesForm from "./pagescomponents/categories/CategoriesForm";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state

  const handleResize = () => setSidebarOpen(window.innerWidth >= 991);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={() => setIsLoggedIn(true)} />} 
        />

        {/* Protected routes */}
        <Route 
          path="/*" 
          element={
            isLoggedIn ? (
              <div className="app-container">
                <Header toggleSidebar={toggleSidebar} />
                <div className="content-container">
                  <Sidebar isOpen={sidebarOpen} />
                  <main
                    className="main-content"
                    style={{ marginLeft: sidebarOpen ? "238px" : "0" }}
                  >
                    <div className="main-content-box-inner">
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/user" element={<User/>} />
                        <Route path="/user-profile/:id" element={<UserProfile />} />
                        <Route path="/order-product" element={<OrderProduct />} />
                        <Route path="/payments" element={<Payment />} />
                        <Route path="/categories" element={<CategoriesForm />} />
                        <Route path="/my-profile" element={<MyProfile />} />
                        <Route path="/logout" element={<Logout onLogout={() => setIsLoggedIn(false)} />} />

                        {/* Product submenu routes */}
                        <Route path="/products/product" element={<Products />} />
                        <Route path="/products/ProductView" element={<ProductView />} />
                        <Route path="/products/add-product" element={<AddProductForm />} />
                        {/* <Route path="/products/stock" element={<Stock />} /> */}
                      </Routes>
                    </div>
                  </main>
                </div>
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
