import React from "react";
// import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function App() {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div className="bg-gray-800 m-8 p-8 rounded-lg">
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}