// src/components/Header.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          MyShop
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active-menu" : "")
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "nav-link px-3 " + (isActive ? "active-menu" : "")
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link px-3 " + (isActive ? "active-menu" : "")
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link px-3 " + (isActive ? "active-menu" : "")
            }
          >
            Contact Us
          </NavLink>

          {/* Cart Button */}
          <Link to="/cart" className="btn btn-light position-relative">
            <i className="bi bi-cart3 fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
