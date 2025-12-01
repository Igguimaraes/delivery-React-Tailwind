"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepUser } from "@/components/checkout/step-user";
import { StepAddress } from "@/components/checkout/step-adress";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/type/checkout-steps";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckouDialog = ({ open, onOpenChange }: Props) => {
  const [setp, setStep] = useState<CheckoutSteps>("user");

  let progressPct = 0;
  switch (setp) {
    case "user":
      progressPct = 30;
      break;
    case "adress":
      progressPct = 70;
      break;
    case "finish":
      progressPct = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {setp === "user" && "Dados Pessoais"}
            {setp === "adress" && "Endereço de entrega"}
            {setp === "finish" && "Envio para o WhatsApp"}
          </DialogTitle>
        </DialogHeader>

        <Progress value={progressPct} />
        <div className="flex flex-col gap-3">
          {setp === "user" && <StepUser setStep={setStep} />}
          {setp === "adress" && <StepAddress setStep={setStep} />}
          {setp === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
