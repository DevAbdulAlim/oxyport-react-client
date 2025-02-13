import InnerImageZoom from "react-inner-image-zoom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

interface ProductImageSlideProps {
  images: string;
}

const ProductImageSlide: React.FC<ProductImageSlideProps> = ({ images }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageArray = images.split(",");

  return (
    <Slider {...settings}>
      {imageArray.map((image, index) => {
        const src = `/images/${image.trim()}`;
        const zoomSrc = `${src}?zoom=true`;

        return (
          <div key={index}>
            <InnerImageZoom
              src={src}
              zoomSrc={zoomSrc}
              zoomType="hover"
              zoomPreload={true}
              className="border border-gray-500 h-[450px]"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ProductImageSlide;
