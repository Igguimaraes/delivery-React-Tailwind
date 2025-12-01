"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckouDialog } from "../checkout/dialog";

export const CartSidebar = () => {
  const [checkoutOpen, setcheckoutOpen] = useState(false);
  const { cart } = useCartStore((state) => state);

  let subtotal = 0;
  for (const item of cart) {
    subtotal += item.quantity * item.product.price;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolut size-3 bg-red-600 rounded-full -reight-1 -top-1 "></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div>Subtotal</div>
          <div>R$ {subtotal.toFixed(2)}</div>
        </div>
        <Separator />
        <Button
          onClick={() => setcheckoutOpen(true)}
          disabled={cart.length == 0}
        >
          Finalziar Compra
        </Button>

        <CheckouDialog open={checkoutOpen} onOpenChange={setcheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
