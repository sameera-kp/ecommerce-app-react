// src/pages/Home.js
import React, { useState, useEffect } from "react"; // <-- IMPORTED useState and useEffect
import CarouselBanner from "../components/CarouselBanner";
import "../styles/Home.css";

const Home = () => {
  // State to hold the fetched products (offers)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch the first 3 products from FakeStore API
        const response = await fetch('https://fakestoreapi.com/products?limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Set the fetched products to state
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  // Display loading, error, or data
 
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading today's offers...</p>
      </div>
    );
  }

  if (error) {
    return <div className="container mt-5 text-danger text-center">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">

      {/* Carousel */}
      <CarouselBanner />

      {/* Offers Section (Now using API data) */}
      <h3 className="mt-5 mb-3 fw-bold">🔥 Today's Best Offers</h3>
      <div className="row">
        {products.map((product) => (
      
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <img
                src={product.image} // <-- Image URL from API
                className="card-img-top"
                alt={product.title}
                style={{ height: "220px", objectFit: "contain" }} 
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                {/* Displaying price and using Amazon button style */}
                <p className="fw-bold fs-5 text-success mb-3">${product.price.toFixed(2)}</p>
                <button className="btn btn-amazon-search w-100">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;