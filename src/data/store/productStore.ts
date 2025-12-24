import { error } from "node:console";
import { useSyncExternalStore } from "react";

import type { Product } from "@/types";

import { getAllProducts, getProduct } from "@/services/productService";

interface ProductState {
  list: Product[] | null;
  byId: Record<string, Product>;
  listStatus: "error" | "idle" | "loading" | "success";
  oneStatus: Record<string, "error" | "idle" | "loading" | "success">;
  error: any;
}

let state: ProductState = {
  list: null,
  byId: {},
  listStatus: "idle",
  oneStatus: {},
  error: null,
};

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSnapshot() {
  return state;
}

export function setState(partial: Partial<ProductState>) {
  state = { ...state, ...partial };
  notify();
}

export function useProductStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export async function fetchList() {
  if (state.listStatus === "loading") return;
  if (state.listStatus === "success" && state.list) return;

  try {
    setState({ listStatus: "loading", error: null });

    const data = await getAllProducts();

    const byId = { ...state.byId };
    data.forEach((p: Product) => {
      byId[p.id] = p;
    });

    setState({
      list: data,
      byId,
      listStatus: "success",
    });
  } catch (err) {
    setState({ listStatus: "error", error: err });
  }
}

export async function fetchOne(id: string) {
  if (!id) return;
  if (state.byId[id]) return;

  if (state.oneStatus[id] === "loading") return;

  try {
    setState({
      oneStatus: { ...state.oneStatus, [id]: "loading" },
      error: null,
    });

    const data = await getProduct(id);

    setState({
      byId: { ...state.byId, [id]: data },
      oneStatus: { ...state.oneStatus, [id]: "success" },
    });
  } catch (err) {
    setState({
      oneStatus: { ...state.oneStatus, [id]: "error" },
      error: err,
    });
  }
}
