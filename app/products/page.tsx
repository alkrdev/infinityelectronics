import Image from "next/image";
import { Product } from "../interfaces/product.interface";
import Navbar from "../components/navbar";
import { getProducts } from "../lib/utils";

export const dynamic = 'force-dynamic';

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
      <main className="p-4">
        <h2 className="text-xl mb-4">Welcome to infinite opportunities</h2>
        <div className="bg-green-700 text-black h-96">Slider</div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {products.map((product: Product) => (
            <div key={product.id}>
              <Image src={product.image} alt="productimage" width="200" height="200"></Image>
              <div>Product Name</div>
              <div>Category</div>
            </div>
          ))}
          
        </div>
      </main>
    </div>
  );
}
