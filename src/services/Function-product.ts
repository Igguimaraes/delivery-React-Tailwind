import { products } from "@/data/products";
import { Product } from "@/type/product";

export const getAallProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
