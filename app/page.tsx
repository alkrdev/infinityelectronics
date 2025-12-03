import Link from "next/link";

export default function Home() {
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
        <div>
          <div>
            <div>Image</div>
            <div>Product Name</div>
            <div>Category</div>
          </div>
        </div>
      </main>
    </div>
  );
}
