import Link from "next/link";
import { Suspense } from "react";
import Products from "./_components/products";
import { getProducts } from "./_lib/utils";

export default function Home() { 
  const productsPromise = getProducts();

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
        <Suspense fallback={<div>Loading...</div>}>          
          <Products products={productsPromise} />
        </Suspense>
      </main>
    </div>
  );
}
