// src/components/Header.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Header.css"; 

const Header = () => {
  const { totalItems = 0 } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add search logic here
  };

  return (
    // Change class to use Amazon's color
    <nav className="navbar navbar-expand-lg navbar-dark bg-amazon-primary shadow-sm">
      <div className="container-fluid py-1"> 

        {/* Brand Name (Text Only) */}
        <Link className="navbar-brand fw-bold fs-4 ms-2" to="/">
          MyShop
        </Link>
        
        {/* Search Bar - Visible only on large screens (lg) */}
        <div className="d-none d-lg-flex mx-auto search-container"> 
             <form className="d-flex w-100" onSubmit={handleSearchSubmit}>
                <input
                    className="form-control search-input"
                    type="search"
                    placeholder="Search MyShop"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-amazon-search" type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links and Cart Button */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Search bar inside collapse for mobile */}
          <div className="d-lg-none my-2 mx-2">
            <form className="d-flex" onSubmit={handleSearchSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search MyShop"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-amazon-search" type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
          </div>

          <ul className="navbar-nav ms-auto me-3"> 
             {/* Note: I've kept all links here, but for a true Amazon look, you might remove most of these. */}

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link fw-bold " + (isActive ? "active-menu" : "")
                }
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  "nav-link fw-bold " + (isActive ? "active-menu" : "")
                }
              >
                Products
              </NavLink>
            </li>
            
             <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link fw-bold " + (isActive ? "active-menu" : "")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Cart Button (Styled to look like Amazon's cart icon + text) */}
          <Link to="/cart" className="btn btn-cart-link position-relative me-2">
            <i className="bi bi-cart3 fs-3"></i> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-amazon-red cart-badge">
              {totalItems}
            </span>
            <span className="d-none d-lg-inline cart-text">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;