import { NextResponse } from "next/server";

import products from "@/data/products.json";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const productId = Number((await context.params).id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    return NextResponse.json(product);
  }
  console.log(product);
  return NextResponse.json({ message: "Product not found" }, { status: 404 });
}
