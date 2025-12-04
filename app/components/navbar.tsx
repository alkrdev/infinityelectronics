import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='p-4 border-b flex justify-between items-center mb-16'>
            <Link href={"/"}><h1>InfinityElectronics</h1></Link>
            <div className='flex flex-row gap-4'>
                <Link href='/products'>Products</Link>
                <Link href='/products'>Page</Link>
                <Link href='/products'>Page</Link>
                <Link href='/products'>Page</Link>
            </div>
        </nav>
    )
}