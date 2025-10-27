export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>صفحه دسته‌بندی {params.slug}</h1>
    </div>
  );
}
