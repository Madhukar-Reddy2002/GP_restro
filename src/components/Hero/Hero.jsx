import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/smart-watch.png";
import Image3 from "../../assets/hero/R.png";
import Image4 from "../../assets/hero/tv-removebg-preview.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Boat Rockerz",
    title: "Wireless",
    title2: "Headphones",
    description:
      "Immerse yourself in a world of unparalleled audio excellence with our Boat Rockerz wireless headphones. Crafted for comfort and uncompromising sound quality.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "BeatXP",
    title: "Smart",
    title2: "Watch",
    description:
      "Stay connected, track your fitness, and elevate your style with the BeatXP smart watch. Seamlessly integrate technology into your daily life.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Apple",
    title: "Macbook",
    title2: "Laptops",
    description:
      "Unlock your productivity with the power and elegance of the Apple Macbook laptops. Engineered for performance, designed for your lifestyle.",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Samsung",
    title: "Galaxy",
    title2: "TVs",
    description:
      "Experience the future of home entertainment with the Samsung Galaxy TVs. Immersive displays, cutting-edge technology, and seamless connectivity.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    dotsClass: "slick-dots w-max absolute bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <div className="container py-10 md:py-0">
      <div className="overflow-hidden rounded-3xl relative hero-bg">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
            opacity: 0.5,
          }}
        ></div>
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
                {/* Text Content */}
                <div className="md:pl-10 text-center md:text-left">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                  >
                    {data.subtitle}
                  </h1>
                  <h2
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
                  >
                    {data.title}
                  </h2>
                  <h3
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/5 dark:text-white/10 mb-8"
                  >
                    {data.title2}
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="text-gray-400 mb-8"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="400"
                  >
                    <Button
                      text="Shop Now"
                      bgColor="bg-primary"
                      textColor="text-white"
                      handler={handleOrderPopup}
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-10">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;