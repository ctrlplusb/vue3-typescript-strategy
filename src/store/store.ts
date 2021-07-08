import { InjectionKey } from "vue";
import {
  CommitOptions,
  createStore,
  Store as VuexStore,
  useStore as baseUseStore,
} from "vuex";
import { state, State } from "./state";
import { mutations, Mutations } from "./mutations";

export const key: InjectionKey<VuexStore<State>> = Symbol();

export const store = createStore<State>({
  state,
  mutations,
});

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
/*
 & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
*/
