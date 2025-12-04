import Products from "./components/products";
import Navbar from "./components/navbar";
import { getProducts } from "./lib/utils";
import { Suspense } from "react";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() { 
  const products = await getProducts();

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
      <main className="p-4">
        <h2 className="mb-4">Welcome to infinite opportunities</h2>
        <div className="bg-green-700 text-black h-96">Slider</div> 
        <Suspense fallback={<div>Loading...</div>}>        
          <Products products={products}  />    
        </Suspense>
      </main>
    </div>
  );
}
