import {
  fetchList,
  fetchOne,
  useProductStore,
} from "@/data/store/productStore";

export function useProduct() {
  const snapshot = useProductStore();

  const AllProduct = () => {
    if (snapshot.listStatus === "idle") {
      void fetchList();
    }

    return {
      data: snapshot.list,
      isLoding: snapshot.listStatus === "loading",
      error: snapshot.error,
    };
  };

  const ProductById = (id: string) => {
    if (id && !snapshot.byId[id] && snapshot.oneStatus[id] !== "loading") {
      void fetchOne(id);
    }
    return {
      data: snapshot.byId[id],
      isLoading: snapshot.oneStatus[id] === "loading",
      error: snapshot.error,
    };
  };

  return { AllProduct, ProductById };
}
