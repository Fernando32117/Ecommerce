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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col px-5 pb-5">
          <div className="flex h-full max-h-full flex-col overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex h-full flex-col gap-8">
                {cart?.items.map((item) => (
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
          </div>

          {cart?.items && cart?.items.length > 0 && (
            <div className="flex flex-col gap-4">
              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Subtotal</p>
                <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Entrega</p>
                <p>GRÁTIS</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Total</p>
                <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
              </div>

              <Button className="mt-5 rounded-full" asChild>
                <Link href="/cart/identification">Finalizar compra</Link>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
});

Cart.displayName = "Cart";

// SERVER ACTION
