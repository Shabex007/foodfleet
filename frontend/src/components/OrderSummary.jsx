// OrderSummary.jsx
import React from "react";

const OrderSummary = ({ items, onPlaceOrder, onIncrease, onDecrease }) => {
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(totalCost * 0.1);
  const total = totalCost + tax;

  return (
    <aside className="w-64 p-5 bg-white rounded-3xl flex flex-col justify-between items-center">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-lg font-medium text-black">Items</h2>
        <div className="p-6 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-black text-sm font-semibold">
                {item.name}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrease(item.name)}
                  className="w-6 h-6 bg-gray-200 rounded-full text-sm font-bold text-black flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-orange-500 text-sm font-semibold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onIncrease(item.name)}
                  className="w-6 h-6 bg-gray-200 rounded-full text-sm font-bold text-black flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 mt-6">
        <div className="p-6 bg-neutral-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-black">Payment Summary</h3>
          <div className="flex justify-between items-start">
            <span className="text-zinc-500 text-base font-medium">Cost</span>
            <span className="text-zinc-500 text-base font-medium">
              Rs. {totalCost}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-zinc-500 text-base font-medium">Tax</span>
            <span className="text-zinc-500 text-base font-medium">
              Rs. {tax}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-black text-base font-semibold">Total</span>
            <span className="text-black text-base font-semibold">
              Rs. {total}
            </span>
          </div>
        </div>
        <button
          onClick={onPlaceOrder}
          className="w-full px-6 py-3 bg-orange-500 rounded-xl text-white text-sm font-medium"
        >
          Place Order
        </button>
      </div>
    </aside>
  );
};

export default OrderSummary;
