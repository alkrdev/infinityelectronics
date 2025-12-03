import { Product } from "@/app/interfaces/product.interface";

export async function getProducts(): Promise<Product[]> {
    const url = process.env.API_URL || 'https://fakestoreapi.com';

    const data = await fetch(url + '/products')
    const products = await data.json();

    return products
}

export async function getProductById(id: number): Promise<Product> {
    const url = process.env.API_URL || 'https://fakestoreapi.com';

    console.log( process.env.API_URL)

    const data = await fetch(url + '/products/' + id)
    const product = await data.json();

    return product
}