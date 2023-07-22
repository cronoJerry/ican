import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CAROUSEL_DATA = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function CarouselSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full text-white ">
      <Slider {...settings}>
        {CAROUSEL_DATA.map((item, index) => (
          <div key={index} className="w-full h-[450px] overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={item.imgUrl}
              alt={`slider${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
