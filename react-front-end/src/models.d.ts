export declare interface Product {
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

export declare interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
