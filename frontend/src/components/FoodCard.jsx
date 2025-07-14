import React from "react";
import Button from "./Button/Button";

const ProductCard = ({ item, price, image, handleOrder }) => {
  return (
    <div className="w-64 p-5 bg-white rounded-3xl flex flex-col justify-start items-start gap-5">
      <img src={image} alt={item} className="w-full object-cover rounded-xl" />
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <h3 className="text-orange-500 text-2xl font-extrabold">{item}</h3>
        <p className="text-black text-xl font-bold ">Rs. {price}</p>
      </div>
      <Button text="Order Now" onClick={() => handleOrder(item, price)} />
    </div>
  );
};

export default ProductCard;
