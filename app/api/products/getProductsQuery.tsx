import { Products } from "@/types/products";

export async function getProductsQuery(query: string) {
  try {
    const res = await fetch(`http://localhost:8080/wines?${query}`);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const results: Products[] = await res.json();
    const resultLength = results.length;

    return {
      results,
      resultLength,
    };
  } catch (error) {
    console.error(error);
  }
}
