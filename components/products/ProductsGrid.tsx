import { Product } from "@/types/product";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import FavoriteToggleButton from "./FavoriteToggleButon";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      priority
                      src={image}
                      alt={name}
                      width={400}
                      height={300}
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      className="rounded w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg text-center">{name}</h2>
                    <p className="text-muted-foreground">{dollarsAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
