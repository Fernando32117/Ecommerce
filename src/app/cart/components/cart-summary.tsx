import Image from "next/image";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCentsToBRL } from "@/helpers/money";

interface CartSummaryProps {
  subtotalInCents: number;
  totalInCents: number;
  products: Array<{
    id: string;
    name: string;
    variantName: string;
    quantity: number;
    priceInCents: number;
    imageUrl: string;
  }>;
}

const CartSummary = ({
  subtotalInCents,
  totalInCents,
  products,
}: CartSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <p className="text-sm">Subtotal</p>
          <p className="text-muted-foreground text-sm font-medium">
            {formatCentsToBRL(subtotalInCents)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Frete</p>
          <p className="text-muted-foreground text-sm font-medium">GRÁTIS</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Total</p>
          <p className="text-muted-foreground text-sm font-medium">
            {formatCentsToBRL(totalInCents)}
          </p>
        </div>

        <div className="py-3">
          <Separator />
        </div>

        {products.map((product) => (
          <div className="flex items-center justify-between" key={product.id}>
            <div className="relative flex items-center gap-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={78}
                height={78}
                className="rounded-lg"
              />
              {/* Badge de quantidade sobreposto à imagem */}
              <Badge
                className="bg-primary absolute bottom-1 rounded-full border border-white px-2 py-1 text-xs font-bold text-white shadow-lg"
                style={{
                  minWidth: 22,
                  minHeight: 22,
                }}
              >
                {product.quantity}
              </Badge>
              <div className="ml-2 flex flex-col gap-1">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-muted-foreground text-xs font-medium">
                  {product.variantName}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center gap-2">
              <p className="text-sm font-bold">
                {formatCentsToBRL(product.priceInCents * product.quantity)}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CartSummary;
