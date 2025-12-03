export async function getProducts() {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json();

    return products
}