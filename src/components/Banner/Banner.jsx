import React from "react";

// Subcomponent for each column in the banner
const BannerColumn = ({ children, className = "", style = {} }) => (
  <div style={style} className={`p-6 sm:p-8 ${className}`}>
    {children}
  </div>
);

const BannerImage = ({ src, alt }) => (
  <div className="h-full flex items-center" data-aos="zoom-in">
    <img
      src={src}
      alt={alt}
      className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
    />
  </div>
);

const BannerButton = ({ bgColor }) => (
  <div data-aos="fade-up" data-aos-offset="0">
    <button
      style={{ color: bgColor }}
      className="bg-white py-2 px-4 rounded-full"
    >
      Shop Now
    </button>
  </div>
);

const Banner = ({ data }) => (
  <div className="min-h-[550px] flex justify-center items-center py-12">
    <div className="container">
      <div
        style={{ backgroundColor: data.bgColor }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
      >
        <BannerColumn>
          <p data-aos="slide-right" className="text-sm">
            {data.discount}
          </p>
          <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">
            {data.title}
          </h1>
          <p data-aos="fade-up" className="text-sm">
            {data.date}
          </p>
        </BannerColumn>

        <BannerImage src={data.image} alt={data.title} />

        <BannerColumn>
          <p data-aos="zoom-out" className="font-bold text-xl">
            {data.title2}
          </p>
          <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">
            {data.title3}
          </p>
          <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
            {data.title4}
          </p>
          <BannerButton bgColor={data.bgColor} />
        </BannerColumn>
      </div>
    </div>
  </div>
);

export default Banner;