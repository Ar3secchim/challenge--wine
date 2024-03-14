export interface Products {
  id: number;
  name: string;
  type: string;
  region: string;
  country: string;
  year: number;
  grape_varieties: string[];
  price:number;
  discount_for_members: number;
  promotion: number;
}
