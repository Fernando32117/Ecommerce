import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productVariantTable } from "@/db/schema";
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
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header categories={categories} />
      <div className="mx-auto w-[90%] px-4 md:px-6 lg:px-8">
        <div className="grid py-6 md:grid-cols-2 md:items-start md:gap-12 md:py-5 lg:gap-16">
          <div className="md:sticky md:top-6">
            <Image
              src={productVariant.imageUrl}
              alt={productVariant.name}
              sizes="(max-width: 768px) 100vw, 50vw"
              height={0}
              width={0}
              className="h-auto w-full object-cover md:rounded-lg"
              priority
            />
          </div>

          {/* Seção dos detalhes do produto */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div className="px-5 md:px-0">
              <VariantSelector
                selectedVariantSlug={productVariant.slug}
                variants={productVariant.product.variants}
              />
            </div>

            <div className="space-y-2 px-5 md:px-0">
              <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
                {productVariant.product.name}
              </h2>
              <h3 className="text-muted-foreground text-sm md:text-base">
                {productVariant.name}
              </h3>
              <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
                {formatCentsToBRL(productVariant.priceInCents)}
              </h3>
            </div>

            <ProductActions
              productVariantId={productVariant.id}
              productImage={productVariant.imageUrl}
              productName={productVariant.product.name}
              variantName={productVariant.name}
            />

            <div className="md:align-center space-y-4 px-5 md:mt-5 md:px-0">
              <h4 className="text-base font-semibold md:text-[20px]">
                Descrição
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {productVariant.product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductList
        products={[...products].sort((b, a) => a.name.localeCompare(b.name))}
        title="Você pode gostar"
      />
    </>
  );
};

export default ProductVariantPage;
