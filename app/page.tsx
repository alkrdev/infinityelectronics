import { Suspense } from "react";
import Products from "./_components/products";
import { getProducts } from "./_lib/utils";
import Navbar from "./_components/navbar";

export default function Home() { 
  const productsPromise = getProducts();

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
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
