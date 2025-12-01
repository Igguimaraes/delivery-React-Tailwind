import { useCheckOuStore } from "@/stores/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { useGenerateMessage } from "@/lib/generete-message";

export const StepFinish = () => {
  const {} = useCheckOuStore((state) => state);
  const message = useGenerateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;
  return (
    <div className="text-center flex flex-col gap-5">
      <p>Estamos quase pronto!</p>
      <p>Envie seu pedido para um dos nosso time para concluir o seu pedido.</p>
      <Button>
        <Link target="_blank" href={linkZap}>
          Enviar Para WhatsApp
        </Link>
      </Button>
    </div>
  );
};
