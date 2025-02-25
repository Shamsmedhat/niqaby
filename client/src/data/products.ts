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
    name: "Minimalist Watch",
    price: 199.99,
    description: "Elegant timepiece with modern design",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 2,
    name: "Premium Skincare Set",
    price: 89.99,
    description: "Natural ingredients for radiant skin",
    image: "https://images.unsplash.com/photo-1556228578-567ba127e37f"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 149.99,
    description: "Crystal clear audio experience",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    id: 4,
    name: "Smart Home Hub",
    price: 299.99,
    description: "Control your home with voice commands",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a"
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 179.99,
    description: "UV protection with style",
    image: "https://images.unsplash.com/photo-1525904097878-94fb15835963"
  },
  {
    id: 6,
    name: "Luxury Handbag",
    price: 399.99,
    description: "Handcrafted Italian leather",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0"
  },
  {
    id: 7,
    name: "Premium Coffee Maker",
    price: 249.99,
    description: "Barista-quality coffee at home",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908"
  },
  {
    id: 8,
    name: "Wireless Headphones",
    price: 279.99,
    description: "Premium sound quality",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  }
];
