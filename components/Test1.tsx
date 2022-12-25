import React from "react";
// import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function App() {
    const renderSlides = () =>
        [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <div className="bg-gray-800 opacity-70 m-8 p-8 rounded-lg">
                <h3>Slide {num}</h3>
            </div>
        ));

    return (
        <div className=''>
            <Slider
                //   dots={true}
                dots={false}
                infinite={true}
                slidesToShow={2}
                slidesToScroll={2}
                
                // autoplay={true}
                // autoplaySpeed={3000}
                // centerMode={true}
            >
                {renderSlides()}</Slider>
        </div>
    );
}
