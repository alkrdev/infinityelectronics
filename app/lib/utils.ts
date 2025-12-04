import { Product } from "@/app/interfaces/product.interface";

export async function getProducts(): Promise<Product[]> {   
    const localUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.LOCAL_URL
    const apiUrl = localUrl + '/api/products'

    let products: Product[] = [];
    
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
            next: { revalidate: 3600 },
        });
        
        if (!response.ok) {
            // const text = await response.text();
            // console.error(`API error ${response.status}:`, text);
            return products;
        }
        
        products = await response.json();        
    } catch (error) {
        console.error('Error fetching products:', error);
        
    }
    
    return products;
}

export async function getProductById(id: number): Promise<Product> {
    const localUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.LOCAL_URL
    const apiUrl = localUrl + '/api/products' + id

    let product: Product = {} as Product;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
            next: { revalidate: 3600 },
        })

        if (!response.ok) {
            // const text = await response.text();
            // console.error(`API error ${response.status}:`, text);
            return product;
        }

        product = await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
    }

    return product
}