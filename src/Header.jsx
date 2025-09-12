import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";

export default function Header({ cartCount, wishlistCount }) {
  const location = useLocation();
  
  // Get user from global state
  const user = useSelector((state) => state.users.isAuthenticated);
  console.log(user);

  const getIconClass = (path) =>
    location.pathname === path ? "text-primary" : "text-white";

  return (
    <header className="bg-dark text-white py-2 shadow-sm">
      <Container fluid>
        <Row className="align-items-center">
          {/* LEFT: Logo + Brand */}
          <Col xs={6} md={3} className="d-flex align-items-center">
            <i className="bi bi-shop fs-2 me-2 ms-lg-3"></i>
            <span className="fs-2 fw-bold  d-block">MiniMart</span>
          </Col>

          {/* MIDDLE: Search Bar (hidden < 770px) */}
          <Col xs={12} md={6} className="my-2 my-md-0 d-none d-md-block">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search products..."
                className="form-control-sm"
              />
              <InputGroup.Text className="bg-primary text-white">
                <SearchIcon fontSize="small" />
              </InputGroup.Text>
            </InputGroup>
          </Col>

          {/* RIGHT: Icons */}
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            {/* Wishlist - Hide on >= lg (992px) */}
            <NavLink
              to="/wishlist"
              className="position-relative d-lg-none"
            >
              <FavoriteIcon
                className={`cursor-pointer ${getIconClass("/wishlist")}`}
                style={{ fontSize: "1.5rem" }}
              />
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                </span>
              )}
            </NavLink>

            {/* Cart - Hide on >= lg */}
            <NavLink
              to="/cart"
              className="position-relative d-lg-none"
            >
              <ShoppingCartIcon
                className={`cursor-pointer ${getIconClass("/cart")}`}
                style={{ fontSize: "1.5rem" }}
              />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* Login/Profile with Text */}
            {user ? (
              <NavLink
                to="/profile"
                className="d-flex align-items-center text-white text-decoration-none me-lg-2"
              >
                <AccountCircleIcon
                  className={`cursor-pointer ${getIconClass("/profile")} me-1`}
                  style={{ fontSize: "1.6rem" }}
                />
                <span className="d-none d-sm-inline">Profile</span>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="d-flex align-items-center text-white text-decoration-none me-lg-3"
              >
                <LoginIcon
                  className={`cursor-pointer ${getIconClass("/login")} me-1`}
                  style={{ fontSize: "1.6rem" }}
                />
                <span className={`d-none d-sm-inline  ${getIconClass("/login")}`}>Login</span>
              </NavLink>
              
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}
