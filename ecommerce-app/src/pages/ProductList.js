// src/pages/ProductList.js
import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  // Load products from API
  const loadProducts = async () => {
    try {
      const data = await fetchAllProducts();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5 fs-4 fw-bold text-primary">
        Loading Products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 fs-5 text-danger fw-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="fw-bold mb-4">All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
