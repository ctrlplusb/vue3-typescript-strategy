import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({ name: "counter" })
export class CounterModule extends VuexModule {
  count = 0;

  @Mutation
  increment(delta: number) {
    this.count += delta;
  }

  @Mutation
  decrement(delta: number) {
    this.count -= delta;
  }
}
