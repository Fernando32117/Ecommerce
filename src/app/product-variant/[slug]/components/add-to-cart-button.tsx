"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { addProductToCart } from "@/actions/add-cart-product";
import AuthDialog from "@/components/ui/auth-dialog";
import { Button } from "@/components/ui/button";
import CartAnimation from "@/components/ui/cart-animation";
import { authClient } from "@/lib/auth-client";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
  productImage?: string;
  productName?: string;
}

const AddToCartButton = ({
  productVariantId,
  quantity,
  productImage,
  productName,
}: AddToCartButtonProps) => {
  const { data: session } = authClient.useSession();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showCartAnimation, setShowCartAnimation] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: () =>
      addProductToCart({
        productVariantId,
        quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Produto adicionado ao carrinho!", {
        duration: 3000,
      });
      setShowCartAnimation(true);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError: (error) => {
      toast.error("Erro ao adicionar produto", {
        description: "Tente novamente em alguns instantes.",
      });
    },
  });

  const handleAddToCart = () => {
    if (!session?.user) {
      setShowAuthDialog(true);
      return;
    }
    mutate();
  };

  const handleAnimationEnd = () => {
    setShowCartAnimation(false);
  };

  return (
    <>
      <Button
        className="rounded-full"
        size="lg"
        variant="outline"
        disabled={isPending}
        onClick={handleAddToCart}
      >
        {isPending && <Loader2 className="animate-spin" />}
        Adicionar à sacola
      </Button>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />

      <CartAnimation
        isVisible={showCartAnimation}
        onAnimationEnd={handleAnimationEnd}
        productImage={productImage}
        productName={productName}
      />
    </>
  );
};

export default AddToCartButton;
