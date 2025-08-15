import Image from "next/image";

const brands = [
  {
    name: "Nike",
    icon: "/simple-icons_nike.svg",
  },
  {
    name: "Adidas",
    icon: "/simple-icons_adidas.svg",
  },
  {
    name: "Puma",
    icon: "/simple-icons_puma.svg",
  },
  {
    name: "New Balance",
    icon: "/simple-icons_newbalance.svg",
  },
  {
    name: "Converse",
    icon: "/simple-icons_converse.svg",
  },
  {
    name: "Polo",
    icon: "/simple-icons_rauph_lauren.svg",
  },
  {
    name: "Zara",
    icon: "/simple-icons_zara.svg",
  },
];

const PartnerBrands = () => {
  return (
    <div className="space-y-6 md:my-15">
      <h2 className="cursor-pointer bg-clip-text px-5 font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-transparent md:text-lg">
        Marcas parceiras
      </h2>
      <div className="flex w-full justify-between gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group flex cursor-pointer flex-col items-center space-y-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 md:h-[135px] md:w-[173px]">
              <Image
                src={brand.icon}
                alt={brand.name}
                width={32}
                height={32}
                className="h-8 w-8 group-hover:brightness-0 group-hover:invert md:h-[55px] md:w-[55px]"
              />
            </div>
            <span className="cursor-pointer bg-clip-text text-center text-[12px] font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:text-transparent md:text-lg">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
