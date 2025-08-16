import { desc } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";

import CategorySelector from "@/components/common/category-selector";
import { Header } from "@/components/common/header";
import PartnerBrands from "@/components/common/partner-brands";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header categories={categories} />
      <div className="mt-20 space-y-6 md:pt-20">
        <div className="px-5 md:pt-25">
          <Link href="/category/camisetas">
            <Image
              src="/capa1.svg"
              alt="Leve uma vida com estilo"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full cursor-pointer md:hidden"
            />
          </Link>
          <Link href="/category/camisetas">
            <Image
              src="/capa2.svg"
              alt="Leve uma vida com estilo"
              height={0}
              width={0}
              sizes="100vw"
              className="hidden h-auto w-full cursor-pointer md:block"
            />
          </Link>
        </div>

        <PartnerBrands />

        <ProductList products={products} title="Mais vendidos" />

        <ProductList
          products={[...products].sort((a, b) => a.name.localeCompare(b.name))}
          title="Você pode gostar"
        />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Link href="/category/jaquetas-moletons">
            <Image
              src="/banner2.svg"
              alt="Leve uma vida com estilo"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-full cursor-pointer md:hidden"
            />
          </Link>
          <div className="hidden w-full overflow-hidden md:grid md:grid-cols-2 md:gap-4">
            <Link href="/category/tnis" className="block h-auto w-full">
              <Image
                src="/bannerTenis2.svg"
                alt="Nike Therma FIT Headed"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full cursor-pointer"
              />
            </Link>
            <Link href="/category/tnis" className="block h-auto w-full">
              <Image
                src="/bannerTenis1.svg"
                alt="Nike Therma FIT Headed"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
      </div>
    </>
  );
};

export default Home;
