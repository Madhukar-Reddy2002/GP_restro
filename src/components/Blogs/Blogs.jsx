import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

// Blog data array
const BlogData = [
  {
    title: "Choosing the Perfect Smartwatch",
    subtitle: "Discover the key features that define a top-tier smartwatch and how to find one that suits your lifestyle.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "The Ultimate Gadget Buying Guide",
    subtitle: "From functionality to budget, learn how to pick gadgets that combine efficiency with style.",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Finding Your Perfect VR Headset",
    subtitle: "Step into virtual reality with our comprehensive guide on selecting the best VR headset for immersive experiences.",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
  },
];

// Single blog card component
const BlogCard = ({ data }) => (
  <div className="bg-white/30 backdrop-blur-md rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105" data-aos="fade-up" data-aos-delay={data.aosDelay}>
    <img src={data.image} alt={data.title} className="w-full h-56 object-cover"/>
    <div className="p-4">
      <p className="text-xs text-gray-500">{data.published}</p>
      <h3 className="text-lg font-bold mt-2">{data.title}</h3>
      <p className="text-sm text-gray-700 mt-1">{data.subtitle}</p>
    </div>
  </div>
);

// Main Blogs component
const Blogs = () => (
  <section className="py-12 px-4">
    <Heading title="Latest from Our Blog" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {BlogData.map((data, index) => (
        <BlogCard key={index} data={data} />
      ))}
    </div>
  </section>
);


export default Blogs;
