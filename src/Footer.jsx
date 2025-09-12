import React from "react";
import { Link } from "react-router-dom"; // for internal navigation
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-3 pb-3">
      <div className="container">
        <div className="row">

          {/* About / Branding */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold text-primary"><i className="bi bi-shop me-2 fs-1"></i> MiniMart</h3>
            <p>Your one-stop online grocery store! Fresh, fast, and reliable.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold fs-4">Quick Links</h6>
            <hr />
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none footer-link" >
<i class="bi bi-arrow-right me-1"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-decoration-none footer-link">
<i class="bi bi-arrow-right me-1"></i>About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none footer-link">
<i class="bi bi-arrow-right me-1"></i>Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-decoration-none footer-link">
<i class="bi bi-arrow-right me-1"></i>FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-decoration-none footer-link">
<i class="bi bi-arrow-right me-1"></i>Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social Media */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold fs-4">Contact Us</h6>
            <hr />
            <p>Email: info@groceryhub.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123 Grocery Street, City, Country</p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon text-white fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon text-white fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>


        </div>

        {/* Divider */}
        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center mt-3">
          &copy; {new Date().getFullYear()} MiniMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
