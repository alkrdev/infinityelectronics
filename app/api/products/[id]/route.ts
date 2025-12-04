export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
    const url = process.env.API_URL || 'https://fakestoreapi.com';
    const { slug } = await params;

    const res = await fetch(url + '/products/' + slug);
    const data = await res.json();
    return Response.json(data);
}