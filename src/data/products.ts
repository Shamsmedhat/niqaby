import product1 from "../public/img/product1.jpg";
import product2 from "../public/img/product2.jpg";
import product3 from "../public/img/product3.jpg";
import product7 from "../public/img/product7.jpg";
import product4 from "../public/img/product4.jpg";
import product5 from "../public/img/product5.jpg";
import product6 from "../public/img/product6.jpg";
import product10 from "../public/img/product10.jpg";
import product8 from "../public/img/product8.jpg";
import product9 from "../public/img/product9.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "نقاب اسود",
    price: 169.99,
    description: "نقاب اسود بدون تندا سعودي طبي",
    image: product1
  },
  {
    id: 8,
    name: "الطقم الاسود",
    price: 419.99,
    description: "الطقم الاسود نقاب + طرحه",
    image: product8
  },
  {
    id: 9,
    name: "الطقم الالوان",
    price: 439.99,
    description: "الطقم الالوان نقاب + طرحه",
    image: product9
  },
  {
    id: 10,
    name: "نقاب",
    price: 199.99,
    description: "نقاب ملكي شيفون سعودي طبي",
    image: product10
  },
  {
    id: 2,
    name: "نقاب الوان",
    price: 179.99,
    description: "نقاب الوان بدون تندا سعودي طبي",
    image: product2
  },
  {
    id: 4,
    name: "نقاب الوان ",
    price: 219.99,
    description: "نقاب الوان بتندا سعودي طبي",
    image: product7
  },
  {
    id: 5,
    name: "سلسله لتثبيت النقاب",
    price: 49.99,
    description: "سلسله لتثبيت النقاب",
    image: product4
  },
  {
    id: 3,
    name: "نقاب اسود ",
    price: 199.99,
    description: "نقاب اسود بتندا سعودي طبي",
    image: product3
  },
  {
    id: 6,
    name: "طرحه سوداء",
    price: 249.99,
    description: "طرحه سوداء مستطيله",
    image: product5
  },
  {
    id: 7,
    name: "طرحه",
    price: 269.99,
    description: "طرحه الوان مستطيله",
    image: product6
  }
];
