import React, { useState } from "react";
import FoodFilter from "./FoodFilter";
import ProductGrid from "./FoodGrid";
import OrderSummary from "./OrderSummary";
import CheckoutOverlay from "./CheckoutForm";
import foodItems from "../data/foodItems";

const FoodList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderItems, setOrderItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const categories = [...new Set(foodItems.map((item) => item.category))];

  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = foodItems.filter((item) => item.category === category);
    return acc;
  }, {});

  const handleOrder = (itemName, itemPrice) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.name === itemName);
      if (existing) {
        return prev.map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { name: itemName, quantity: 1, price: itemPrice }];
    });
  };

  const handleIncrease = (itemName) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (itemName) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flex justify-center items-start gap-3 w-full">
      <div className="max-w-[1400px] flex justify-center items-start gap-2 w-full">
        <FoodFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className="p-6 bg-gray-100 flex justify-center items-start gap-3 w-full">
          <ProductGrid
            groupedItems={groupedItems}
            selectedCategory={selectedCategory}
            handleOrder={handleOrder}
          />
          <OrderSummary
            items={orderItems}
            onPlaceOrder={() => setShowCheckout(true)}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
        {showCheckout && (
          <CheckoutOverlay onClose={() => setShowCheckout(false)} />
        )}
      </div>
    </div>
  );
};

export default FoodList;
