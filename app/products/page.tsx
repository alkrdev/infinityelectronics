import Navbar from "../components/navbar";
import { Suspense } from "react";
import { getProducts } from "../lib/utils";
import Products from "../components/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
      <main className="p-4">			
        <Suspense fallback={<div>Loading...</div>}>        
          <Products products={products}  />    
        </Suspense>
      </main>
    </div>
  );
}
