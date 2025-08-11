/* eslint-disable @next/next/no-img-element */
"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

interface CartAnimationProps {
  isVisible: boolean;
  onAnimationEnd: () => void;
  productImage?: string;
  productName?: string;
}

const CartAnimation = ({
  isVisible,
  onAnimationEnd,
  productImage,
  productName,
}: CartAnimationProps) => {
  const [animationPhase, setAnimationPhase] = useState<
    "idle" | "appearing" | "visible" | "disappearing"
  >("idle");

  useEffect(() => {
    if (isVisible) {
      setAnimationPhase("appearing");

      // Fase 1: Aparecer
      const appearTimer = setTimeout(() => {
        setAnimationPhase("visible");
      }, 100);

      // Fase 2: Permanecer visível
      const visibleTimer = setTimeout(() => {
        setAnimationPhase("disappearing");
      }, 4500);

      // Fase 3: Desaparecer
      const disappearTimer = setTimeout(() => {
        setAnimationPhase("idle");
        onAnimationEnd();
      }, 4500);

      return () => {
        clearTimeout(appearTimer);
        clearTimeout(visibleTimer);
        clearTimeout(disappearTimer);
      };
    }
  }, [isVisible, onAnimationEnd]);

  if (animationPhase === "idle") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Overlay de fundo com fade */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          animationPhase === "disappearing" ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Produto que está sendo adicionado */}
          <div
            className={`transition-all duration-500 ease-out ${
              animationPhase === "appearing"
                ? "translate-y-0 scale-100 opacity-100"
                : animationPhase === "visible"
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-75 opacity-0"
            }`}
          >
            <div className="max-w-xs rounded-xl border border-gray-100 bg-white p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                {productImage ? (
                  <div className="relative">
                    <img
                      src={productImage}
                      alt={productName || "Produto"}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                    {/* Badge de sucesso */}
                    <div className="bg-primary absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-white">
                      <svg
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100">
                    <ShoppingBag className="h-7 w-7 text-gray-400" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {productName || "Produto adicionado"}
                  </p>
                  <p className="text-primary flex items-center gap-1 text-xs font-medium">
                    <span className="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
                    Adicionado ao carrinho
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ícone do carrinho flutuante */}
          <div
            className={`absolute -top-2 -right-2 transition-all delay-100 duration-700 ${
              animationPhase === "visible" || animationPhase === "disappearing"
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-0 opacity-0"
            }`}
          >
            <div className="bg-primary animate-bounce rounded-full p-3 text-white shadow-lg">
              <ShoppingBag className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAnimation;
