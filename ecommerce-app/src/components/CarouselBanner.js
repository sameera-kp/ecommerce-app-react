// src/components/CarouselBanner.js
import React from "react";
import "../styles/CarouselBanner.css";


const CarouselBanner = () => {
  return (
    <div id="mainCarousel" className="carousel slide shadow-sm rounded" data-bs-ride="carousel">

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            className="d-block w-100"
            alt="Banner 1"
            style={{ height: "380px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1515165562835-c4cde1690b69"
            className="d-block w-100"
            alt="Banner 2"
            style={{ height: "380px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
            className="d-block w-100"
            alt="Banner 3"
            style={{ height: "380px", objectFit: "cover" }}
          />
        </div>

      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
};

export default CarouselBanner;
