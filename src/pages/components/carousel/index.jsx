import React from "react";
import Slider from "react-slick";
import image from "../../../logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    responsive: [
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
    <div className={styles["carousel-container"]}>
      <Slider {...carouselSettings}>
        <div>
          <img src={image} alt="Slide 1" />
        </div>
        <div>
          <img src={image} alt="Slide 2" />
        </div>
        <div>
          <img src={image} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
