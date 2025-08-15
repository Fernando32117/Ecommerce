"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="cursor-pointer bg-clip-text px-5 font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-transparent md:text-lg">
        {title}
      </h3>
      <div className="px-5">
        <Carousel>
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-3/4 md:basis-1/3 lg:basis-1/5"
              >
                <ProductItem product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductList;
