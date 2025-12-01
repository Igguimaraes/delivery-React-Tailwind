import { useCartStore } from "@/stores/cart-store";
import { useCheckOuStore } from "@/stores/checkout-store";

export const useGenerateMessage = () => {
  const { name, address } = useCheckOuStore();
  const { cart } = useCartStore();

  const orderProducts = [];
  for (const item of cart) {
    orderProducts.push(`${item.quantity} x ${item.product.name} `);
  }

  const message = `**Dados do Cliente:**
nome: ${name}
endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
 ---------
 **Pedido:**
 ${orderProducts.join("\n")}
`;

  return message;
};
