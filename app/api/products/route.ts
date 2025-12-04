
export async function GET() {
    const url = process.env.API_URL || 'https://fakestoreapi.com';

    const res = await fetch(url + '/products');
    const data = await res.json();
    return Response.json(data);
}