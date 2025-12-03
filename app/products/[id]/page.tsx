import { Suspense } from 'react';
import { getProductById } from '@/app/_lib/utils';
import Image from 'next/image';
import Navbar from '@/app/_components/navbar';

export default async function Product({ params }: { params: { id: number } }) {
	const { id } = await params;
	const product = await getProductById(id);

	return (
		<div className='w-4/6 mx-auto'>
			<Navbar />
			<main className='p-4'>
				<Suspense fallback={<div>Loading...</div>}>
					<div className='flex flex-row items-center justify-center gap-16'>
						<div className="relative w-[350px] h-[500px]">
							<Image fill src={product.image} alt='product'></Image>
						</div>
						<div className="flex flex-col gap-4 w-[450px]">
							<h2>{product.title}</h2>
							<p>{product.description}</p>
							<div className="bg-green-700 w-[200px] h-[60px] flex items-center justify-center text-2xl">Add to cart</div>
						</div>
					</div>
				</Suspense>
			</main>
		</div>
	);
}
