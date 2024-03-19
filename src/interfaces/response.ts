import { ItemMinified } from "../../modules/domain/models/detailProductModel";

export interface SearchResponse {
  success: boolean;
  items: Item[] | null;
  categories: string[];
}

interface Item {
  id?: string;
  title?: string;
  price?: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  location: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}


export interface DetailProductResponse {
  success: boolean;
  data: ItemMinified;
}