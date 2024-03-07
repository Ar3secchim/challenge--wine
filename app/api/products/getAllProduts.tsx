import { Products } from "@/types/products";
import { NextApiRequest, NextApiResponse } from "next";

export async function getAllProducts() {
  try {
    const res = await fetch("http://localhost:8080/wines");

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    const products: Products[] = await res.json();
    return products;
  } catch (error) {
    console.error(error);
  }
}
