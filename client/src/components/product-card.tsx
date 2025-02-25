import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
