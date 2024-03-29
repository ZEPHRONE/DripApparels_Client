import React from "react";

import productImage from "@/public/assets/dummyImage.jpg";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = () => {
  return (
    <Card className="w-[300px] lg:w-[350px] relative">
      <div className="flex absolute right-6 top-6">
        <Heart />
        <ShoppingCart />
      </div>
      <CardHeader>
        <Image src={productImage} alt="image" width={1000} height={1000} />
        <CardTitle className="text-[1.5rem] font-light">
          Rick and Morty: Higher Self (Acid Wash)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 font-extrabold">
              Rs 1000
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View</Button>
        <Button variant="primary">Buy Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
