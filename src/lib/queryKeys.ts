export const queryKeys = {
  products: {
    all: ["products"] as const,
    detail: (id: number | string) => ["products", id] as const,
  },
};
