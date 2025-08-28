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
import product11 from "../public/img/f84e804a-242c-4317-99d7-2c98fe4c4a09.jpg";
import product12 from "../public/img/409b9557-2b97-4550-8701-a86133119ad0.jpg";
import product13 from "../public/img/cb9cf63f-3718-4293-9eba-762346a3ab1d.jpg";
import product14 from "../public/img/21d27dd4-f661-4b0a-832a-830c89053af8.jpg";
import product15 from "../public/img/22826e36-8dcc-42a6-a084-f9d1d148426d.jpg";
import product16 from "../public/img/dcd3345a-3b3a-41c6-8c69-df857bf1b19e.jpg";
import product17 from "../public/img/xlAXhe4Qcl77yK1O3E4EJPjqI6rVyUUPxhZsGxtz.webp";
import product18 from "../public/img/XyDCsl4sogwSBMx0KsX6GeOGJsu6IouJpw5uR8ov.webp";

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
    image: product1,
  },
  {
    id: 8,
    name: "الطقم الاسود",
    price: 419.99,
    description: "الطقم الاسود نقاب + طرحه",
    image: product8,
  },
  {
    id: 9,
    name: "الطقم الالوان",
    price: 439.99,
    description: "الطقم الالوان نقاب + طرحه",
    image: product9,
  },
  {
    id: 10,
    name: "نقاب",
    price: 199.99,
    description: "نقاب ملكي شيفون سعودي طبي",
    image: product10,
  },
  {
    id: 2,
    name: "نقاب الوان",
    price: 179.99,
    description: "نقاب الوان بدون تندا سعودي طبي",
    image: product2,
  },
  {
    id: 4,
    name: "نقاب الوان ",
    price: 219.99,
    description: "نقاب الوان بتندا سعودي طبي",
    image: product7,
  },
  {
    id: 5,
    name: "سلسله لتثبيت النقاب",
    price: 49.99,
    description: "سلسله لتثبيت النقاب",
    image: product4,
  },
  {
    id: 3,
    name: "نقاب اسود ",
    price: 199.99,
    description: "نقاب اسود بتندا سعودي طبي",
    image: product3,
  },
  {
    id: 6,
    name: "طرحه سوداء",
    price: 249.99,
    description: "طرحه سوداء مستطيله",
    image: product5,
  },
  {
    id: 7,
    name: "طرحه",
    price: 269.99,
    description: "طرحه الوان مستطيله",
    image: product6,
  },
  {
    id: 8,
    name: "شراب",
    price: 69.99,
    description: "شراب كولون طويل",
    image: product11,
  },
  {
    id: 9,
    name: "شراب",
    price: 34.99,
    description: "شراب كولون قصير",
    image: product12,
  },
  {
    id: 10,
    name: "جوانتي",
    price: 49.99,
    description: "جوانتي ليكرا",
    image: product13,
  },
  {
    id: 11,
    name: "معصم",
    price: 74.99,
    description: "معصم بصباع او بكف ليكرا",
    image: product14,
  },
  {
    id: 12,
    name: "معصم",
    price: 79.99,
    description: "معصم تل",
    image: product15,
  },
  {
    id: 13,
    name: "نقاب",
    price: 179.99,
    description: "نقاب ابيض",
    image: product16,
  },
  {
    id: 14,
    name: "نقاب",
    price: 149.99,
    description: "نقاب اسود",
    image: product17,
  },
  {
    id: 15,
    name: "طرحه",
    price: 249.99,
    description: "طرحه سوداء مستطيله",
    image: product18,
  },
];
