import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const images = [
  {
    src: "/path/to/image1.jpg",
    zoomSrc: "/path/to/zoom-image1.jpg",
  },
  {
    src: "/path/to/image2.jpg",
    zoomSrc: "/path/to/zoom-image2.jpg",
  },
  // Add more images as needed
];

export default function ProductImageSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <InnerImageZoom
            src="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1280"
            zoomSrc="https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NTQ4MTA4OA&ixlib=rb-1.2.1&q=85&w=1600"
            zoomType="hover"
            zoomPreload={true}
            className="border border-gray-500 h-96"
          />
        </div>
      ))}
    </Slider>
  );
}
