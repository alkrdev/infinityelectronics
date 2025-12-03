import { Suspense } from "react";

import Products from "./components/products";
import Navbar from "./components/navbar";

import { getProducts } from "./lib/utils";

	export const dynamic = 'force-dynamic';

export default function Home() { 
  const productsPromise = getProducts();

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
      <main className="p-4">
        <h2 className="mb-4">Welcome to infinite opportunities</h2>
        <div className="bg-green-700 text-black h-96">Slider</div>
        <Suspense fallback={<div>Loading...</div>}>          
          <Products products={productsPromise} />
        </Suspense>
      </main>
    </div>
  );
}
