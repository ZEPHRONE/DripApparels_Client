import ProductContainer from "@/components/ProductContainer";
import React from "react";

export default function AllProductsPage() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-66px)]">
        <article className="w-[300px] border-r-2">Search filters</article>
        <article className="grow pl-6">
          <h1>Search bar</h1>
          <ProductContainer/>
        </article>
      </section>
    </>
  );
}
