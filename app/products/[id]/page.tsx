'use client'
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import { useProduct } from '@/app/hooks/useProduct';
import { use } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	const [product, loading, error] = useProduct(id);
	
	if (loading) {
		return <div className='text-center mt-8'>Loading product...</div>;
	}

	if (error) {
		return <div className='text-center mt-8 text-red-500'>Failed to load product</div>;
	}

	return (
		<div className='w-4/6 mx-auto'>
			<Navbar />
			<main className='p-4'>
				<div className='flex flex-row items-center justify-center gap-16'>
					<div className="relative size-[700px] m-16">
						<Image fill src={product.image} objectFit='contain' alt='product'></Image>
					</div>
					<div className="flex flex-col gap-4 w-[450px] m-16">
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<div className="bg-green-700 w-[200px] h-[60px] flex items-center justify-center text-2xl hover:bg-green-600 hover:cursor-pointer">Add to cart</div>
					</div>
				</div>
			</main>
		</div>
	);
}
