'use client';
import { Product } from '@/app/interfaces/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

export const dynamic = 'force-dynamic';

export default function Products({ products }: { products: Promise<Product[]> }) {
	const allProducts = use(products);


	return (
		<div className='grid grid-cols-5 gap-4 mt-4'>
			{allProducts.map((product: Product) => (
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
