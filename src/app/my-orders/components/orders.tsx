"use client";

import CartSummary from "@/app/cart/components/cart-summary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { orderTable } from "@/db/schema";

interface OrdersProps {
  orders: Array<{
    id: string;
    totalPriceInCents: number;
    status: (typeof orderTable.$inferSelect)["status"];
    createdAt: Date;
    items: Array<{
      id: string;
      imageUrl: string;
      productName: string;
      productVariantName: string;
      priceInCents: number;
      quantity: number;
    }>;
  }>;
}

const Orders = ({ orders }: OrdersProps) => {
  return (
    <div className="space-y-5">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent>
            <Accordion type="single" collapsible key={order.id}>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    {order.status === "paid" && <Badge>Pago</Badge>}
                    {order.status === "pending" && (
                      <Badge variant="secondary">Pendente</Badge>
                    )}
                    {order.status === "canceled" && (
                      <Badge variant="destructive">Cancelado</Badge>
                    )}
                    <p>
                      Pedido feito em{" "}
                      {new Date(order.createdAt).toLocaleDateString("pt-BR")} às{" "}
                      {new Date(order.createdAt).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <CartSummary
                    subtotalInCents={order.items.reduce(
                      (acc, item) => acc + item.priceInCents * item.quantity,
                      0,
                    )}
                    totalInCents={order.totalPriceInCents}
                    products={order.items.map((item, index) => ({
                      id: `${order.id}-${index}`,
                      imageUrl: item.imageUrl,
                      name: item.productName,
                      variantName: item.productVariantName,
                      priceInCents: item.priceInCents,
                      quantity: item.quantity,
                    }))}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Orders;
