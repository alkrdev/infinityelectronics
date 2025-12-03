import { Product } from "@/_interfaces/product.interface";

export async function getProducts(): Promise<Product[]> {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json();

    return products
}

export async function getProductById(id: number): Promise<Product> {
    const data = await fetch('https://fakestoreapi.com/products/' + id)
    const product = await data.json();

    return product
}