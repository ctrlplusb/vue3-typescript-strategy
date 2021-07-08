import { useStore as baseUseStore } from "vuex";
import { key, Store } from "./store";

export function useStore(): Store {
  return baseUseStore(key);
}
