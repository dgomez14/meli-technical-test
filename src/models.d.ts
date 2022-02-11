export declare interface Product {
  thumbnail: string;
  title: string;
  price: string;
  city_name: string;
  category_id: string;
}

export declare interface Category {
  path_from_root: Path[];
}

export declare interface Path {
  id: string;
  name: string;
}
