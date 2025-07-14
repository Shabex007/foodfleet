import React from "react";

const FoodFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <aside className="w-fit py-8 bg-white flex flex-col justify-between items-center h-full">
      <nav className=" flex flex-col gap-4">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`w-56 px-6 py-3 rounded-xl outline-1 outline-offset-[-1px] ${
              selectedCategory === category
                ? "bg-rose-50 outline-orange-500"
                : "outline-neutral-300"
            } text-sm font-medium text-black text-left cursor-pointer`}
          >
            {category}
          </button>
        ))}
      </nav>
      <button className="w-56 px-6 py-3 bg-[#f0f0f0] rounded-xl text-sm font-medium text-black mt-6">
        Log Out
      </button>
    </aside>
  );
};

export default FoodFilter;
