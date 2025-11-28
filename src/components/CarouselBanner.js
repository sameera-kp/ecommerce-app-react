// src/components/CarouselBanner.js
import React from "react";
import "../styles/CarouselBanner.css";

const SLIDES = [
  {
    id: 0,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    alt: "Banner 1: Red and black athletic shoes",
  },
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    alt: "Banner 2: Retro phone",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    alt: "Banner 3: Assortment of athletic shoes",
  },
];

const CarouselBanner = () => {
  return (
    <div
      id="mainCarousel"
      className="carousel slide shadow-sm rounded"
      data-bs-ride="carousel"
    >
      {/* Dynamic Indicators */}
      <div className="carousel-indicators">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Dynamic Carousel Items */}
      <div className="carousel-inner">
        {SLIDES.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              src={slide.src}
              className="d-block w-100"
              alt={slide.alt}
              style={{ height: "380px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Controls remain the same */}
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