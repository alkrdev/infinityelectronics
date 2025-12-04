import { Suspense } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import { getProductById } from '@/app/lib/utils';


export default async function Product({ params }: { params: { id: number } }) {
	const { id } = params;
	const product = await getProductById(id);

	return (
		<div className='w-4/6 mx-auto'>
			<Navbar />
			<main className='p-4'>
				<Suspense fallback={<div>Loading...</div>}>
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
				</Suspense>
			</main>
		</div>
	);
}
