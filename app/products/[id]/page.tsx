'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import { Product } from '@/app/interfaces/product.interface';

export default function ProductPage({ params }: { params: { id: number } }) {
	const { id } = params;
	const [product, setProduct] = useState<Product>({} as Product);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	
	useEffect(() => {
		fetch('https://fakestoreapi.com/products/' + id)
		.then(res => {
			if (!res.ok) throw new Error('Failed to fetch');
			return res.json();
		})
		.then(data => {
			setProduct(data);
			setLoading(false);
		})
		.catch(err => {
			console.error('Error fetching products:', err);
			setError(true);
			setLoading(false);
		});
		}, [id]);
	
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
						<div className="bg-green-700 w-[200px] h-[60px] flex items-center justify-center text-2xl">Add to cart</div>
					</div>
				</div>
			</main>
		</div>
	);
}
