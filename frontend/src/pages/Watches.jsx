import React, { useState } from "react";
import ProductGrid from "../components/Product/ProductGrid";
import products from "../data/products.json";

function WatchesPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredProducts =
    selectedBrand === "All"
      ? products
      : products.filter((p) => p.brand === selectedBrand);

  return (
    <div>
      <div className="brand-filter-buttons">
        {["All", "Rolex", "Patek Phillippe", "Hublot"].map((brand) => (
          <button key={brand} onClick={() => setSelectedBrand(brand)}>
            {brand}
          </button>
        ))}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default WatchesPage;
