import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { cn } from "@/lib/utils";

interface ProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
  textContainerClassName?: string;
}

const ProductItem = ({ product, textContainerClassName }: ProductItemProps) => {
  const firstVariant = product.variants[0];

  if (!firstVariant) {
    return null;
  }

  return (
    <Link
      href={`/product-variant/${firstVariant.slug}`}
      className="group flex flex-col gap-4"
    >
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        sizes="100vw"
        height={0}
        width={0}
        className="h-auto w-full rounded-3xl md:h-[400px] md:w-[329px]"
      />
      <div
        className={cn(
          "flex w-[200px] flex-col gap-1 md:w-[300px]",
          textContainerClassName,
        )}
      >
        <p className="cursor-pointer truncate bg-clip-text text-sm font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:text-transparent md:text-lg">
          {product.name}
        </p>
        <p className="text-muted-foreground truncate text-xs font-medium md:text-sm">
          {product.description}
        </p>
        <p className="cursor-pointer truncate bg-clip-text text-sm font-semibold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:text-transparent md:text-lg">
          {formatCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
