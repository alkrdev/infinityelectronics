import Navbar from "../components/navbar";
import Products from "../components/products";

export default async function ProductsPage() {

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
      <main className="p-4">			      
        <Products />    
      </main>
    </div>
  );
}
