export function formatPrice(price: number): string {
  // Convert price to Iranian Toman and format with commas
  const tomanPrice = Math.round(price * 50000);
  return tomanPrice.toLocaleString("fa-IR") + " تومان";
}

export function formatPriceShort(price: number): string {
  // Format price in shorter format (K, M)
  const tomanPrice = Math.round(price * 50000);

  if (tomanPrice >= 1000000) {
    return Math.round(tomanPrice / 1000000) + "M تومان";
  } else if (tomanPrice >= 1000) {
    return Math.round(tomanPrice / 1000) + "K تومان";
  } else {
    return tomanPrice.toLocaleString("fa-IR") + " تومان";
  }
}

export function parsePriceFromToman(tomanPrice: string): number {
  // Parse Toman price string back to original price
  const numericPrice = parseFloat(tomanPrice.replace(/[^0-9.]/g, ""));
  return numericPrice / 50000;
}
