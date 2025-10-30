import { NextResponse } from "next/server";

import products from "@/data/products.json";

export function GET() {
  return NextResponse.json(products);
}
