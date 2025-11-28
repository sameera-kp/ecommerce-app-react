// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";



const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "260px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>

        <p className="fw-bold text-primary">$ {product.price}</p>

        <div className="mt-auto">
          {/* View Details */}
          <Link to={`/product/${product.id}`} className="btn btn-outline-primary w-100 mb-2">
            View Details
          </Link>

          {/* Add to Cart */}
          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
