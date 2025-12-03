'use client'
import { Product } from "@/_interfaces/product.interface";
import Image from "next/image";
import { use } from "react";

export default function Products({
  products,
}: {
  products: Promise<Product[]>
}) {
  const allProducts = use(products)
            
 
  return (
    <div className="grid grid-cols-5 gap-4 mt-4">
        {allProducts.map((product: Product) => (
            <div key={product.id}>
                <Image src={product.image} alt="productimage" width="200" height="200"></Image>
                <div>Product Name</div>
                <div>Category</div>
            </div>
        ))}
    </div>
  )
}