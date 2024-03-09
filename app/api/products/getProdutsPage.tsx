import { Products } from "@/types/products";

export async function getPageProducts(page: number, limit: number) {
  try {
    const res = await fetch(
      `http://localhost:8080/wines?_page=${page}&_limit=${limit}`
    );

    const resultLength = await fetch(`http://localhost:8080/wines?_page=`);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    const results: Products[] = await res.json();
    const totalItems: Products[] = await resultLength.json();
    const totalProducts: number = totalItems.length;

    return {
      data: results,
      metaData: {
        page,
        limit,
        totalProducts,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
