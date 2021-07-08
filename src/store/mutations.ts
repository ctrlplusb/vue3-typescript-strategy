import { MutationTree } from "vuex";
import { State } from "./state";

export enum MutationType {
  INCREMENT = "INCREMENT",
}

export type Mutations<S = State> = {
  [MutationType.INCREMENT](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.INCREMENT](state) {
    state.count += 1;
  },
};
