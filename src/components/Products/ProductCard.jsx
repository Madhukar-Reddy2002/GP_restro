import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group relative overflow-hidden rounded-md shadow-md bg-white dark:bg-gray-800 duration-300 hover:shadow-lg"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-t-md"
              />
              {/* hover button */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
                <Button
                  text={
                    <div className="flex items-center gap-2">
                      <FaShoppingCart />
                      <span>Add to cart</span>
                    </div>
                  }
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => {
                    // Add to cart logic here
                  }}
                />
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200 truncate">
                {data.title}
              </h2>
              <p className="font-bold text-primary">${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;