"use client";

import { ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { forwardRef, useImperativeHandle, useRef } from "react";

import { Button } from "@/components/ui/button";
import { formatCentsToBRL } from "@/helpers/money";
import { useCart } from "@/hooks/queries/use-cart";

import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartItem from "./cart-item";

export interface CartRef {
  open: () => void;
}

interface CartProps {
  trigger?: React.ReactNode;
}

export const Cart = forwardRef<CartRef, CartProps>(({ trigger }, ref) => {
  const { data: cart } = useCart();
  const sheetRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      sheetRef.current?.click();
    },
  }));

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon" ref={sheetRef}>
            <ShoppingBasketIcon />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-1 flex-col">
          {!cart?.items || cart.items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-5 text-center">
              <ShoppingBasketIcon className="text-muted-foreground h-16 w-16" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Seu carrinho está vazio
                </h3>
                <p className="text-muted-foreground text-sm">
                  Adicione produtos ao seu carrinho para começar suas compras
                </p>
              </div>
            </div>
          ) : (
            <>
              <ScrollArea className="min-h-0 flex-1">
                <div className="flex flex-col gap-4 p-5 pb-20">
                  {cart.items.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      productVariantId={item.productVariant.id}
                      productName={item.productVariant.product.name}
                      productVariantName={item.productVariant.name}
                      productVariantImageUrl={item.productVariant.imageUrl}
                      productVariantPriceInCents={
                        item.productVariant.priceInCents
                      }
                      quantity={item.quantity}
                    />
                  ))}
                </div>
              </ScrollArea>

              <div className="bg-background sticky bottom-0 flex flex-col gap-4 border-t p-5">
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Subtotal</p>
                  <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
                </div>
                <Separator />

                <div className="flex items-center justify-between text-sm font-medium">
                  <p>Entrega</p>
                  <p>GRÁTIS</p>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-base font-bold">
                  <p>Total</p>
                  <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
                </div>

                <Button className="mt-2 rounded-full" asChild>
                  <Link href="/cart/identification">Finalizar compra</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
});

Cart.displayName = "Cart";

// SERVER ACTION
