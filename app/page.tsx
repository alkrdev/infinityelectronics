import { Suspense } from "react";

import Products from "./_components/products";
import Navbar from "./_components/navbar";

import { getProducts } from "./_lib/utils";

export default function Home() { 
  const productsPromise = getProducts();

  return (
    <div className="w-4/6 mx-auto">
      
    </div>
  );
}
