export interface ResponseFetchModel<T> {
  data: T | null;
  status: number;
  message: string;
}

export interface searchResponse {
  data: SearchMinified;
}

export interface SearchMinified {
  author: Author;
  categories: string[];
  items: Item[];
}
export interface Item {
  id?: string;
  title?: string;
  price?: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
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
export interface IServiceParams {
  url: string;
  body?: any;
  headers?: HeadersModel;
}
export interface HeadersModel {
  [key: string]: string;
}