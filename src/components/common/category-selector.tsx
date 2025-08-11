import Link from "next/link";

import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="rounded-3xl bg-[#F4EFFF] p-6 md:p-10">
      <div className="grid grid-cols-2 gap-3 md:gap-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className="cursor-pointer rounded-full bg-white text-sm font-semibold md:py-8 md:text-lg"
          >
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
