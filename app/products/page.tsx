import Navbar from "../components/navbar";
import Products from "../components/products";
import { getProducts } from "../lib/utils";
import { Suspense } from "react";

export const revalidate = 3600; // Revalidate every hour

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
