import { Product } from "@/app/interfaces/product.interface";

export async function getProducts(): Promise<Product[]> {
    const url = process.env.API_URL || 'https://fakestoreapi.com';
    
    try {
        const response = await fetch(url + '/products', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; MyApp/1.0)',
                'Accept': 'application/json',
            },
            next: { revalidate: 3600 },
        });
        
        if (!response.ok) {
            const text = await response.text();
            console.error(`API error ${response.status}:`, text);
            return [];
        }
        
        const products: Product[] = await response.json();
        return products;
        
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
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