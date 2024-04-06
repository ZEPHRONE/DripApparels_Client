import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-y-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="hover:shadow-2xl transition-all w-fit">
          <ProductCard
            id="1000"
            price={1000}
            name="Rick and Morty: Higher Self (Acid Wash)"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
