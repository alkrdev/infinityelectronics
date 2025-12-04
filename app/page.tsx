import Navbar from "./components/navbar";
import Products from "./components/products";

export default function Home() { 

  return (
    <div className="w-4/6 mx-auto">
      <Navbar />
      <main className="p-4">
        <h2 className="mb-4">Welcome to infinite opportunities</h2>
        <div className="bg-green-700 text-black h-96">Slider</div> 
        <Products />    
      </main>
    </div>
  );
}
