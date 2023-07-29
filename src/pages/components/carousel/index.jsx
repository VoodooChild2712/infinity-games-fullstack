import React from "react";
import styles from "./index.module.css";
import Slider from "react-slick";

const Carousel = () => {
  const carouselSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each navigation
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Time between slides during auto-play
    responsive: [
      // Responsive settings for different screen sizes
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>My Carousel</h2>
      <Slider {...carouselSettings}>
        <div>
          <img src="carousel-image-1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="carousel-image-2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="carousel-image-3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
