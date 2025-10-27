export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>صفحه محصول {params.id}</h1>
    </div>
  );
}
