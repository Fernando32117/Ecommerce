"use client";

import { LogIn } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthDialog = ({ open, onOpenChange }: AuthDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 text-[20px] font-semibold">
            Faça login para continuar
          </DialogTitle>
          <DialogDescription>
            <p className="">
              Você precisa estar logado para adicionar produtos ao carrinho ou
              fazer uma compra. Entre agora e aproveite as nossas promoções !
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Button asChild className="w-full">
            <Link href="/authentication">
              <LogIn></LogIn> Fazer login
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="cursor-pointer"
          >
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
