"use client";

import {
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { categoryTable } from "@/db/schema";
import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Cart, CartRef } from "./cart";

interface HeaderProps {
  categories?: (typeof categoryTable.$inferSelect)[];
}

export const Header = ({ categories = [] }: HeaderProps) => {
  const { data: session } = authClient.useSession();
  const cartRef = useRef<CartRef>(null);

  const handleOpenCart = () => {
    cartRef.current?.open();
  };

  return (
    <header>
      {/* Desktop Header */}
      <div className="hidden md:block">
        {/* Top Header Bar */}
        <div className="mx-5 mt-5 rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            {/* Left - User Info */}
            <div className="flex items-center gap-2">
              <div className="group flex cursor-pointer items-center gap-2">
                <UserIcon className="h-5 w-5 text-gray-600 transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text md:h-10 md:w-10" />
                <span className="font-medium text-gray-800 transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent md:text-lg">
                  Olá, {session?.user?.name?.split(" ")?.[0] || "faça Login"}!
                </span>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 transform">
              <Link href="/" className="group">
                <div className="flex items-center gap-0.5">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    E
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    C
                  </span>
                  <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    O
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    M
                  </span>
                  <span className="bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    M
                  </span>
                  <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    E
                  </span>
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    R
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    C
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105 md:text-5xl">
                    E
                  </span>
                </div>
                <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="md:text-lg">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="px-5">
                    {session?.user ? (
                      <>
                        <div className="flex justify-between space-y-6">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 md:h-20 md:w-20">
                              <AvatarImage
                                src={session?.user?.image as string | undefined}
                                className="h-10 w-10 md:h-20 md:w-20"
                              />
                              <AvatarFallback className="flex h-10 w-10 items-center justify-center text-lg md:h-20 md:w-20 md:text-3xl">
                                {session?.user?.name?.split(" ")?.[0]?.[0]}
                                {session?.user?.name?.split(" ")?.[1]?.[0]}
                              </AvatarFallback>
                            </Avatar>

                            <div>
                              <h3 className="font-semibold md:text-lg">
                                {session?.user?.name}
                              </h3>
                              <span className="text-muted-foreground block text-xs md:text-lg">
                                {session?.user?.email}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => authClient.signOut()}
                            className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
                          >
                            <LogOutIcon />
                          </Button>
                        </div>
                        <div className="mt-8 mb-8 flex flex-col gap-3">
                          <Button
                            asChild
                            className="w-full cursor-pointer justify-start rounded-full bg-white text-base font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white md:py-7 md:text-lg"
                            variant="outline"
                          >
                            <Link href="/" className="flex items-center gap-3">
                              <HomeIcon className="h-5 w-5" />
                              Início
                            </Link>
                          </Button>
                          <Button
                            asChild
                            className="w-full cursor-pointer justify-start rounded-full bg-white text-base font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white md:py-7 md:text-lg"
                            variant="outline"
                          >
                            <Link
                              href="/my-orders"
                              className="flex items-center gap-3"
                            >
                              <TruckIcon className="h-5 w-5" />
                              Meus Pedidos
                            </Link>
                          </Button>
                          <Button
                            onClick={handleOpenCart}
                            className="w-full cursor-pointer justify-start rounded-full bg-white text-[15px] font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white md:py-7 md:text-lg"
                            variant="outline"
                          >
                            <div className="flex items-center gap-3">
                              <ShoppingBagIcon className="h-5 w-5" />
                              Sacola
                            </div>
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between">
                        <h2 className="font-semibold md:text-lg">
                          Olá. Faça seu login!
                        </h2>
                        <Button
                          size="icon"
                          asChild
                          variant="outline"
                          className="transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white"
                        >
                          <Link href="/authentication">
                            <LogInIcon />
                          </Link>
                        </Button>
                      </div>
                    )}
                    {categories.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-muted-foreground mb-4 text-sm font-semibold md:text-lg">
                          Categorias
                        </h3>
                        <div className="flex flex-col gap-2">
                          {categories.map((category) => (
                            <Button
                              key={category.id}
                              variant="ghost"
                              className="bg-primary-foreground cursor-pointer justify-start rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white md:py-7 md:text-lg"
                              asChild
                            >
                              <Link href={`/category/${category.slug}`}>
                                {category.name}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              <div className="h-6 w-px bg-gray-300"></div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleOpenCart}
              >
                <ShoppingBagIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        {categories.length > 0 && (
          <div className="mt-10 mb-10 p-5">
            <nav className="flex items-center justify-center gap-20 space-x-20">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="group bg-clip-text font-medium text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-transparent md:text-xl"
                >
                  {category.name}
                  <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="group">
            <div className="flex items-center gap-0.5">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                E
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                C
              </span>
              <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                O
              </span>
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                M
              </span>
              <span className="bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                M
              </span>
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                E
              </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                R
              </span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                C
              </span>
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:scale-105">
                E
              </span>
            </div>
            <div className="h-0.5 w-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full md:h-1.5"></div>
          </Link>

          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="px-5">
                  {session?.user ? (
                    <>
                      <div className="flex justify-between space-y-6">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={session?.user?.image as string | undefined}
                            />
                            <AvatarFallback>
                              {session?.user?.name?.split(" ")?.[0]?.[0]}
                              {session?.user?.name?.split(" ")?.[1]?.[0]}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <h3 className="font-semibold">
                              {session?.user?.name}
                            </h3>
                            <span className="text-muted-foreground block text-xs">
                              {session?.user?.email}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => authClient.signOut()}
                        >
                          <LogOutIcon />
                        </Button>
                      </div>
                      <div className="mt-8 mb-8 flex flex-col gap-3">
                        <Button
                          asChild
                          className="justify-start"
                          variant="outline"
                        >
                          <Link
                            href="/"
                            className="hover:text-primary flex items-center gap-3 text-base font-medium transition-colors"
                          >
                            <HomeIcon className="h-5 w-5" />
                            Início
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="justify-start"
                          variant="outline"
                        >
                          <Link
                            href="/my-orders"
                            className="hover:text-primary flex items-center gap-3 text-base font-medium transition-colors"
                          >
                            <TruckIcon className="h-5 w-5" />
                            Meus Pedidos
                          </Link>
                        </Button>
                        <Button
                          onClick={handleOpenCart}
                          className="justify-start"
                          variant="outline"
                        >
                          <div className="hover:text-primary flex items-center gap-3 text-[15px] font-medium transition-colors">
                            <ShoppingBagIcon className="h-5 w-5" />
                            Sacola
                          </div>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold">Olá. Faça seu login!</h2>
                      <Button size="icon" asChild variant="outline">
                        <Link href="/authentication">
                          <LogInIcon />
                        </Link>
                      </Button>
                    </div>
                  )}
                  {categories.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-muted-foreground mb-4 text-sm font-semibold">
                        Categorias
                      </h3>
                      <div className="flex flex-col gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category.id}
                            variant="ghost"
                            className="cursor-pointer justify-start rounded-lg text-sm font-medium"
                            asChild
                          >
                            <Link href={`/category/${category.slug}`}>
                              {category.name}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            <Cart ref={cartRef} />
          </div>
        </div>
      </div>
    </header>
  );
};
