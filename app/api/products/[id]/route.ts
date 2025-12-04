export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    const url = process.env.API_URL || 'https://fakestoreapi.com';
    const { id } = await params;

    const res = await fetch(url + '/products/' + id);
    const data = await res.json();
    return Response.json(data);
}