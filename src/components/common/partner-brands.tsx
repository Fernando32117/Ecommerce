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
      <h2 className="px-5 font-semibold md:text-lg">Marcas parceiras</h2>
      <div className="flex w-full justify-between gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex cursor-pointer flex-col items-center space-y-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-sm md:h-[135px] md:w-[173px]">
              <Image
                src={brand.icon}
                alt={brand.name}
                width={32}
                height={32}
                className="h-8 w-8 md:h-[55px] md:w-[55px]"
              />
            </div>
            <span className="text-center text-[12px] font-medium md:text-lg">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
