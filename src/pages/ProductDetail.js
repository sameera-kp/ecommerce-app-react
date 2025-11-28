// src/pages/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load product.");
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding
  };

  if (loading) {
    return (
      <div className="text-center mt-5 fs-4 fw-bold text-primary">
        Loading Product...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center mt-5 fs-5 text-danger fw-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-7">
          <h3 className="fw-bold">{product.title}</h3>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-primary fw-bold">$ {product.price}</h4>
          <p className="mt-4">{product.description}</p>

          <button className="btn btn-primary btn-lg mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
