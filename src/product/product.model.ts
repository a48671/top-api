export class ProductModel {
  id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatingRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: Array<string>;
  tags: string;
  characteristics: {
    [key: string]: string;
  };
}
