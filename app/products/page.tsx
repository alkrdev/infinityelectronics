import Link from "next/link";
import Image from "next/image";
import { Product } from "../../_interfaces/product.interface";

export default async function Home() {
  const data = await fetch('https://fakestoreapi.com/products')
  const products = await data.json()

  return (
    <div className="w-4/6 mx-auto">
      <nav className="p-4 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">InfinityElectronics</h1>
        <div className="flex flex-row gap-4">
          <Link href="/products">Products</Link>
          <Link href="/products">Page</Link>
          <Link href="/products">Page</Link>
          <Link href="/products">Page</Link>
        </div>
      </nav>
      <main className="p-4">
        <h2 className="text-xl mb-4">Welcome to infinite opportunities</h2>
        <div className="bg-amber-200 text-black h-96">Slider</div>
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
