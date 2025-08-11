import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });

  if (!productVariant || !productVariant.product) {
    return notFound();
  }
  const likelyProducts = await db.query.productTable
    .findMany({
      where: eq(productTable.categoryId, productVariant.product.categoryId),
      with: {
        variants: true,
      },
      limit: 10,
    })
    .then((products) =>
      products.filter((product) => product.id !== productVariant.productId),
    );
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header categories={categories} />
      <div className="flex flex-col space-y-6">
        <Image
          src={productVariant.imageUrl}
          alt={productVariant.name}
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto w-full object-cover"
        />

        <div className="px-5">
          <VariantSelector
            selectedVariantSlug={productVariant.slug}
            variants={productVariant.product.variants}
          />
        </div>

        <div className="px-5">
          {/* DESCRIÇÃO */}
          <h2 className="text-lg font-semibold">
            {productVariant.product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant.name}
          </h3>
          <h3 className="text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
        </div>

        <ProductActions
          productVariantId={productVariant.id}
          productImage={productVariant.imageUrl}
          productName={productVariant.product.name}
          variantName={productVariant.name}
        />

        <div className="px-5">
          <p className="text-shadow-amber-600">
            {productVariant.product.description}
          </p>
        </div>

        {likelyProducts.length > 0 && (
          <ProductList title="Talvez você goste" products={likelyProducts} />
        )}
      </div>
    </>
  );
};

export default ProductVariantPage;
