export interface ItemMinified {
  author: Author;
  item: Item;
}
interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  categories: string[];
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
export interface Author {
  name: string | undefined;
  lastname: string | undefined;
}
