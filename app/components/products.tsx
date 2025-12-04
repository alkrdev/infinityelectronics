'use client';
import { Product } from '@/app/interfaces/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(process.env.API_URL + '/products')
      .then(res => {
          if (!res.ok) throw new Error('Failed to fetch');
          return res.json();
      })
      .then(data => {
          setProducts(data);
          setLoading(false);
      })
      .catch(err => {
          console.error('Error fetching products:', err);
          setError(true);
          setLoading(false);
      });
	}, []);

	if (loading) {
		return <div className='text-center mt-8'>Loading products...</div>;
	}

	if (error) {
		return <div className='text-center mt-8 text-red-500'>Failed to load products</div>;
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
