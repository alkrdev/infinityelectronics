import { useState, useEffect } from 'react';
import { Product } from '../interfaces/product.interface';

export function useProducts() { 
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
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
    
    return [products, loading, error] as const;
}