"use client";

import React from "react";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  return (
    <article className="h-screen">
      <h1 className="text-2xl md:text-3xl font-extrabold pl-4 ">Featured Products</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xs md:max-w-[760px]   xl:max-w-[1200px] mt-4 lg:mt-8  relative"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 -mr-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute  left-2" />
        <CarouselNext className="absolute  right-2 " />
      </Carousel>
    </article>
  );
};

export default FeaturedProducts;
