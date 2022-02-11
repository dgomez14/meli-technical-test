export declare interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: string;
  city_name: string;
  category_id: string;
  sold_quantity: number;
  pictures: Picture[];
}

export declare interface Picture {
  secure_url: string;
}

export declare interface ProductDescription {
  plain_text: string;
}

export declare interface Category {
  path_from_root: Path[];
}

export declare interface Path {
  id: string;
  name: string;
}
