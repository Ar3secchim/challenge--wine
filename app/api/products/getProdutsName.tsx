import { Products } from "@/types/products";
import { getAllProducts } from "./getAllProduts";

export async function getProductsName(query: string) {
  try {
    const res = await getAllProducts();

    const results = res?.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    return {
      results,
      totalListItems: results?.length,
    };
  } catch (error) {
    console.error(error);
  }
}
