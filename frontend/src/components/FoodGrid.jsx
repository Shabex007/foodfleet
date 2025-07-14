import React from "react";
import ProductCard from "./FoodCard";

const ProductGrid = ({ groupedItems, selectedCategory, handleOrder }) => {
  return (
    <div className="flex-1 p-6 bg-gray-100 flex flex-col justify-start items-center gap-5">
      {selectedCategory === "All" ? (
        Object.entries(groupedItems).map(([category, items]) => (
          <div
            key={category}
            className="self-stretch flex flex-col justify-start items-center gap-5"
          >
            <h1 className="text-[#EFB549] text-5xl font-black italic ">
              {category}
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              {items.map(({ id, item, price, image }) => (
                <ProductCard
                  key={id}
                  item={item}
                  price={price}
                  image={image}
                  handleOrder={handleOrder}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="self-stretch flex flex-col justify-start items-center gap-5">
          <h1 className="text-[#EFB549] text-5xl font-black italic ">
            {selectedCategory}
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {groupedItems[selectedCategory].map(
              ({ id, item, price, image }) => (
                <ProductCard
                  key={id}
                  item={item}
                  price={price}
                  image={image}
                  handleOrder={handleOrder}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
