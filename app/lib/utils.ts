import { Product } from "@/app/interfaces/product.interface";

export async function getProducts(): Promise<Product[]> {
    const url = process.env.API_URL || 'https://fakestoreapi.com';

    let products: Product[] = [];

    try {
        const data = await fetch(url + '/products')
        products = await data.json();
    } catch (error) {
        console.error('Error in delay simulation:', error);
    }

    return products
}

export async function getProductById(id: number): Promise<Product> {
    const url = process.env.API_URL || 'https://fakestoreapi.com';

    let product: Product = {} as Product;

    try {
        const data = await fetch(url + '/products/' + id)
        product = await data.json();
    } catch (error) {
        console.error('Error in delay simulation:', error);
    }

    return product
}