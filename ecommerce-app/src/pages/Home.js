// src/pages/Home.js
import React from "react";
import CarouselBanner from "../components/CarouselBanner";
import "../styles/Home.css";

const Home = () => {
  const offers = [
    {
      id: 1,
      title: "50% Off on Electronics",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      title: "Fashion Sale – Best Deals",
      img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
    {
      id: 3,
      title: "Home & Kitchen Super Sale",
      img: "https://images.unsplash.com/photo-1592878904946-b3cd8aeaae7c",
    },
  ];

  return (
    <div className="container mt-4">

      {/* Carousel */}
      <CarouselBanner />

      {/* Offers Section */}
      <h3 className="mt-5 mb-3 fw-bold">🔥 Today's Best Offers</h3>
      <div className="row">
        {offers.map((offer) => (
          <div key={offer.id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <img
                src={offer.img}
                className="card-img-top"
                alt={offer.title}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <button className="btn btn-primary w-100">
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
