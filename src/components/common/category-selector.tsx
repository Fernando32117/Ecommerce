import Link from "next/link";

import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="w-full rounded-3xl bg-[#F4EFFF] p-6 md:p-10">
      <div className="grid w-full grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="w-full"
          >
            <Button
              variant="ghost"
              className="w-full cursor-pointer rounded-full bg-white text-sm font-semibold md:py-8 md:text-lg"
            >
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
