// App.jsx
import React, { lazy, Suspense } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Spinner from "./Spinner";
import Footer from "./Footer";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"; // for milk
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import CookieIcon from "@mui/icons-material/Cookie";     // cookies/snacks
import LocalBarIcon from "@mui/icons-material/LocalBar";     // for cool drinks
import HomeFilledIcon from '@mui/icons-material/HomeFilled';

import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import GrassIcon from "@mui/icons-material/Grass";
import MedicationIcon from "@mui/icons-material/Medication";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { BrowserRouter, NavLink, Route, Routes,Router } from 'react-router-dom';
// Lazy imports
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const Profile = lazy(() => import("./Profile"));
const Milk = lazy(() => import("./Milk"));
const Drinks = lazy(() => import("./Drinks"));
const Harvest = lazy(() => import("./Harvest"));
const Nonveg = lazy(() => import("./Nonveg"));
const Fastfood = lazy(() => import("./fastfood"));
const Medicine = lazy(() => import("./Medicine"));
const Treats = lazy(() => import("./Treats"));
const Orders = lazy(() => import("./OrdersHistory"));
const Wishlist = lazy(() => import("./Wishlist"));
const Cart = lazy(() => import("./Cart"));
const Register = lazy(() => import("./Register"));
const OrderSuccess = lazy(() => import("./OrderSuccess"));
const AboutUs = lazy(() => import("./AboutUs"));
const Login = lazy(() => import("./Login"));
const PageNotFound = lazy(() => import("./PageNotFound"));
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

import { useState } from "react";
import {  FormControl } from "react-bootstrap";


import { useSelector } from 'react-redux';

import { CandyIcon, LogInIcon } from "lucide-react";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const cartCount = useSelector(
    (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const wishlistCount = useSelector((state)=>state.wishlist.length);

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <ToastContainer theme='dark' position='top-right' autoClose={3000} hideProgressBar={false} />

      <BrowserRouter>
      
      <Header cartCount={cartCount} wishlistCount={wishlistCount}  />

      



        {/* ✅ Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm custom-navbar px-2">
          <div className="container-fluid px-1">
            {/* Left toggle button (mobile/tablet only) */}
            <button className="btn btn-dark d-lg-none p-0 me-2" onClick={toggleSidebar}>
            <i class="bi bi-list fs-1"></i>
            </button>

            {/* Normal navbar links (desktop only) */}
            <div className="collapse navbar-collapse d-none d-lg-flex">
              <ul className="navbar-nav text-white fs-6 me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <HomeFilledIcon className="me-0" /> Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/aboutus" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <InfoRoundedIcon className="me-0" /> About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/drinks" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                   <LocalBarIcon className="me-0" />Drinks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/milk" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <LocalDrinkIcon className="me-0" /> Milk
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/harvest" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <GrassIcon className="me-0"></GrassIcon> Harvest
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/nonveg" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <KebabDiningIcon className="me-0" /> NonVeg
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/medicine" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <MedicationIcon className="me-0" /> Medicine
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/treats" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <CookieIcon className="me-0" /> Treats
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/orders" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <ReceiptLongIcon className="me-0" /> Orders
                  </NavLink>
                </li>
              </ul>


          

              {/* Right links */}
              <ul className="navbar-nav ms-auto">
                

                <li className="nav-item">
                  <NavLink to="/wishlist" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <FavoriteRoundedIcon className="me-0" /> Wishlist
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                    <ShoppingCartRoundedIcon className="me-0" /> Cart ({cartCount})
                  </NavLink>
                </li>
              </ul>
            </div>

                 <div className="d-flex d-md-none align-items-center justify-content-end">
      <div
        className={`transition-container ${showSearch ? "open" : ""}`}
        style={{
          overflow: "hidden",
          maxWidth: showSearch ? "500px" : "0px",
          transition: "max-width 0.3s ease-in-out",
          flexGrow: 1,
        }}
      >
        {showSearch && (
          <InputGroup className="flex-grow-1">
            <FormControl
              type="text"
              placeholder="Search products..."
              className="form-control-sm"
              autoFocus
            />
            <InputGroup.Text
              className="bg-primary text-white cursor-pointer"
              onClick={() => setShowSearch(false)}
            >
              <CloseIcon fontSize="small" />
            </InputGroup.Text>
          </InputGroup>
        )}
      </div>

      {!showSearch && (
        <SearchIcon
          className="cursor-pointer"
          onClick={() => setShowSearch(true)}
          style={{ fontSize: "1.8rem", color: "#fff", transition: "all 0.3s" }}
        />
      )}
    </div>



          </div>
        </nav>

        {/* ✅ Sidebar Overlay */}
<div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`} onClick={closeSidebar}></div>

{/* ✅ Sidebar Menu */}
<div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
  {/* Sidebar Header */}
  <div className="sidebar-header d-flex align-items-center px-3">
    <i className="bi bi-shop  ms-2 fs-1  text-info"></i>
    <h5 className="mb-0 ms-2 fs-1 text-info">MiniMart</h5>
    <button className="btn-close ms-auto" onClick={closeSidebar}></button>
  </div>

  <hr className="sidebar-divider my-2" />

  {/* Sidebar Links */}
  <ul className="list-unstyled mt-2">
    <li><NavLink to="/" end onClick={closeSidebar} className="sidebar-link"><HomeFilledIcon className="me-2" />Home</NavLink></li>
    <li><NavLink to="/aboutus" onClick={closeSidebar} className="sidebar-link"><InfoRoundedIcon className="me-2" />About Us</NavLink></li>
    <li><NavLink to="/drinks" onClick={closeSidebar} className="sidebar-link"><LocalBarIcon className="me-2" />Drinks</NavLink></li>
    <li><NavLink to="/milk" onClick={closeSidebar} className="sidebar-link"><LocalDrinkIcon className="me-2" />Milk</NavLink></li>
    <li><NavLink to="/harvest" onClick={closeSidebar} className="sidebar-link"><GrassIcon className="me-2" />Harvest</NavLink></li>
    <li><NavLink to="/nonveg" onClick={closeSidebar} className="sidebar-link"><KebabDiningIcon className="me-2" />NonVeg</NavLink></li>
    <li><NavLink to="/medicine" onClick={closeSidebar} className="sidebar-link"><MedicationIcon className="me-2" />Medicine</NavLink></li>
    <li><NavLink to="/treats" onClick={closeSidebar} className="sidebar-link"><CookieIcon className="me-2" />Treats</NavLink></li>
    <li><NavLink to="/orders" onClick={closeSidebar} className="sidebar-link"><ReceiptLongIcon className="me-2" />Orders</NavLink></li>
  </ul>
</div>


        {/* Routes */}
          <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/harvest" element={<Harvest />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/treats" element={<Treats />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
       <Footer className="fixed-bottom" />
      </BrowserRouter>
     
    </>
  );
}

export default App;
