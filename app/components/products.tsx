'use client';
import { Product } from '@/app/interfaces/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import { useProducts } from '../hooks/useProducts';
import { useState } from 'react';

export default function Products({ paginated = false }: { paginated?: boolean }) {
	const [products, loading, error] = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

	if (loading) {
		return <div className='text-center mt-8'>Loading products...</div>;
	}

	if (error) {
		return <div className='text-center mt-8 text-red-500'>Failed to load products</div>;
	}

	if (paginated) {		
		const indexOfLastProduct = currentPage * productsPerPage;
		const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
		const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
		const totalPages = Math.ceil(products.length / productsPerPage);

		return (
			<>
				<div className='grid grid-cols-5 gap-4 mt-4'>
					{currentProducts.map((product: Product) => (
						<Link
							href={'/products/' + product.id}
							key={product.id}
							className='p-4 h-[360px] bg-gray-600 hover:bg-emerald-700 hover:cursor-pointer flex flex-col justify-center'
						>
							<div className='relative mb-4 size-[200px] mx-auto'>
								<Image src={product.image} alt='productimage' fill={true} objectFit='contain'></Image>
							</div>
							<div className='text-xl'>{product.title}</div>
							<div>{product.category}</div>
						</Link>
					))}
				</div>
				<div className='flex justify-center items-center gap-2 mt-8 mb-8'>
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className='px-4 py-2 bg-gray-600 hover:bg-emerald-700 hover:cursor-pointer disabled:bg-gray-800 disabled:cursor-not-allowed'
					>
						Previous
					</button>

					<span className='px-4'>
						Page {currentPage} of {totalPages}
					</span>

					<button
						onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
						disabled={currentPage === totalPages}
						className='px-4 py-2 bg-gray-600 hover:bg-emerald-700 hover:cursor-pointer disabled:bg-gray-800 disabled:cursor-not-allowed'
					>
						Next
					</button>
				</div>
			</>
		);
	}

	return (
		<div className='grid grid-cols-5 gap-4 mt-4'>
			{products.map((product: Product) => (
				<Link
					href={'/products/' + product.id}
					key={product.id}
					className='p-4 bg-gray-600 hover:bg-emerald-700 hover:cursor-pointer flex flex-col justify-center'
				>
					<div className='relative mb-4 size-[200px] mx-auto'>
						<Image src={product.image} alt='productimage' fill={true} objectFit='contain'></Image>
					</div>
					<div className='text-xl'>{product.title}</div>
					<div>{product.category}</div>
				</Link>
			))}
		</div>
	);
}
