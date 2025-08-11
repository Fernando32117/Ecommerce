"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import AuthDialog from "@/components/ui/auth-dialog";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

import AddToCartButton from "./add-to-cart-button";

interface ProductActionsProps {
  productVariantId: string;
  productImage?: string;
  productName?: string;
  variantName?: string;
}

const ProductActions = ({
  productVariantId,
  productImage,
  productName,
  variantName,
}: ProductActionsProps) => {
  const { data: session } = authClient.useSession();
  const [quantity, setQuantity] = useState(1);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleBuyNow = () => {
    if (!session?.user) {
      setShowAuthDialog(true);
      return;
    }
    // TODO: Implementar lógica de compra direta
  };

  const fullProductName = variantName
    ? `${productName} - ${variantName}`
    : productName;

  return (
    <>
      <div className="px-5 md:px-0">
        <div className="space-y-4">
          <h3 className="font-medium md:text-[15px]">Quantidade</h3>
          <div className="flex w-[100px] items-center justify-between rounded-lg border md:w-[200px]">
            <Button
              className="cursor-pointer"
              size="icon"
              variant="ghost"
              onClick={handleDecrement}
            >
              <MinusIcon />
            </Button>
            <p className="font-semibold md:text-lg">{quantity}</p>
            <Button
              className="cursor-pointer"
              size="icon"
              variant="ghost"
              onClick={handleIncrement}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-5 md:grid md:grid-cols-2 md:gap-5 md:px-0">
        <AddToCartButton
          productVariantId={productVariantId}
          quantity={quantity}
          productImage={productImage}
          productName={fullProductName}
        />
        <Button
          className="cursor-pointer rounded-full md:text-lg"
          size="lg"
          onClick={handleBuyNow}
        >
          Comprar agora
        </Button>
      </div>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
    </>
  );
};

export default ProductActions;
