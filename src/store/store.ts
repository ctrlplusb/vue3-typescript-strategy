import { InjectionKey } from "vue";
import { createStore } from "vuex";
import { CounterModule } from "./modules";

export const store = createStore({
  modules: {
    counter: CounterModule,
  },
});

export type Store = typeof store;

export const key: InjectionKey<Store> = Symbol();
