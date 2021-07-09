import { getModule } from "vuex-module-decorators";
import { CounterModule } from "./modules";
import { store } from "./store";

export const useCounterModule = () => getModule(CounterModule, store);
